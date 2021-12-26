


class MapObjcet extends React.Component {

  constructor(props) {
    super(props);
    this.container = React.createRef();
    this.preventDefault = (e) => {e.preventDefault()}
    this.state = { 
      // inPark : false,
      start : 1,
      end : 1,
      route : [],
      polling : 0,
      pollingInterval : null
    };
  }

  dijkstra = (start,end)=>{

    nextNode = (startNode,targetNode) =>{
      // console.log('경로 : ',node[startNode].alias,'-->',node[targetNode.vertex].alias,'갱신여부 : ',distance[targetNode.vertex]>targetNode.dist+distance[startNode])
      if(distance[targetNode.vertex]>targetNode.dist+distance[startNode]){
        distance[targetNode.vertex]=targetNode.dist+distance[startNode]
        prev[targetNode.vertex]=startNode
        Queue.enQueue(targetNode)
      }
    }
    
    findRoute = (targetNode) =>{
      if (prev[targetNode]){
        route.push(prev[targetNode])
        findRoute(prev[targetNode])
      }
    }

    let Queue = new PriorityQueue
    let route =[]
    let prev = Array.from({length: node.length}, () => null);
    let target = start
    let findNode = []
    let num =node[target].num
    // 모든 경로를 무한으로 초기화 (Number.MAX_SAFE_INTEGER 변경예정)
    let distance = Array.from({length: node.length}, () => Number.MAX_SAFE_INTEGER);
    // 나의 위치를 초기화합니다.
    distance[node[target].num]= 0
    prev[node[target].num]= 0

    node[target].link.map((node)=>(nextNode(num,node)))
    while(Queue.len()!=0){
   
      let targetNode = Queue.deQueue() 
      target = targetNode.vertex
      num =node[target].num
      node[target].link.map((node)=>(nextNode(num,node)))
    }

    // 경로찾기
    route.push(end)
    findRoute(end)
    this.setState({
      route,start,end
    })
    return(route) 
  }


  inPark = () =>{
    let inPark = false
    if(this.props.userLot>0&&this.props.userLot<100&&this.props.userLat>0&&this.props.userLat<100){
      inPark =true
    }
    return inPark
  }

  mapObjs = (inpark) =>{
    let objs =[<MapBackground style={this.props.mapStyle} mapZoom={this.props.mapZoom}/>]
    objs.push(<MapNode lot={this.props.userLot} lat={this.props.userLat} MapContainer={this.props.MapContainer} nodeChange={this.props.nodeChange} route={this.state.route} navigationMode={this.props.navigationMode} mapZoom={this.props.mapZoom}/>)
    objs.push(<MapBuildingObject style={this.props.mapStyle} mapZoom={this.props.mapZoom} nodeChange={this.props.nodeChange} selectNode={this.props.selectNode}/>)
    if(this.props.selectNode!=null){
      // objs.push(<PlaceNoti navigationStart={this.navigationStart} navigationEnd={this.navigationEnd} node={this.props.selectNode} lot={this.props.userLot} lat={this.props.userLat} MapContainer={this.props.MapContainer} mapZoom={this.props.mapZoom}/>)
    }
    if(inpark){
      objs.push(<MyPosition lot={this.props.userLot} lat={this.props.userLat} mapZoom={this.props.mapZoom}/>)
    }
    return objs
  }
  
  navigationStart = (start) =>{
    this.dijkstra(start,this.state.end)
  }
  navigationEnd = (end) =>{
    this.dijkstra(this.state.start,end)
  }
  navigationRoute = () =>{
    switch (this.props.navigationMode) {
      case 'myLocation':
        if(this.props.nearNode){
          this.dijkstra(this.props.nearNode,this.props.targetNode)
        }
        break;
      case 'station':
        this.dijkstra(2,this.props.targetNode)
        break;
      case 'back':
        this.dijkstra(1,this.props.targetNode)
        break;
      case 'front':
        this.dijkstra(6,this.props.targetNode)
        break;   
      default:
        break;
    }

  }
  navigation = (start,end) =>{
    this.dijkstra(start,end)
  }

  componentDidUpdate(prevProps, prevState) {
      if(this.props.navigationMode != prevProps.navigationMode){
        this.navigationRoute()
        if(this.props.navigationMode == 'myLocation' ){
          let polling = setInterval(this.polling, 2000)
          this.setState({
              pollingInterval : polling,
          },)
        }
      }
      if(this.props.navigationMode != 'myLocation' ){
        clearInterval(this.state.pollingInterval);
      }
  }

  componentDidMount() {
    // console.log(this.container.current)
    // console.log('componentDidMount')
    this.container.current.addEventListener('touchstart', this.preventDefault)
    if(this.props.parents != 'view'){
    // AJAX 통신 마운트
    // 내부 카운터 마운트

    }
  }

  componentWillUnmount() {
    this.container.current.removeEventListener('touchstart', this.preventDefault)
    // clearInterval(this.state.pollingInterval);
      if(this.props.parents != 'view'){
          // 내부 카운터 언마운트
          clearInterval(this.state.pollingInterval);
      }
  }

    // 최적화 필요!!! 
    // # 1 마이 로케이션 사용 안하면 GPS 요구 하지 않도록 변경 
    // # 2 내 위치가 파크 주변이 아닌경우 폴링 취소, 파크인경우에만 허용
  polling = () =>{
    if(this.props.navigationMode == "myLocation"){
      this.navigationRoute()
    }
  }


  render() {

    if(this.props.navigationMode == "myLocation"){
      this.props.useGps()
    }
    let inpark = this.inPark()
    return (
    <div id="MapObjcet" style={{'top':this.props.top,'left':this.props.left}}  ref={this.container} onClick={()=>this.props.nodeChange(null)}>
      {this.mapObjs(inpark)}
    </div>
    )
  }
}

