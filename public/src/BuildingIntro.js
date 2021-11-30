
//////////////////////////////////////////
// class BuildingIntro
// 맵의 상세 화면 입니다.
//////////////////////////////////////////


class BuildingIntro extends React.Component {

    constructor(props) {
        super(props);
        this.introBody = React.createRef();
        this.state = { 
            wheel : false
        };
      }


    componentDidMount() {
        this.introBody.current.addEventListener('wheel', this.preventDefault)

    }

    componentWillUnmount() {
        this.introBody.current.removeEventListener('wheel', this.preventDefault)
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevProps.selectNode!=this.props.selectNode){
            this.introBody.current.scrollTo({top:0}) 
        }

    }
    wheelControl = () => {
        if(this.introBody.current.scrollTop==0){
            this.setState({
                wheel : false
            })
        }else{
            this.setState({
                wheel : true
            })
        }
    }

    render() {
        return (
            <div id="BuildingIntro">
                <div id="IntroHeader" className={(this.state.wheel?'IntroHeaderSmall':'IntroHeaderBig')}>
                    <div id="IntroBG">
                        <img src={node[this.props.selectNode].img}/>
                    </div>
        
                    <div id="IntroText">
                        <div>
                            <h2>
                                {node[this.props.selectNode].alias}
                            </h2>
                            <p>
                                {node[this.props.selectNode].intro}
                            </p>
                        </div>
                    </div>

                    <div id="IntroControl">
                        <div id="controlZone">
                            <div id="MoveMap" onClick={()=>this.props.containerModeChange('map')}>
                                <p>뒤로</p>
                            </div>
                        
                        </div>
                    </div>

                </div>
                <div id="IntroBody" ref={this.introBody} onWheel={(e)=>this.wheelControl(e)}>
                
                    <div id="MoreInfo">
                        {(node[this.props.selectNode].infoHTML?node[this.props.selectNode].infoHTML:'')}
                    </div>
                    <div id="OrganizationInfo">
                        <h3 className="minititle"> <span className="titleHeader"/>입주단체 안내</h3>
                        <div id="OrganizationList">
                            <Organization/>
                            <Organization/>
                            <Organization/>
                            
                        </div>
                    </div>
                </div>
            </div>
            )
      }
    }
  
  

