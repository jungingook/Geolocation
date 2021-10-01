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
      console.log('시작', start, end);
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
        console.log(targetNode, prev[targetNode], '테스트중');
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
        return Infinity;
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

      // for (let index = 0; index < prev.length; index++) {
      //   console.log(index,'번 노드',distance[index],prev[index])

      // }

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
      var objs = [React.createElement(MapBackground, { style: _this.props.mapStyle })];
      objs.push(React.createElement(MapNode, { lot: _this.props.userLot, lat: _this.props.userLat, MapContainer: _this.props.MapContainer, nodeChange: _this.props.nodeChange, route: _this.state.route, navigationMode: _this.props.navigationMode }));
      if (_this.props.selectNode != null) {
        objs.push(React.createElement(PlaceNoti, { navigationStart: _this.navigationStart, navigationEnd: _this.navigationEnd, node: _this.props.selectNode, lot: _this.props.userLot, lat: _this.props.userLat, MapContainer: _this.props.MapContainer }));
      }
      if (inpark) {
        objs.push(React.createElement(MyPosition, { lot: _this.props.userLot, lat: _this.props.userLat }));
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
      _this.navigationRoute();
      // this.setState({
      //     polling : this.state.polling +1
      // })
    };

    _this.state = {
      // inPark : false,
      start: 1,
      end: 1,
      route: [],
      polling: 0
    };
    return _this;
  }

  _createClass(MapObjcet, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (this.props.parents != 'view') {
        // AJAX 통신 마운트
        // 내부 카운터 마운트
        var polling = setInterval(this.polling, 1000);
        this.setState({
          pollingInterval: polling
        });
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (this.props.parents != 'view') {
        // 내부 카운터 언마운트
        clearInterval(this.state.pollingInterval);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var inpark = this.inPark();
      return React.createElement(
        'div',
        { id: 'MapObjcet', style: { 'top': this.props.top, 'left': this.props.left } },
        this.mapObjs(inpark)
      );
    }
  }]);

  return MapObjcet;
}(React.Component);