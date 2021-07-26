class MapObjcet extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = { 
      lat : null,
      lot : null,
    };
  }


  componentDidMount() {
    console.log('componentDidMount');
  }

  


  render() {
  
    return (
      <div id="MapContainer">
        맵입니다.

      </div>
    );
  }
}