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

    _this.nearNode = function (lat, lot) {
      var min = Infinity;
      var num = null;

      var nodeList = node.filter(function (node) {
        return node.type != "Building";
      });
      // let nodeList =node
      //console.log(nodeList,'테스트중')
      for (var index = 0; index < nodeList.length; index++) {
        lot = Math.abs(_this.state.lot - nodeList[index].lot);
        lat = Math.abs(_this.state.lat - nodeList[index].lat);
        if (min > lot + lat) {
          min = lot + lat;
          num = nodeList[index].num;
        }
      }
      return num;
    };

    _this.dragimg = function (e) {
      var img = document.createElement("img");
      img.src = 'data:image/gif;base64,R0lGODlhAQABAIAAAAUEBAAAACwAAAAAAQABAAACAkQBADs=';
      e.dataTransfer.setDragImage(img, 0, 0);
    };

    _this.nodeChange = function () {
      var num = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;


      if (num) {
        _this.setState({
          selectNode: num
        });
      } else {
        _this.setState({
          selectNode: null,
          containerMode: 'map'
        });
      }
    };

    _this.targetNodeChange = function () {
      var num = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      var mode = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

      _this.setState({
        targetNode: num,
        navigationMode: mode
      });
    };

    _this.onTouchStart = function (e) {

      //console.log('onTouchStart',e.touches[0].pageX,e.touches[0].pageY,this.state.mapPositionX,this.state.mapPositionY)
      if (e.touches.length == 1) {
        _this.setState({
          mapTouchStart: e.touches[0]
        });
        //e.preventDefault()
      }
      // alert('테스트')
    };

    _this.onTouch = function (e) {

      // console.log('onTouch',e.touches[0].pageX - this.state.mapDragStart.pageX,e.touches[0].pageY - this.state.mapDragStart.pageY)
      // console.log('onTouch',e.touches[0].pageX,e.touches[0].pageY)
      if (e.touches.length == 1) {
        try {
          if (e.pageX != 0 && e.pageY != 0) {
            var moveX = e.touches[0].pageX - _this.state.mapTouchStart.pageX;
            var moveY = e.touches[0].pageY - _this.state.mapTouchStart.pageY;
            if (_this.state.tempPositionX != moveX || _this.state.tempPositionY != moveY) {
              _this.setState({
                tempPositionX: moveX,
                tempPositionY: moveY
              });
            }
          }
        } catch (error) {}
      }
    };

    _this.onTouchEnd = function (e) {
      //e.preventDefault()
      //console.log('onTouchEnd',e.touches)
      // console.log(this.state.mapPositionX+this.state.tempPositionX,this.state.mapPositionY+this.state.tempPositionY)
      try {
        _this.setState({
          tempPositionY: 0,
          tempPositionX: 0,
          mapPositionX: _this.positionControl(_this.state.mapPositionX, _this.state.tempPositionX),
          mapPositionY: _this.positionControl(_this.state.mapPositionY, _this.state.tempPositionY)

        });
      } catch (error) {}
    };

    _this.mapDrag = function (e) {
      try {
        if (e.pageX != 0 && e.pageY != 0) {
          var moveX = e.pageX - _this.state.mapDragStart.pageX;
          var moveY = e.pageY - _this.state.mapDragStart.pageY;
          if (_this.state.tempPositionX != moveX || _this.state.tempPositionY != moveY) {
            _this.setState({
              tempPositionX: moveX,
              tempPositionY: moveY
            });
          }
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
        _this.positionControl(_this.state.mapPositionX, _this.state.tempPositionX);

        _this.setState({
          tempPositionY: 0,
          tempPositionX: 0,
          mapPositionX: _this.positionControl(_this.state.mapPositionX, _this.state.tempPositionX),
          mapPositionY: _this.positionControl(_this.state.mapPositionY, _this.state.tempPositionY)
        });
      } catch (error) {}
    };

    _this.zoomControl = function (zoom) {
      var option = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;


      if (zoom >= 3) {
        zoom = 3;
      } else if (zoom <= 1.75) {
        zoom = 1.75;
      }
      _this.setState({
        mapZoom: zoom
      });
    };

    _this.positionControl = function (mapPosition, tempPosition) {
      var position = mapPosition + tempPosition;
      if (position > 300) {
        position = 300;
      }
      if (position < -300) {
        position = -300;
      }
      return position;
    };

    _this.containerMode = function (mode) {
      var userLat = (_this.state.lat - _this.props.MapContainer.start.lat) / _this.props.MapContainer.map.lat * -1;
      var userLot = (_this.state.lot - _this.props.MapContainer.start.lot) / _this.props.MapContainer.map.lot * -1;

      switch (mode) {
        // mode == 'map' 라면 지도를 표시합니다.
        case 'map':
          return React.createElement(
            'div',
            { id: 'MapMain',
              tabIndex: 0, draggable: 'true',
              ref: _this.container,
              onDragOver: function onDragOver(e) {
                return _this.mapDrag(e);
              },
              onDragStart: function onDragStart(e) {
                return _this.mapDragStart(e);
              },
              onDragEnd: function onDragEnd(e) {
                return _this.mapDragEnd(e);
              },
              onTouchStart: function onTouchStart(e) {
                return _this.onTouchStart(e);
              },
              onTouchMove: function onTouchMove(e) {
                return _this.onTouch(e);
              },
              onTouchEnd: function onTouchEnd(e) {
                return _this.onTouchEnd(e);
              }
            },
            React.createElement(MapObjcet, {
              key: 'MapObjcet',
              MapContainer: _this.props.MapContainer,
              top: _this.positionControl(_this.state.mapPositionY, _this.state.tempPositionY) //773
              , left: _this.positionControl(_this.state.mapPositionX, _this.state.tempPositionX) //773
              , mapZoom: _this.state.mapZoom,
              userLat: userLat,
              userLot: userLot,
              container: _this.container.current,
              mapStyle: _this.state.mapStyle,
              nodeChange: _this.nodeChange,
              nearNode: _this.state.nearNode,
              targetNode: _this.state.targetNode,
              selectNode: _this.state.selectNode,
              introBuilding: _this.state.introBuilding,
              introBuildingChange: _this.introBuildingChange,
              navigationMode: _this.state.navigationMode }),
            React.createElement(MapController, {
              mapZoom: _this.state.mapZoom,
              zoomControl: _this.zoomControl,
              tempMmode: _this.containerModeChange
            })
          );
        case 'building':
          return React.createElement(
            'div',
            { id: 'BuildingMain' },
            React.createElement(BuildingIntro, {
              selectNode: _this.state.selectNode,
              containerModeChange: _this.containerModeChange
            })
          );
        // mode == 'map' 라면 지도를 표시합니다.
        default:
          break;
      }
    };

    _this.containerModeChange = function (mode) {
      _this.setState({
        containerMode: mode
      });
    };

    _this.introBuildingChange = function (node) {
      _this.setState({
        introBuildingChange: node
      });
    };

    _this.container = React.createRef();
    _this.preventDefault = function (e) {
      e.preventDefault();
    };
    _this.state = {
      lat: null,
      lot: null,
      mapDragStart: null,
      mapTouchStart: null,
      mapPositionX: 54,
      mapPositionY: -33,
      tempPositionX: 0,
      tempPositionY: 0,
      mapStyle: 'normal',
      selectNode: null,
      nearNode: null,
      targetNode: null,
      navigationMode: null,
      mapZoom: 2,
      containerMode: 'map'
    };
    return _this;
  }

  _createClass(MapContainer, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.container.current.addEventListener('touchstart', this.preventDefault);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.container.current.addEventListener('touchstart', this.preventDefault);
    }

    //////////////////////////////////////////
    // containerMode ('map' or 'building')
    // 맵 컨테이너의 메인부분에 표시할 정보를 선택합니다.
    // map : 지도를 표시합니다, building : 빌딩내 정보를 표현합니다
    //////////////////////////////////////////

  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      navigator.geolocation.getCurrentPosition(function (position) {
        var _this2$setState;

        var _position$coords = position.coords,
            accuracy = _position$coords.accuracy,
            latitude = _position$coords.latitude,
            longitude = _position$coords.longitude,
            altitude = _position$coords.altitude,
            altitudeAccuracy = _position$coords.altitudeAccuracy,
            heading = _position$coords.heading;

        var nearNode = _this2.nearNode(latitude, longitude);

        _this2.setState((_this2$setState = {
          lat: latitude,
          lot: longitude,
          acc: accuracy,
          heading: heading,
          alt: altitude,
          altAcc: altitudeAccuracy
        }, _defineProperty(_this2$setState, 'lot', longitude), _defineProperty(_this2$setState, 'nearNode', nearNode), _this2$setState));
        // Show a map centered at latitude / longitude.
      }, function (error) {}, { enableHighAccuracy: true });

      var userLat = (this.state.lat - this.props.MapContainer.start.lat) / this.props.MapContainer.map.lat * -1;
      var userLot = (this.state.lot - this.props.MapContainer.start.lot) / this.props.MapContainer.map.lot * -1;
      return React.createElement(
        'div',
        { id: 'MapContainer' },
        this.containerMode(this.state.containerMode),
        React.createElement(
          'div',
          { id: 'MapSide' },
          React.createElement(MapNavigation, {
            state: this.state,
            userLat: userLat,
            userLot: userLot,
            nodeChange: this.nodeChange,
            targetNodeChange: this.targetNodeChange,
            mapChange: this.mapChange,
            containerModeChange: this.containerModeChange,
            selectNode: this.state.selectNode
          })
        )
      );
    }
  }]);

  return MapContainer;
}(React.Component);

