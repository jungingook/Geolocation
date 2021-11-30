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

    render() {

        return (
            <div className="organizationCard">

                <div className="organizationCardFront" onClick={()=>{this.setState({ card : 'Back'})}}>
                    <img src="https://www.innovationpark.kr/wp-content/uploads/2018/08/logo.png"/>
                    <h3>
                        서울혁신파크
                    </h3>
                </div>

                {(this.state.card=='Back' ?
                <div className="organizationCardBack" onClick={()=>{this.setState({ card : 'Front'})}}>
                    <div className="organizationHeader">
                        <h3>
                            서울혁신파크
                        </h3>
                        <div className="organizationBnt">
                            <span>
                                <img/>
                                <p>010-0000-000</p>
                            </span>
                            <span>
                                <img/>
                                <p>사이트로 이동</p>
                            </span>
                        </div>    
                    </div>
                    <div className="organizationIntro">
                        <p>가치를 몸이 어디 가는 이 불어 길지 일월과 아니다. 그들은 커다란 더운지라 불러 것이다. 그러므로 아니더면, 쓸쓸한 청춘이 얼마나 생의 그들은 영락과 커다란 철환하였는가? 방황하였으며, </p>
                    </div>
                </div>
                :'')}
            </div>                
        )
      }
    }
  
  

