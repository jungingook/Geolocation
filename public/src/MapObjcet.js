


class MapObjcet extends React.Component {

  constructor(props) {
    super(props);
    this.state = { 
      // inPark : false,
      start : 1,
      end : 0,
      route : [],
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
    let distance = Array.from({length: node.length}, () => Infinity);
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

    // for (let index = 0; index < prev.length; index++) {
    //   console.log(index,'번 노드',distance[index],prev[index])
      
    // }

    // 경로찾기
    route.push(end)
    console.log(route)
    findRoute(end)

    console.log(route)
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
    let objs =[<MapBackground style={this.props.mapStyle}/>]
    objs.push(<MapNode lot={this.props.userLot} lat={this.props.userLat} MapContainer={this.props.MapContainer} nodeChange={this.props.nodeChange} route={this.state.route}/>)
    if(this.props.selectNode!=null){
      objs.push(<PlaceNoti navigationStart={this.navigationStart} navigationEnd={this.navigationEnd} node={this.props.selectNode} lot={this.props.userLot} lat={this.props.userLat} MapContainer={this.props.MapContainer}/>)
    }
    if(inpark){
      objs.push(<MyPosition lot={this.props.userLot} lat={this.props.userLat}/>)
    }
    return objs
  }
  
  navigationStart = (start) =>{
    this.dijkstra(start,this.state.end)
  }
  navigationEnd = (end) =>{
    this.dijkstra(this.state.start,end)
  }

  componentDidMount() {
    // this.dijkstra(33,45)
  }


  render() {
    let inpark = this.inPark()
    return (
    <div id="MapObjcet" style={{'top':this.props.top,'left':this.props.left}}>
      {this.mapObjs(inpark)}
    </div>
    )
  }
}