'use strict';

class MapContainer extends React.Component {
  
  constructor(props) {
    super(props);
    this.container = React.createRef();
    this.state = { 
      lat : null,
      lot : null,
      mapDragStart : null,
      mapPositionX : 0,
      mapPositionY : 0,
      tempPositionX : 0,
      tempPositionY : 0,
      mapStyle : 'normal',
      selectNode : null,
      nearNode : null,
      targetNode : null,
      navigationMode : null,
    };
  }



  componentDidMount() {
    console.log('componentDidMount');
  }


  mapChange = (value) =>{
    this.setState({
      mapStyle : value,
    })
  }
 

  nearNode = (lat,lot)=>{
    let min = Infinity
    let num = null

    let nodeList = node.filter( node =>(node.type!="Building"));
    // let nodeList =node
    console.log(nodeList,'테스트중')
    for (let index = 0; index < nodeList.length; index++) {
      lot = Math.abs(this.state.lot - nodeList[index].lot)
      lat = Math.abs(this.state.lat - nodeList[index].lat)
      if (min > lot+lat){
        min = lot+lat
        num = nodeList[index].num
      }
    }    
    return(num)
  }


  dragimg = (e) => {
    let img = document.createElement("img");
    img.src = 'data:image/gif;base64,R0lGODlhAQABAIAAAAUEBAAAACwAAAAAAQABAAACAkQBADs=';
    e.dataTransfer.setDragImage(img, 0, 0);
  }

  nodeChange = (num=null) =>{
    this.setState({
      selectNode : num,
    })
  }
  targetNodeChange = (num=null,mode=null) =>{
    this.setState({
      targetNode : num,
      navigationMode : mode,
    })
  }


  mapDrag = (e) =>{
    try {
      if(e.pageX!=0 && e.pageY!=0){
      let moveX = e.clientX - this.state.mapDragStart.clientX 
      let moveY = e.clientY - this.state.mapDragStart.clientY
      console.log('move?',moveX,moveY)
      this.setState({
        tempPositionX : moveX,
        tempPositionY : moveY,
      })
    }

    } catch (error) {
      
    }
  }
  mapDragStart = (e) =>{
    let img = document.createElement("img");
    img.src = 'data:image/gif;base64,R0lGODlhAQABAIAAAAUEBAAAACwAAAAAAQABAAACAkQBADs=';
    e.dataTransfer.setDragImage(img, 0, 0);
    this.setState({
      mapDragStart : e,
    })
  }
  mapDragEnd = (e) =>{
    try {
      let moveX = e.clientX - this.state.mapDragStart.clientX 
      let moveY = e.clientY - this.state.mapDragStart.clientY
      this.setState({
        tempPositionY : 0,
        tempPositionX : 0,
        mapPositionX : this.state.mapPositionX+moveX,
        mapPositionY : this.state.mapPositionY+moveY,

      })

    } catch (error) {
      
    }
   
  }

  render() {
    navigator.geolocation.getCurrentPosition(position => {
      const { accuracy, latitude, longitude, altitude, altitudeAccuracy, heading } = position.coords;
      let nearNode = this.nearNode(latitude,longitude)
  
      this.setState({
        lat : latitude,
        lot : longitude,
        acc : accuracy,
        heading : heading,
        alt : altitude,
        altAcc:altitudeAccuracy,
        lot : longitude,
        nearNode : nearNode
      })
      // Show a map centered at latitude / longitude.
    },error => {
      
    },{enableHighAccuracy:true});
  
    let userLat = (this.state.lat-this.props.MapContainer.start.lat)/this.props.MapContainer.map.lat*-1
    let userLot = (this.state.lot-this.props.MapContainer.start.lot)/this.props.MapContainer.map.lot*-1
    return (
         <div id="MapContainer" >
          <div id="MapMain"
            tabIndex={0} draggable="true" 
            ref={this.container}
            onClick={(e)=>console.log(this.nodeChange(null))} 
            onDrag={(e)=>this.mapDrag(e)} 
            onDragStart={(e) => this.mapDragStart(e)} 
            onDragEnd={(e) => this.mapDragEnd(e)} 
          >
            <MapObjcet  
              key={'MapObjcet'} 
              MapContainer={this.props.MapContainer} 
              top={this.state.mapPositionY+this.state.tempPositionY} 
              left={this.state.mapPositionX+this.state.tempPositionX}  
              userLat={userLat} 
              userLot={userLot} 
              container={this.container.current} 
              mapStyle={this.state.mapStyle}
              nodeChange={this.nodeChange}
              nearNode={this.state.nearNode}
              targetNode={this.state.targetNode}
              selectNode={this.state.selectNode}
              navigationMode={this.state.navigationMode}/>
          </div>
          <div id="MapSide">
            <MapNavigation
              state={this.state}
              userLat={userLat}
              userLot={userLot}
              nodeChange={this.nodeChange}
              targetNodeChange={this.targetNodeChange}
              mapChange={this.mapChange}
              selectNode={this.state.selectNode}
            />
          </div>
        </div>
    );
  }
}

const start = {lat : 37.60965984432401,lot :126.93169409413956}
const end = {lat : 37.60698981976014,lot :126.9356589874949} 

MapContainer.defaultProps = {
  MapContainer: {
    start :start,
    end :end,
    map : {
      lat : start.lat- end.lat,
      lot : start.lot- end.lot
    }
  }
};



let domContainer = document.querySelector('#MapFrame');
ReactDOM.render(<MapContainer/>, domContainer);


