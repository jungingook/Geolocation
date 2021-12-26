'use strict';

class MapContainer extends React.Component {
  
  constructor(props) {
    super(props);
    this.container = React.createRef();
    this.preventDefault = (e) => {e.preventDefault()}
    this.state = { 
      lat : null,
      lot : null,
      mapDragStart : null,
      mapTouchStart : null,
      mapPositionX : 54,
      mapPositionY : -33,
      touchMode : null,
      ZoomStart : [0,0],
      tempPositionX : 0,
      tempPositionY : 0,
      mapStyle : 'normal',
      selectNode : null,
      nearNode : null,
      targetNode : null,
      navigationMode : null,
      useGps : '',
      mapZoom : 2,
      tempZoom : 1,
      containerMode :'map', 
      testText : '테스트3',
    };
  }

  useGps = () => {

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
      
    },{enableHighAccuracy:false});

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
    //console.log(nodeList,'테스트중')
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
    console.log(num)
    if(num){
      console.log(num)
      this.setState({
        selectNode : num,
      })
    }else{
      this.setState({
        selectNode : null,
        containerMode :'map',
      })
    }

  }

  targetNodeChange = (num=null,mode=null) =>{
    this.setState({
      targetNode : num,
      navigationMode : mode,
    })
  }

  onTouchStart = (e) => {
    // 터치 드레그
    if(e.touches.length==1){
      this.setState({
        mapTouchStart : e.touches[0],
        touchMode : 'TouchDrag',
      })
    }
    else if(e.touches.length<=2){
      this.setState({
        ZoomStart : [e.touches[0],e.touches[1]],
        touchMode : 'Pinches',
      })
    }
  }

  onTouch = (e) => {
    // console.log(e.touches,'onTouch2',this.state.touchMode)
    // 터치 드레그

    if(e.touches.length==1){
      try {
        if(e.pageX!=0 && e.pageY!=0&&this.state.touchMode=='TouchDrag'){
          let moveX = e.touches[0].pageX - this.state.mapTouchStart.pageX 
          let moveY = e.touches[0].pageY - this.state.mapTouchStart.pageY
          if(this.state.tempPositionX!=moveX||this.state.tempPositionY!=moveY){
            this.setState({
              tempPositionX : moveX,
              tempPositionY : moveY,
            })
          }
        }
      } catch (error) {
        
      }
    }
    // 핀치 투 줌
    else if(e.touches.length<=2&&this.state.touchMode=='Pinches'){

      try {

        let startPointX = Math.abs(this.state.ZoomStart[0].pageX - this.state.ZoomStart[1].pageX)
        let startPointY = Math.abs(this.state.ZoomStart[0].pageY - this.state.ZoomStart[1].pageY)

        let nowPointX = Math.abs(e.touches[0].pageX - e.touches[1].pageX)
        let nowPointY = Math.abs(e.touches[0].pageY - e.touches[1].pageY)

        let startSqrt = Math.sqrt(startPointX*startPointX+startPointY*startPointY)

        let notSqrt = Math.sqrt(nowPointX*nowPointX+nowPointY*nowPointY)


        
        this.setState({
          testText : '터치배율'+(notSqrt/startSqrt)+'줌'+this.state.mapZoom,
          tempZoom : notSqrt/startSqrt
        })

      } catch (error) {
        
      }
    }
  }

  onTouchEnd = (e) => {
    // 터치 드레그
    if(this.state.touchMode=='TouchDrag'){
      try {
        this.setState({
          tempPositionY : 0,
          tempPositionX : 0,
          mapPositionX : this.positionControl(this.state.mapPositionX,this.state.tempPositionX),
          mapPositionY : this.positionControl(this.state.mapPositionY,this.state.tempPositionY),
  
        })
  
      } catch (error) {
        
      }
    }
    // 핀치 투 줌
    else if(this.state.touchMode=='Pinches'){
      this.zoomControl(this.state.mapZoom*(this.state.tempZoom))
    }
  }

  mapDrag = (e) =>{
    try {
      if(e.pageX!=0 && e.pageY!=0){
      let moveX = e.pageX - this.state.mapDragStart.pageX 
      let moveY = e.pageY - this.state.mapDragStart.pageY
      if(this.state.tempPositionX!=moveX||this.state.tempPositionY!=moveY){
        this.setState({
          tempPositionX : moveX,
          tempPositionY : moveY,
        })
      }
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
      this.positionControl(this.state.mapPositionX,this.state.tempPositionX)

      this.setState({
        tempPositionY : 0,
        tempPositionX : 0,
        mapPositionX : this.positionControl(this.state.mapPositionX,this.state.tempPositionX),
        mapPositionY : this.positionControl(this.state.mapPositionY,this.state.tempPositionY),
      })
    } catch (error) {
      
    }
  }

  zoomControl = (zoom,option=null) =>{
    if(zoom >= 5){
      zoom = 5
    }else if (zoom <= 1){
      zoom = 1
    }
    if (option == null){
      this.setState({
        mapZoom : zoom,
        tempZoom : 1,
        testText : '줌 : '+zoom,
        
      })
    } else if (option == 'return'){
    
      return zoom
    }

  }

  positionControl = (mapPosition,tempPosition) => {
    let position = mapPosition + tempPosition
    if(position > 300){
      position = 300
    }
    if(position < -300){
      position = -300
    }
      return position
  }

  //////////////////////////////////////////
  // containerMode ('map' or 'building')
  // 맵 컨테이너의 메인부분에 표시할 정보를 선택합니다.
  // map : 지도를 표시합니다, building : 빌딩내 정보를 표현합니다
  //////////////////////////////////////////
  containerMode = (mode) =>{
    let userLat = (this.state.lat-this.props.MapContainer.start.lat)/this.props.MapContainer.map.lat*-1
    let userLot = (this.state.lot-this.props.MapContainer.start.lot)/this.props.MapContainer.map.lot*-1

    switch (mode) {
      // mode == 'map' 라면 지도를 표시합니다.
      case 'map':
        return(
          <div id="MapMain"
          tabIndex={0} draggable="true" 

          // onClick={(e)=>this.state}
          onDragOver={(e)=>this.mapDrag(e)} 
          onDragStart={(e) => this.mapDragStart(e)} 
          onDragEnd={(e) => this.mapDragEnd(e)} 
          onTouchStart={(e)=> this.onTouchStart(e)}
          onTouchMove={(e)=> this.onTouch(e)}
          onTouchEnd={(e)=> this.onTouchEnd(e)}
          >
          <MapObjcet  
            key={'MapObjcet'} 
            MapContainer={this.props.MapContainer} 
            top={this.positionControl(this.state.mapPositionY,this.state.tempPositionY)}  //773
            left={this.positionControl(this.state.mapPositionX,this.state.tempPositionX)}  //773
            mapZoom={this.zoomControl(this.state.mapZoom*this.state.tempZoom,'return')} 
            userLat={userLat} 
            userLot={userLot} 
            container={this.container.current} 
            mapStyle={this.state.mapStyle}
            nodeChange={this.nodeChange}
            nearNode={this.state.nearNode}
            targetNode={this.state.targetNode}
            selectNode={this.state.selectNode}
            introBuilding={this.state.introBuilding}
            introBuildingChange={this.introBuildingChange}
            navigationMode={this.state.navigationMode}
            useGps = {this.useGps}
            />
  
            <MapController
            mapZoom={this.state.mapZoom} 
            zoomControl={this.zoomControl}
            tempMmode={this.containerModeChange}
            testText={this.state.testText}
            />
        </div>
        )
      case 'building':
        return(
          <div id="BuildingMain">
            <BuildingIntro
                 selectNode = {this.state.selectNode}
                 containerModeChange={this.containerModeChange}
           />
          </div>
        )
      // mode == 'map' 라면 지도를 표시합니다.
      default:
        break;
    }
    

  }

  containerModeChange = (mode) => {
    this.setState({
      containerMode : mode 
    })
  }

  introBuildingChange = (node) => {
    this.setState({
      introBuildingChange : node 
    })
  }

  


  render() {

  
    let userLat = (this.state.lat-this.props.MapContainer.start.lat)/this.props.MapContainer.map.lat*-1
    let userLot = (this.state.lot-this.props.MapContainer.start.lot)/this.props.MapContainer.map.lot*-1
    return (
         <div id="MapContainer" >
           {this.containerMode(this.state.containerMode)}
          <div id="MapSide" className={(this.state.containerMode=='building'?'MapNavigationHide':'')}>
            <MapNavigation
              state={this.state}
              userLat={userLat}
              userLot={userLot}
              nodeChange={this.nodeChange}
              targetNodeChange={this.targetNodeChange}
              mapChange={this.mapChange}
              containerModeChange={this.containerModeChange}
              selectNode={this.state.selectNode}
            />
          </div>
        </div>
    );
  }
}

