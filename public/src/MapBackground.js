
class MapBackground extends React.Component {

    constructor(props) {
        super(props);
        this.state = { 
          lat : null,
          lot : null,
        };
      }
      
    render() {
        return (
        <div id="MapBackground" >
            <div id="tempBack" style={{'transform': 'scale('+this.props.mapZoom+')'}} className={this.props.style=='painting'?'map2':'map1'}/>
        </div>
        )
    }
  }

class MapBuildingObject extends React.Component {

  constructor(props) {
      super(props);
      this.state = { 
        lat : null,
        lot : null,
      };
    }
  
  objectSelect = (e,num)=>{
    this.props.nodeChange(num)
    e.stopPropagation()
  }
    
	objectMaker = () =>{
    let nodeList = node.filter( node =>(node.type=="Building"));
    console.log(nodeList)
    // nodeList = nodeList.filter( node =>(node.num==10));
    return nodeList.map( (node) => (
    <div id={"Building"+node.num} className={(this.props.selectNode==node.num?"selectNode":"unSelectNode")} onClick={(e)=>this.objectSelect(e,node.num)}>
      <div style={{'transform': 'scale('+1/this.props.mapZoom+')',transition: 'transform 0.3s'}} >
        <div id="PlaceNoti" onClick={(e)=>e.stopPropagation()}>
                <img src={node.img}/>
                <div id="PlaceNotiInfo">
                    <h3> 
                        <span>
                        {node.alias}
                        {/* ({node[this.props.node].num}) */}
                        </span>
                        {/* <button onClick={()=>this.props.navigationStart(node[this.props.node].num)}>
                            건물안내
                        </button>
                        <button onClick={()=>this.props.navigationEnd(node[this.props.node].num)}>
                            길찾기
                        </button> */}
                    </h3>
                    {/* <p>
                        {node[this.props.node].summary}
        
                    </p> */}
                    <p>
                        {/* {linkNode} */}
                    </p>
                </div>
        </div>
      </div>
    </div>
    ) )
	} 

  render() {
      return (
      <div id="MapBuildingObject" style={{'transform': 'scale('+this.props.mapZoom+')'}} >
        {this.objectMaker()}
      </div>
      )
  }
}
