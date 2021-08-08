'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MapContainer = function (_React$Component) {
  _inherits(MapContainer, _React$Component);

  function MapContainer(props) {
    _classCallCheck(this, MapContainer);

    var _this = _possibleConstructorReturn(this, (MapContainer.__proto__ || Object.getPrototypeOf(MapContainer)).call(this, props));

    _this.state = {
      latitude: null,
      longitude: null
    };
    return _this;
  }

  _createClass(MapContainer, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      console.log('테스트');
      navigator.geolocation.getCurrentPosition(function (position) {
        console.log('테스트');
        var _position$coords = position.coords,
            latitude = _position$coords.latitude,
            longitude = _position$coords.longitude;

        console.log(latitude, longitude);

        _this2.setState({
          latitude: latitude,
          longitude: longitude
        });
        // Show a map centered at latitude / longitude.
      });
      console.log(this.state.atitude, this.state.longitude);
      return React.createElement(
        'div',
        { id: 'MapContainer' },
        '\uB9F5\uC785\uB2C8\uB2E4.',
        (this.state.atitude, this.state.longitude)
      );
    }
  }]);

  return MapContainer;
}(React.Component);

var domContainer = document.querySelector('#MapContainer');
ReactDOM.render(React.createElement(MapContainer, null), domContainer);