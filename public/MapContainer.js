'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MapContainer = function (_React$Component) {
  _inherits(MapContainer, _React$Component);

  function MapContainer(props) {
    _classCallCheck(this, MapContainer);

    var _this = _possibleConstructorReturn(this, (MapContainer.__proto__ || Object.getPrototypeOf(MapContainer)).call(this, props));

    _this.mapChange = function (value) {
      _this.setState({
        mapStyle: value
      });
    };

    _this.dragimg = function (e) {
      var img = document.createElement("img");
      img.src = 'data:image/gif;base64,R0lGODlhAQABAIAAAAUEBAAAACwAAAAAAQABAAACAkQBADs=';
      e.dataTransfer.setDragImage(img, 0, 0);
    };

    _this.nodeChange = function () {
      var num = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

      _this.setState({
        selectNode: num
      });
    };

    _this.mapDrag = function (e) {
      try {
        if (e.pageX != 0 && e.pageY != 0) {
          var moveX = e.clientX - _this.state.mapDragStart.clientX;
          var moveY = e.clientY - _this.state.mapDragStart.clientY;
          console.log('move', moveX, moveY);
          _this.setState({
            tempPositionX: moveX,
            tempPositionY: moveY
          });
        }
      } catch (error) {}
    };

    _this.mapDragStart = function (e) {
      var img = document.createElement("img");
      img.src = 'data:image/gif;base64,R0lGODlhAQABAIAAAAUEBAAAACwAAAAAAQABAAACAkQBADs=';
      e.dataTransfer.setDragImage(img, 0, 0);
      _this.setState({
        mapDragStart: e
      });
    };

    _this.mapDragEnd = function (e) {
      try {
        var moveX = e.clientX - _this.state.mapDragStart.clientX;
        var moveY = e.clientY - _this.state.mapDragStart.clientY;
        _this.setState({
          tempPositionY: 0,
          tempPositionX: 0,
          mapPositionX: _this.state.mapPositionX + moveX,
          mapPositionY: _this.state.mapPositionY + moveY

        });
      } catch (error) {}
    };

    _this.container = React.createRef();
    _this.state = {
      lat: null,
      lot: null,
      mapDragStart: null,
      mapPositionX: 0,
      mapPositionY: 0,
      tempPositionX: 0,
      tempPositionY: 0,
      mapStyle: 'normal',
      selectNode: null
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
        // console.log(position)
        var _position$coords = position.coords,
            accuracy = _position$coords.accuracy,
            latitude = _position$coords.latitude,
            longitude = _position$coords.longitude,
            altitude = _position$coords.altitude,
            altitudeAccuracy = _position$coords.altitudeAccuracy,
            heading = _position$coords.heading;


        _this2.setState(_defineProperty({
          lat: latitude,
          lot: longitude,
          acc: accuracy,
          heading: heading,
          alt: altitude,
          altAcc: altitudeAccuracy
        }, 'lot', longitude));
        // Show a map centered at latitude / longitude.
      }, function (error) {}, { enableHighAccuracy: true });

      var userLat = (this.state.lat - this.props.MapContainer.start.lat) / this.props.MapContainer.map.lat * -1;
      var userLot = (this.state.lot - this.props.MapContainer.start.lot) / this.props.MapContainer.map.lot * -1;
      console.log(this.state.mapPositionY + this.state.tempPositionY, '값');
      return React.createElement(
        'div',
        { id: 'MapContainer' },
        React.createElement(
          'div',
          { id: 'MapMain',
            tabIndex: 0, draggable: 'true',
            ref: this.container,
            onClick: function onClick(e) {
              return console.log(_this2.nodeChange(null));
            },
            onDrag: function onDrag(e) {
              return _this2.mapDrag(e);
            },
            onDragStart: function onDragStart(e) {
              return _this2.mapDragStart(e);
            },
            onDragEnd: function onDragEnd(e) {
              return _this2.mapDragEnd(e);
            }
          },
          React.createElement(MapObjcet, {
            key: 'MapObjcet',
            MapContainer: this.props.MapContainer,
            top: this.state.mapPositionY + this.state.tempPositionY,
            left: this.state.mapPositionX + this.state.tempPositionX,
            userLat: userLat,
            userLot: userLot,
            container: this.container.current,
            mapStyle: this.state.mapStyle,
            nodeChange: this.nodeChange,
            selectNode: this.state.selectNode })
        ),
        React.createElement(
          'div',
          { id: 'MapSide' },
          React.createElement(MapNavigation, {
            state: this.state,
            userLat: userLat,
            userLot: userLot,
            nodeChange: this.nodeChange,
            mapChange: this.mapChange
          })
        )
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

var domContainer = document.querySelector('#MapFrame');
ReactDOM.render(React.createElement(MapContainer, null), domContainer);