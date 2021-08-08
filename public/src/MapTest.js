
class MapTest extends React.Component {
  constructor(props) {
    super(props);
  
    this.state = { 
      lat : null,
      lot : null,
    };
  }

    nearNode = ()=>{
      let nearlot
      let nearlat
      let min = Infinity
      let num = null
      for (let index = 0; index < node.length; index++) {
        lot = Math.abs(this.props.state.lot - node[index].lot)
        lat = Math.abs(this.props.state.lat - node[index].lat)
        console.log(lot+lat)
        if (min > lot+lat){
          min = lot+lat
          num = index
        }
      }    
      console.log(min,num,'끝')
      return(num)
    }

    render() {
      this.nearNode()
      console.log(node)

      console.log(this.props.state.lot)
      console.log(this.props.state.lat)

      

      return (
      <div id="testPanel" >
        <div id="testOption" >
          배경 : 
          <button onClick={()=>this.props.mapChange('normal')}>
            사진
          </button>
          <button onClick={()=>this.props.mapChange('painting')}>
            그림
          </button>
        </div>

        <div id="testGeolocation">
          <p>
            정확도  :{this.props.state.acc}
          </p>
          <p>
            고도  :{this.props.state.lat}
          </p>
          <p>
            좌표(lot) :{this.props.state.lot}
          </p>
          <p>
            좌표(lat) :{this.props.state.lat}
          </p>
          <p>
            heading :{this.props.state.heading}
          </p>
          <p>
            가장 가까운 노드 :{this.nearNode()}
          </p>
        <p> 
          {this.props.state.lat?
          '위치 Y: '+Math.round(this.props.userLat)+'X : '+Math.round(this.props.userLot)
          :'위치 찾는중'}

        </p>
        </div>
      </div>) 
    }
  }
