var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MapObjcet = function (_React$Component) {
  _inherits(MapObjcet, _React$Component);

  function MapObjcet(props) {
    _classCallCheck(this, MapObjcet);

    var _this = _possibleConstructorReturn(this, (MapObjcet.__proto__ || Object.getPrototypeOf(MapObjcet)).call(this, props));

    _this.dijkstra = function (start, end) {

      nextNode = function nextNode(startNode, targetNode) {
        // console.log('경로 : ',node[startNode].alias,'-->',node[targetNode.vertex].alias,'갱신여부 : ',distance[targetNode.vertex]>targetNode.dist+distance[startNode])
        if (distance[targetNode.vertex] > targetNode.dist + distance[startNode]) {
          distance[targetNode.vertex] = targetNode.dist + distance[startNode];
          prev[targetNode.vertex] = startNode;
          Queue.enQueue(targetNode);
        }
      };

      findRoute = function (_findRoute) {
        function findRoute(_x) {
          return _findRoute.apply(this, arguments);
        }

        findRoute.toString = function () {
          return _findRoute.toString();
        };

        return findRoute;
      }(function (targetNode) {
        if (prev[targetNode]) {
          route.push(prev[targetNode]);
          findRoute(prev[targetNode]);
        }
      });

      var Queue = new PriorityQueue();
      var route = [];
      var prev = Array.from({ length: node.length }, function () {
        return null;
      });
      var target = start;
      var findNode = [];
      var num = node[target].num;
      // 모든 경로를 무한으로 초기화 (Number.MAX_SAFE_INTEGER 변경예정)
      var distance = Array.from({ length: node.length }, function () {
        return Number.MAX_SAFE_INTEGER;
      });
      // 나의 위치를 초기화합니다.
      distance[node[target].num] = 0;
      prev[node[target].num] = 0;

      node[target].link.map(function (node) {
        return nextNode(num, node);
      });
      while (Queue.len() != 0) {

        var targetNode = Queue.deQueue();
        target = targetNode.vertex;
        num = node[target].num;
        node[target].link.map(function (node) {
          return nextNode(num, node);
        });
      }

      // 경로찾기
      route.push(end);
      findRoute(end);
      _this.setState({
        route: route, start: start, end: end
      });
      return route;
    };

    _this.inPark = function () {
      var inPark = false;
      if (_this.props.userLot > 0 && _this.props.userLot < 100 && _this.props.userLat > 0 && _this.props.userLat < 100) {
        inPark = true;
      }
      return inPark;
    };

    _this.mapObjs = function (inpark) {
      var objs = [React.createElement(MapBackground, { style: _this.props.mapStyle, mapZoom: _this.props.mapZoom })];
      objs.push(React.createElement(MapNode, { lot: _this.props.userLot, lat: _this.props.userLat, MapContainer: _this.props.MapContainer, nodeChange: _this.props.nodeChange, route: _this.state.route, navigationMode: _this.props.navigationMode, mapZoom: _this.props.mapZoom }));
      objs.push(React.createElement(MapBuildingObject, { style: _this.props.mapStyle, mapZoom: _this.props.mapZoom, nodeChange: _this.props.nodeChange, selectNode: _this.props.selectNode }));
      if (_this.props.selectNode != null) {
        // objs.push(<PlaceNoti navigationStart={this.navigationStart} navigationEnd={this.navigationEnd} node={this.props.selectNode} lot={this.props.userLot} lat={this.props.userLat} MapContainer={this.props.MapContainer} mapZoom={this.props.mapZoom}/>)
      }
      if (inpark) {
        objs.push(React.createElement(MyPosition, { lot: _this.props.userLot, lat: _this.props.userLat, mapZoom: _this.props.mapZoom }));
      }
      return objs;
    };

    _this.navigationStart = function (start) {
      _this.dijkstra(start, _this.state.end);
    };

    _this.navigationEnd = function (end) {
      _this.dijkstra(_this.state.start, end);
    };

    _this.navigationRoute = function () {
      switch (_this.props.navigationMode) {
        case 'myLocation':
          if (_this.props.nearNode) {
            _this.dijkstra(_this.props.nearNode, _this.props.targetNode);
          }
          break;
        case 'station':
          _this.dijkstra(2, _this.props.targetNode);
          break;
        case 'back':
          _this.dijkstra(1, _this.props.targetNode);
          break;
        case 'front':
          _this.dijkstra(6, _this.props.targetNode);
          break;
        default:
          break;
      }
    };

    _this.navigation = function (start, end) {
      _this.dijkstra(start, end);
    };

    _this.polling = function () {
      if (_this.props.navigationMode == "myLocation") {
        _this.navigationRoute();
      }
    };

    _this.container = React.createRef();
    _this.preventDefault = function (e) {
      e.preventDefault();
    };
    _this.state = {
      // inPark : false,
      start: 1,
      end: 1,
      route: [],
      polling: 0,
      pollingInterval: null
    };
    return _this;
  }

  _createClass(MapObjcet, [{
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps, prevState) {
      if (this.props.navigationMode != prevProps.navigationMode) {
        this.navigationRoute();
        if (this.props.navigationMode == 'myLocation') {
          var polling = setInterval(this.polling, 2000);
          this.setState({
            pollingInterval: polling
          });
        }
      }
      if (this.props.navigationMode != 'myLocation') {
        clearInterval(this.state.pollingInterval);
      }
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      // console.log(this.container.current)
      // console.log('componentDidMount')
      this.container.current.addEventListener('touchstart', this.preventDefault);
      if (this.props.parents != 'view') {
        // AJAX 통신 마운트
        // 내부 카운터 마운트

      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.container.current.removeEventListener('touchstart', this.preventDefault);
      // clearInterval(this.state.pollingInterval);
      if (this.props.parents != 'view') {
        // 내부 카운터 언마운트
        clearInterval(this.state.pollingInterval);
      }
    }

    // 최적화 필요!!! 
    // # 1 마이 로케이션 사용 안하면 GPS 요구 하지 않도록 변경 
    // # 2 내 위치가 파크 주변이 아닌경우 폴링 취소, 파크인경우에만 허용

  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      if (this.props.navigationMode == "myLocation") {
        this.props.useGps();
      }
      var inpark = this.inPark();
      return React.createElement(
        'div',
        { id: 'MapObjcet', style: { 'top': this.props.top, 'left': this.props.left }, ref: this.container, onClick: function onClick() {
            return _this2.props.nodeChange(null);
          } },
        this.mapObjs(inpark)
      );
    }
  }]);

  return MapObjcet;
}(React.Component);