
class MapNode extends React.Component {
    constructor(props) {
      super(props);
      thlatstate = { 
        lot : null,
        lot : null,
      };
    }

    nodeType = (value) =>{
        switch (value) {
            case 'Entrance':
                return 'green'
            case 'Building':
                return 'red'  
            case 'Node':
                return 'blue'
            default:
                break;
        }
    }

    guideLine = ( ) =>{
        let points = this.props.route.map((num)=>{return(Math.floor(((node[num].lot-this.props.MapContainer.start.lot)/this.props.MapContainer.map.lot*-1)*1000)+","+Math.floor(((node[num].lat-this.props.MapContainer.start.lat)/this.props.MapContainer.map.lat*-1)*1000)+" ")})
        if(this.props.navigationMode=='myLocation'){
            points.push(Math.floor(this.props.lot*1000)+","+Math.floor(this.props.lat*1000)+" ")
        }
        return(  <polyline id="GuideLine"
        points={points} 
        fill="none" stroke="blue" stroke-width="6" />)
    }
    noti = (e,num) =>{
        this.props.nodeChange(num)
        e.stopPropagation()
    }
    
    render() {
        list = node.filter( node =>(node.lat&&node.lot));
        list = list.filter( node =>(node.type=="Building"));
        mapNode = list.map(
            (node,index) => (
                <g>
                <circle className={"nodetest "+node.alias+" "+index}
                onClick={(e)=>this.noti(e,node.num)}
                cy={((node.lat-this.props.MapContainer.start.lat)/this.props.MapContainer.map.lat*-1)*100+"%"} 
                cx={((node.lot-this.props.MapContainer.start.lot)/this.props.MapContainer.map.lot*-1)*100+"%"} 
                r="15" 
                fill="#00000010"/> 
                <circle className={"nodetest "+node.alias+" "+index}
                onClick={(e)=>this.noti(e,node.num)}
                cy={((node.lat-this.props.MapContainer.start.lat)/this.props.MapContainer.map.lat*-1)*100+"%"} 
                cx={((node.lot-this.props.MapContainer.start.lot)/this.props.MapContainer.map.lot*-1)*100+"%"} 
                r="5" 
                fill={this.nodeType(node.type)}/>
                </g>

            ) 
        );    

        mapLink = node.map(
            (node,index) => (
                <circle className={"nodetest "+node.alias}
                cy={((node.lat-this.props.MapContainer.start.lat)/this.props.MapContainer.map.lat*-1)*100+"%"} 
                cx={((node.lot-this.props.MapContainer.start.lot)/this.props.MapContainer.map.lot*-1)*100+"%"} 
                r="5" 
                fill={this.nodeType(node.type)}/>
            ) 
        );    
        
        return (
            <svg id="MapNode" viewBox="0 0 1000 1000" style={{'transform': 'scale('+this.props.mapZoom+')'}}>
                {this.guideLine()}
                {mapNode}
         
                {/* <line x1="10%" y1="10%" x2="80%" y2="80%" style="stroke:rgb(255,0,0);stroke-width:2" /> */}
            </svg>
            )
      }
    }

  



    class PlaceNoti extends React.Component {
        constructor(props) {
          super(props);
          thlatstate = { 
            lot : null,
            lot : null,
          };
        }
        
          render() {
            let linkNode =node[this.props.node].link.map((link)=>{return(node[link.vertex].alias+'('+link.vertex+'), ')})
            let top = ((node[this.props.node].lat-this.props.MapContainer.start.lat)/this.props.MapContainer.map.lat*-1)*100
            let left = ((node[this.props.node].lot-this.props.MapContainer.start.lot)/this.props.MapContainer.map.lot*-1)*100
            return (
                <div id="PlaceNoti" style={{top:top+'%',left:left+'%'}}>
                    <img src={node[this.props.node].img}/>
                    <div id="PlaceNotiInfo" >
                        <h3> 
                            <span>
                            {node[this.props.node].alias}
                            {/* ({node[this.props.node].num}) */}
                            </span>
                            {/* <button onClick={()=>this.props.navigationStart(node[this.props.node].num)}>
                                출발
                            </button>
                            <button onClick={()=>this.props.navigationEnd(node[this.props.node].num)}>
                                도착
                            </button> */}
                        </h3>
                        {/* <p>
                            {node[this.props.node].summary}
               
                        </p> */}
                        <p>
                            {linkNode}
                        </p>
                    </div>
                </div>
                )
          }
        }
    