var start = { lat: 37.611650, lot: 126.930180 };
var end = { lat: 37.605490, lot: 126.937830
  /* 기존 테스트 이미지 기준 
  const start = {lat : 37.60965984432401,lot :126.93169409413956}
  const end = {lat : 37.60698981976014,lot :126.9356589874949} 
  */
};MapContainer.defaultProps = {
  MapContainer: {
    start: start,
    end: end,
    map: {
      lat: start.lat - end.lat,
      lot: start.lot - end.lot
    }
  }
};

//////////////////////////////////////////
// class MapController
// 맵을 컨트롤 하는 버튼등을 그리는 컴포넌트 입니다.
//////////////////////////////////////////

var MapController = function (_React$Component2) {
  _inherits(MapController, _React$Component2);

  function MapController() {
    var _ref;

    var _temp, _this3, _ret;

    _classCallCheck(this, MapController);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this3 = _possibleConstructorReturn(this, (_ref = MapController.__proto__ || Object.getPrototypeOf(MapController)).call.apply(_ref, [this].concat(args))), _this3), _this3.zoomButton = function (option) {
      var zoom = 1;
      switch (option) {
        case 'plus':
          zoom = _this3.props.mapZoom + 0.25;
          break;
        case 'minus':
          zoom = _this3.props.mapZoom - 0.25;
          break;
        default:
          zoom = 1;
          break;
      }
      _this3.props.zoomControl(parseFloat(zoom.toFixed(1)));
    }, _temp), _possibleConstructorReturn(_this3, _ret);
  }

  _createClass(MapController, [{
    key: 'render',
    value: function render() {
      var _this4 = this;

      return React.createElement(
        'div',
        { id: 'MapController' },
        React.createElement(
          'div',
          { id: 'ZoomController' },
          React.createElement(
            'button',
            { onClick: function onClick() {
                return _this4.zoomButton('plus');
              } },
            '+'
          ),
          React.createElement(
            'button',
            { onClick: function onClick() {
                return _this4.zoomButton('minus');
              } },
            '-'
          )
        )
      );
    }
  }]);

  return MapController;
}(React.Component);

var domContainer = document.querySelector('#MapFrame');
ReactDOM.render(React.createElement(MapContainer, null), domContainer);