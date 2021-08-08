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

  mapDrag = (e) =>{
    try {
      if(e.pageX!=0 && e.pageY!=0){
      let moveX = e.clientX - this.state.mapDragStart.clientX 
      let moveY = e.clientY - this.state.mapDragStart.clientY
      console.log('move',moveX,moveY)
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
      // console.log(position)
      const { accuracy, latitude, longitude, altitude, altitudeAccuracy, heading } = position.coords;

  
      this.setState({
        lat : latitude,
        lot : longitude,
        acc : accuracy,
        heading : heading,
        alt : altitude,
        altAcc:altitudeAccuracy,
        lot : longitude,
      })
      // Show a map centered at latitude / longitude.
    },error => {
      
    },{enableHighAccuracy:true});


    let userLat = (this.state.lat-this.props.MapContainer.start.lat)/this.props.MapContainer.map.lat*-1
    let userLot = (this.state.lot-this.props.MapContainer.start.lot)/this.props.MapContainer.map.lot*-1
    console.log(this.state.mapPositionY+this.state.tempPositionY,'값')
    return (
         <div id="MapContainer" >
          {/* 맵입니다. 테스트중입니다 13
          top : {this.state.mapPositionY} + {this.state.tempPositionY} = {this.state.mapPositionY+this.state.tempPositionY} left : {this.state.mapPositionX} + {this.state.tempPositionX} = {this.state.mapPositionX+this.state.tempPositionX}
          <p> 
          my latitude : {userLat}
          </p>
          <p> 
          my longitude : {userLot}
          </p>
          <p> 
          map latitude : {this.props.MapContainer.map.lat}
          </p>
          <p> 
          map longitude : {this.props.MapContainer.map.lot}
          </p> */}

         
          {/* <MapTest key={'MapTest'} state={this.state} userLat={userLat} userLot={userLot} mapChange={this.mapChange}/> */}
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
              selectNode={this.state.selectNode}/>
          </div>
          <div id="MapSide">
            <MapNavigation
              state={this.state}
              userLat={userLat}
              userLot={userLot}
              nodeChange={this.nodeChange}
              mapChange={this.mapChange}
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


