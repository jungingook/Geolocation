var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MapBackground = function (_React$Component) {
  _inherits(MapBackground, _React$Component);

  function MapBackground(props) {
    _classCallCheck(this, MapBackground);

    var _this = _possibleConstructorReturn(this, (MapBackground.__proto__ || Object.getPrototypeOf(MapBackground)).call(this, props));

    _this.state = {
      lat: null,
      lot: null
    };
    return _this;
  }

  _createClass(MapBackground, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        { id: "MapBackground" },
        React.createElement("div", { id: "tempBack", style: { 'transform': 'scale(' + this.props.mapZoom + ')' }, className: this.props.style == 'painting' ? 'map2' : 'map1' })
      );
    }
  }]);

  return MapBackground;
}(React.Component);

var MapBuildingObject = function (_React$Component2) {
  _inherits(MapBuildingObject, _React$Component2);

  function MapBuildingObject(props) {
    _classCallCheck(this, MapBuildingObject);

    var _this2 = _possibleConstructorReturn(this, (MapBuildingObject.__proto__ || Object.getPrototypeOf(MapBuildingObject)).call(this, props));

    _this2.objectSelect = function (e, num) {
      _this2.props.nodeChange(num);
      e.stopPropagation();
    };

    _this2.objectMaker = function () {
      var nodeList = node.filter(function (node) {
        return node.type == "Building";
      });
      console.log(nodeList);
      // nodeList = nodeList.filter( node =>(node.num==10));
      return nodeList.map(function (node) {
        return React.createElement(
          "div",
          { id: "Building" + node.num, className: _this2.props.selectNode == node.num ? "selectNode" : "unSelectNode", onClick: function onClick(e) {
              return _this2.objectSelect(e, node.num);
            } },
          React.createElement(
            "div",
            { style: { 'transform': 'scale(' + 1 / _this2.props.mapZoom + ')', transition: 'transform 0.3s' } },
            React.createElement(
              "div",
              { id: "PlaceNoti", onClick: function onClick(e) {
                  return e.stopPropagation();
                } },
              React.createElement("img", { src: node.img }),
              React.createElement(
                "div",
                { id: "PlaceNotiInfo" },
                React.createElement(
                  "h3",
                  null,
                  React.createElement(
                    "span",
                    null,
                    node.alias
                  )
                ),
                React.createElement("p", null)
              )
            )
          )
        );
      });
    };

    _this2.state = {
      lat: null,
      lot: null
    };
    return _this2;
  }

  _createClass(MapBuildingObject, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        { id: "MapBuildingObject", style: { 'transform': 'scale(' + this.props.mapZoom + ')' } },
        this.objectMaker()
      );
    }
  }]);

  return MapBuildingObject;
}(React.Component);