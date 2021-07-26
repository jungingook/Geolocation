'use strict';

// import MapObjcet from './map/MapObjcet';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MapObjcet = require('./map/MapObjcet');

// class Car extends React.Component {
//   render() {
//     return <h2>I am a Car!</h2>;
//   }
// }


var MapContainer = function (_React$Component) {
  _inherits(MapContainer, _React$Component);

  function MapContainer(props) {
    _classCallCheck(this, MapContainer);

    var _this = _possibleConstructorReturn(this, (MapContainer.__proto__ || Object.getPrototypeOf(MapContainer)).call(this, props));

    _this.state = {
      lat: null,
      lot: null
    };
    return _this;
  }

  _createClass(MapContainer, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      console.log('componentDidMount');
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      navigator.geolocation.getCurrentPosition(function (position) {
        var _position$coords = position.coords,
            latitude = _position$coords.latitude,
            longitude = _position$coords.longitude;


        _this2.setState({
          lat: latitude,
          lot: longitude
        });
        // Show a map centered at latitude / longitude.
      });

      console.log('lat', this.props.MapContainer.map.lat);

      console.log('lot', this.props.MapContainer.map.lot);

      return React.createElement(
        'div',
        { id: 'MapContainer' },
        '\uB9F5\uC785\uB2C8\uB2E4.',
        React.createElement(
          'p',
          null,
          'my latitude : ',
          (this.state.lat - this.props.MapContainer.start.lat) / this.props.MapContainer.map.lat
        ),
        React.createElement(
          'p',
          null,
          'my longitude : ',
          (this.state.lot - this.props.MapContainer.start.lot) / this.props.MapContainer.map.lot
        ),
        React.createElement(
          'p',
          null,
          'map latitude : ',
          this.props.MapContainer.map.lat
        ),
        React.createElement(
          'p',
          null,
          'map longitude : ',
          this.props.MapContainer.map.lot
        ),
        React.createElement(MapObjcet, null)
      );
    }
  }]);

  return MapContainer;
}(React.Component);

var start = { lat: 37.60965984432401, lot: 126.93169409413956 };
var end = { lat: 37.60698981976014, lot: 126.9356589874949 };

MapContainer.defaultProps = {
  MapContainer: {
    start: start,
    end: end,
    map: {
      lat: start.lat - end.lat,
      lot: start.lot - end.lot
    }
  }
};

var domContainer = document.querySelector('#MapContainer');
ReactDOM.render(React.createElement(MapContainer, null), domContainer);