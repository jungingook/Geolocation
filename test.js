////////////////////////////////////////////////////////
// import 부분
////////////////////////////////////////////////////////
// 모듈 연결
import React, { Component , Fragment } from 'react';
import { connect } from "react-redux"; // 리덕스 연결
// // [리덕스]스토어 연결
// import store from "../../../store";

// // SASS&CSS 연결
// import "../../../sass/widgetEdit.scss"


// 컴포넌트 연결
// import Show from '../show/Show'; // 메뉴 헤더

// 서비스 연결

////////////////////////////////////////////////////////
// component 부분
////////////////////////////////////////////////////////
class test extends Component {

    render() { 
        this.force(this.props.templateCilck)
        return (
            <div>
                테스트
            </div>
        );
    }
}

////////////////////////////////////////////////////////
// static 변수, 함수 정의부
////////////////////////////////////////////////////////


////////////////////////////////////////////////////////
// redux 부분
////////////////////////////////////////////////////////
const mapStateToProps = (state) => ({
    templateCilck : state.templateCilck,
})

function mapDispatchToProps(dispatch){
    return {
        templateUnClick : () => dispatch({type:'templateClick',click : false}),
    //   exempleDispatch : (exemple) => dispatch({type:'exempleName',exempleProps : exemple}),
    }
}

  // export default Login;
  export default connect(mapStateToProps,mapDispatchToProps)(TextModule);
  