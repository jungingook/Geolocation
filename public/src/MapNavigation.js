

class MapNavigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      nav : 'sidebar',
      search : '',
    };
  }
  

  buildingIntro = (value) =>{
    this.props.containerModeChange(value)
  }
  
  
    nav = () =>{
      list = node.filter( node =>(node.type=='Building'));
      if(this.state.search){
        list = list.filter( node =>(node.alias.includes(this.state.search)));
      }
      
      point = list.map(
          (node,index) => (
            <PlaceCard selectNode={this.props.selectNode} key={index} node={node} index={index} nodeChange={this.props.nodeChange} targetNodeChange={this.props.targetNodeChange} buildingIntro={this.buildingIntro} /> 
          ) 
      );    


      switch (this.state.nav) {
        case 'sidebar':
          return(
            <div>
              <div className="search">
                <label for="fname"> 
                <p>검색</p> 
                <input placeholder="장소를 검색하세요" value={this.state.search} onChange={(e)=>this.setState({search : e.target.value})}/>
                </label>
              </div>

              <div id="navScroll">
                <div id="mapPointList">
                  {point}
                </div>
                      
              <div className="mapPoint" onClick={()=>this.setState({nav : 'test'})}>
                <div className="pointInfo">
                  <h3>테스트모드1</h3>
                  <p>테스트 모드로 진입합니다.</p>
                </div>
              </div> 
              

              </div>
            </div>
          )
        case 'test':
          return(
            <div>
            <MapTest key={'MapTest'} state={this.props.state} userLat={this.props.userLat} userLot={this.props.userLot} mapChange={this.props.mapChange}/>
            </div>
          )  
        default:
          break;
      }
    }
  
    render() {
      return <div id="MapNavigation">  
          {this.nav()}
        </div>;
    }
  }




  class PlaceCard extends React.Component {
    constructor(props) {
      super(props);
      this.state = { 
        mode : 'info',
      };
    }

    componentDidUpdate(prevProps, prevState) {
      // console.log('componentDidUpdate');
    }
    

      select = (num) =>{
        if(num==this.props.selectNode){
          this.props.nodeChange()
        }else{
          this.props.nodeChange(num)
        }
      }
      unselect = () =>{
        this.props.nodeChange(null)
        this.setState({
          mode : 'info',
        })
      }
      route = (e) =>{
        this.setState({
          mode : 'route',
        })
        this.props.nodeChange(null)
        e.stopPropagation();
      }
      back = (e) =>{
        this.setState({
          mode : 'info',
        })
        e.stopPropagation();
      }

      more = (e) =>{
        this.props.nodeChange(this.props.node.num)
        this.props.buildingIntro('building')
        e.stopPropagation()
      }

      content = () => {


        switch (this.state.mode) {
          case 'test':
            return(
            <div div className="mapPoint mapTransition" onClick={()=>this.props.nodeChange(this.props.node.num)}>
              <img src={this.props.node.img}/>
              <div className="poinㄴtInfo">
                <div className="pointheader">
                  <h3>{this.props.node.alias}</h3>
                  <span>
                    <button onClick={()=>this.setState({mode:'nav'})}>길찾기</button>
                    <button onClick={()=>this.setState({mode:'more'})}>더보기</button>
                  </span>
                </div>
                <p>{this.props.node.summary}</p>
            </div>
            </div>
            )
          case 'info':
            return(
     
            <div div className="PlaceCard" onClick={()=>this.select(this.props.node.num)}>
              <img className="PlaceImg" src={this.props.node.img}/>
              <div className="Placeinfo">
                <div className="PlaceHeaher">
                  <h3 className="PlaceTitle">{this.props.node.alias}</h3>
                </div>
                {/* <p className="PlaceSummary"> {this.props.node.summary}</p> */}
              </div>
              <div className="PlaceButton">
                {/* <button className="router" onClick={()=>this.setState({mode:'more'})}><p>건물안내</p></button> */}
                <button className="router" onClick={(e)=>this.more(e)}><p>건물안내</p></button>
                <button className="more" onClick={(e)=>this.route(e)}><p>길찾기</p></button>
          
              </div>
            </div>
            )
          case 'route':
            return(
            <div div className="RouteCard" >
              <img className="PlaceImg" src={this.props.node.img}/>
              <div className="Placeinfo">
                <div className="PlaceHeaher">
                  <h3 className="PlaceTitle">{this.props.node.alias}</h3>
                </div>
                  <h3 className="routerNoti"> 출발지점을 선택하세요 </h3>
                  <ul className="routerlist">
                    <li className="routerButton" onClick={()=>{this.props.targetNodeChange(this.props.node.num,'myLocation')}}>
                      <img className="routerImgMe"/>
                      <p>내위치</p>
                    </li>
                    <li className="routerButton" onClick={()=>{this.props.targetNodeChange(this.props.node.num,'front')}}>
                      <img className="routerImgFront"/>
                      <p>정문</p>
                    </li>
                    <li className="routerButton" onClick={()=>{this.props.targetNodeChange(this.props.node.num,'back')}}>
                      <img className="routerImgBack"/>
                      <p>후문</p>
                    </li>
                    <li className="routerButton" onClick={()=>{this.props.targetNodeChange(this.props.node.num,'station')}}>
                      <img className="routerImgSubway"/>
                      <p>불광역</p>
                    </li>
                  </ul>
            
              </div>
              <div className="PlaceButton">
                {/* <button className="router" onClick={()=>this.setState({mode:'more'})}><p>건물안내</p></button> */}
                <button className="router" onClick={(e)=>this.more(e)}><p>건물안내</p></button>
              <button className="more" onClick={(e)=>this.back(e)}><p>뒤로</p></button>
                {/* <button className="router" onClick={()=>this.setState({mode:'more'})}><p>더보기</p></button> */}
              </div>
            </div>
            )
            case 'more':
            return(
            <div div className="MoreCard" onClick={()=>this.unselect()}>
              <img className="PlaceImg" src={this.props.node.img}/>
              <div className="Placeinfo">
                <div className="PlaceHeaher">
                  <h3 className="PlaceTitle">{this.props.node.alias}</h3>
                </div>
                <p className="PlaceSummary"> {this.props.node.summary}</p>
                <div className="MoreCardButton">
                  <button onClick={(e)=>this.more(e)}>
                    더보기
                  </button>
                  <button onClick={(e)=>this.more(e)}>
                    입주단체 소개
                  </button>
                </div>
              </div>
              <div className="PlaceButton">
              <button className="more" onClick={(e)=>this.back(e)}><p>뒤로</p></button>
              <button className="more" onClick={(e)=>this.route(e)}><p>길찾기</p></button>
                {/* <button className="router" onClick={()=>this.setState({mode:'test'})}><p>뒤로</p></button> */}
              </div>
            </div>
            )
        }
      }

      render() {      
        return (
          this.content()
            )
      }
    }
