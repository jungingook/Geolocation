//////////////////////////////////////////
// class Organization
// 맵의 상세 화면 입니다.
//////////////////////////////////////////

class Organization extends React.Component {

    constructor(props) {
        super(props);
        this.state = { 
            card : 'Front',
        };
      }

    roomNumber = () =>{
        let roomText = ''
        if(typeof(this.props.organization.roomNumber)=='object'){
            roomlist = this.props.organization.roomNumber.map((number)=>(' '+number))
            if (this.props.organization.roomNumber.length==2){
                return(<p className="roomNumberDual"> {roomlist+'호'} </p>)
            }
            if (this.props.organization.roomNumber.length==3){
                return(<p className="roomNumberTriple"> {roomlist+'호'} </p>)
            }
            if (this.props.organization.roomNumber.length>4){
                return(<p className="roomNumberMulti"> {roomlist[0]+'~'+roomlist[roomlist.length-1]+'호'} </p>)
            }
        } else {
            roomText = this.props.organization.roomNumber
            return(<p className="roomNumberSingle"> {roomText+'호'} </p>)
        }
    }


    render() {

        return (
            <div className="organizationCard">

                <div className="organizationCardFront" onClick={()=>{this.setState({ card : 'Back'})}}>
                    {/* 메인 이미지 부분  */}
                        {(this.props.organization.mainIMG?
                        <img src={this.props.organization.mainIMG}
                        onError="https://www.innovationpark.kr/wp-content/uploads/2018/08/logo.png"
                        onLoad="https://www.innovationpark.kr/wp-content/uploads/2018/08/logo.png"
                        />
                        :
                        <img src="https://www.innovationpark.kr/wp-content/uploads/2018/08/logo.png"/>
                        )}
                    {/* 단쳬명 */}
                    <div className="organizationName">
                        <h3>
                        {this.props.organization.name}
                        </h3>
                    </div>
                    
                    
                </div>

                {(this.state.card=='Back' ?
                <div className="organizationCardBack" onClick={()=>{this.setState({ card : 'Front'})}}>
                    <div className="organizationHeader">
                        <h3>
                            {this.props.organization.name}
                        </h3>
                        <div className="organizationBnt">
                            {(this.props.organization.phone? 
                            <span className="organizationPhone">
                                <img/>
                                <a href={'tel:'+this.props.organization.phone}>{this.props.organization.phone}</a>
                            </span>
                            : '')}
                            <span className="organizationSite" >
                                {(this.props.organization.website? 
                                <a href={this.props.organization.website} target='_blank'>
                                    사이트방문
                                </a>
                                : '')}
                                {(this.props.organization.email? 
                                <a className="mail" href={'mailto:'+this.props.organization.email} >
             
                                </a>
                                : '')}
                            </span>
                        </div>    
                    </div>
                    <div className="organizationIntro">
                        <p>{this.props.organization.intro}</p>
                    </div>
                </div>
                :'')}
                {(this.props.organization.roomNumber?
                <div className="organizationCardNum">
                    {this.roomNumber()}
                </div>
                :'')}
            </div>                
        )
      }
    }
  
  