const start = {lat : 37.611650,lot :126.930180}
const end = {lat : 37.605490,lot :126.937830} 
/* 기존 테스트 이미지 기준 
const start = {lat : 37.60965984432401,lot :126.93169409413956}
const end = {lat : 37.60698981976014,lot :126.9356589874949} 
*/
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



//////////////////////////////////////////
// class MapController
// 맵을 컨트롤 하는 버튼등을 그리는 컴포넌트 입니다.
//////////////////////////////////////////

class MapController extends React.Component {
  

    
  constructor(props) {
    super(props);
    this.container = React.createRef();
    this.preventDefault = (e) => {e.preventDefault()}
    this.state = { 

    };
  }


  zoomButton = (option) => {
    let zoom = 1
    switch (option) {
      case 'plus':
          zoom = this.props.mapZoom + 0.25
        break;
      case 'minus':
          zoom = this.props.mapZoom - 0.25
        break;
      default:
        zoom = 1
        break;
    }
    this.props.zoomControl(parseFloat(zoom.toFixed(1)))
  }


  render() {
      return (
          <div id="MapController"  ref={this.container}>
            <div id="ZoomController">
              <button onClick={()=>this.zoomButton('plus')} onTouch={()=>this.zoomButton('plus')}>
                +
              </button>
              <button onClick={()=>this.zoomButton('minus')} onTouch={()=>this.zoomButton('minus')}>
                -
              </button>

{/*       
              <button onClick={()=>this.props.tempMmode('building')}>
                상세맵(새화면)
              </button>
              <button onClick={()=>location.href="info.html"}>
                상세맵(화면변경)
              </button> */}
            </div>
            {/* <p id="TestText" >{this.props.testText}</p> */}
          </div>
          )
    }
  }



let domContainer = document.querySelector('#MapFrame');
ReactDOM.render(<MapContainer/>, domContainer);
