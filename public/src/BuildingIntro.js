
//////////////////////////////////////////
// class BuildingIntro
// 맵의 상세 화면 입니다.
//////////////////////////////////////////


class BuildingIntro extends React.Component {

    constructor(props) {
        super(props);
        this.introBody = React.createRef();
        this.state = { 
            wheel : false,
            floor : null,
        };
      }

    componentDidUpdate(prevProps, prevState) {
        if(prevProps.selectNode!=this.props.selectNode){
            this.introBody.current.scrollTo({top:0}) 
            this.setState({
                floor : null,
            })
        }

    }

    wheelControl = () => {
        // console.log(this.introBody.current.scrollTop,'체크 테스트')
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

    floorChange = (floor) =>{
        this.setState({
            floor,
        })
    }

    BuildingFloor = () =>{
        
        const BuildingOrganization = OrganizationData.filter(organization => organization.building == node[this.props.selectNode].alias)
        let floor = new Set();
        BuildingOrganization.map((organization) => (floor.add(organization.floor)))
        const Floor = Array.from(floor);
        return(Floor.map((f)=>(<button className={(f==this.state.floor?'select':'unSelect')} onClick={()=>this.floorChange(f)}> {f}층 </button>)))
    }

    OrganizationList = () =>{
        // 건물필터
        let BuildingOrganization = OrganizationData.filter(organization => organization.building == node[this.props.selectNode].alias)
        // 층별 필터
        console.log(this.state.floor,'층별 ')
        if(this.state.floor){
            BuildingOrganization = BuildingOrganization.filter(organization => organization.floor == this.state.floor)
        }
        return(BuildingOrganization.map((organization) => (<Organization organization ={organization} />)))
        
    }


    render() {
        const BuildingFloor =  this.BuildingFloor()
        const OrganizationList =  this.OrganizationList()

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
                                    <svg 
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="current"
                                        height="current"
                                        viewBox="0 0 595 419" 
                                    >
                                    <g>
                                        <g>
                                            <path class="st0" d="M400.25,330.79c-4.61,0-9.21-1.76-12.73-5.27L182.75,120.75c-7.03-7.03-7.03-18.43,0-25.46
                                                c7.03-7.03,18.43-7.03,25.46,0l204.77,204.77c7.03,7.03,7.03,18.43,0,25.46C409.46,329.03,404.85,330.79,400.25,330.79z"/>
                                        </g>
                                        <g>
                                            <path class="st0" d="M195.48,330.79c-4.61,0-9.21-1.76-12.73-5.27c-7.03-7.03-7.03-18.43,0-25.46L387.52,95.29
                                                c7.03-7.03,18.43-7.03,25.46,0c7.03,7.03,7.03,18.43,0,25.46L208.2,325.52C204.69,329.03,200.08,330.79,195.48,330.79z"/>
                                        </g>
                                    </g>
                                    </svg>
                            </div>
                        
                        </div>
                    </div>

                </div>
                <div id="IntroBody" ref={this.introBody} onTouchStart={(e)=>this.wheelControl(e)}  onTouchEnd ={(e)=>this.wheelControl(e)} onWheel={(e)=>this.wheelControl(e)}>
                
                    <div id="MoreInfo">
                        {(node[this.props.selectNode].infoHTML?node[this.props.selectNode].infoHTML:'')}
                    </div>
                    {OrganizationList.length!=0?
                    <div id="OrganizationInfo">
                        <div id="OrganizationInfoHeader">
                            <h3 className="minititle"> <span className="titleHeader"/>입주단체 안내</h3>
                            <div id="BuildingFloor">
                                <button className={(null==this.state.floor?'select':'unSelect')} onClick={()=>this.floorChange(null)}> 모두 </button>
                                {BuildingFloor}
                            </div>
                        </div>
                        
                        <div id="OrganizationList">
                            {OrganizationList}
                        </div>
                    </div>
                    : ''}
                </div>
            </div>
            )
      }
    }
  
  

