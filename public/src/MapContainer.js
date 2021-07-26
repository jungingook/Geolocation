'use strict';

// import MapObjcet from './map/MapObjcet';
var MapObjcet = require('./map/MapObjcet')

// class Car extends React.Component {
//   render() {
//     return <h2>I am a Car!</h2>;
//   }
// }


class MapContainer extends React.Component {
  
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
    navigator.geolocation.getCurrentPosition(position => {

      const { latitude, longitude } = position.coords;

  
      this.setState({
        lat : latitude,
        lot : longitude,
      })
      // Show a map centered at latitude / longitude.
    });

    
    
    console.log('lat',this.props.MapContainer.map.lat)

    console.log('lot',this.props.MapContainer.map.lot)

    return (
      <div id="MapContainer">
        맵입니다.
        <p> 
        my latitude : {(this.state.lat-this.props.MapContainer.start.lat)/this.props.MapContainer.map.lat}
        </p>
        <p> 
        my longitude : {(this.state.lot-this.props.MapContainer.start.lot)/this.props.MapContainer.map.lot}
        </p>
        <p> 
        map latitude : {this.props.MapContainer.map.lat}
        </p>
        <p> 
        map longitude : {this.props.MapContainer.map.lot}
        </p>
      <MapObjcet/>
      </div>
    );
  }
}

const start = {lat : 37.60965984432401,lot :126.93169409413956}
const end = {lat : 37.60698981976014,lot :126.9356589874949} 

MapContainer.defaultProps = {
  MapContainer: {
    start :start,
    end :end,
    map : {
      lat : start.lat- end.lat,
      lot : start.lot- end.lot
    }
  }
};



let domContainer = document.querySelector('#MapContainer');
ReactDOM.render(<MapContainer/>, domContainer);