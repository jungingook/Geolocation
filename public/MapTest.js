var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MapTest = function (_React$Component) {
  _inherits(MapTest, _React$Component);

  function MapTest(props) {
    _classCallCheck(this, MapTest);

    var _this = _possibleConstructorReturn(this, (MapTest.__proto__ || Object.getPrototypeOf(MapTest)).call(this, props));

    _this.nearNode = function () {
      var nearlot = void 0;
      var nearlat = void 0;
      var min = Infinity;
      var num = null;
      for (var index = 0; index < node.length; index++) {
        lot = Math.abs(_this.props.state.lot - node[index].lot);
        lat = Math.abs(_this.props.state.lat - node[index].lat);
        console.log(lot + lat);
        if (min > lot + lat) {
          min = lot + lat;
          num = index;
        }
      }
      console.log(min, num, '끝');
      return num;
    };

    _this.state = {
      lat: null,
      lot: null
    };
    return _this;
  }

  _createClass(MapTest, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      this.nearNode();
      console.log(node);

      console.log(this.props.state.lot);
      console.log(this.props.state.lat);

      return React.createElement(
        "div",
        { id: "testPanel" },
        React.createElement(
          "div",
          { id: "testOption" },
          "\uBC30\uACBD :",
          React.createElement(
            "button",
            { onClick: function onClick() {
                return _this2.props.mapChange('normal');
              } },
            "\uC0AC\uC9C4"
          ),
          React.createElement(
            "button",
            { onClick: function onClick() {
                return _this2.props.mapChange('painting');
              } },
            "\uADF8\uB9BC"
          )
        ),
        React.createElement(
          "div",
          { id: "testGeolocation" },
          React.createElement(
            "p",
            null,
            "\uC815\uD655\uB3C4  :",
            this.props.state.acc
          ),
          React.createElement(
            "p",
            null,
            "\uACE0\uB3C4  :",
            this.props.state.lat
          ),
          React.createElement(
            "p",
            null,
            "\uC88C\uD45C(lot) :",
            this.props.state.lot
          ),
          React.createElement(
            "p",
            null,
            "\uC88C\uD45C(lat) :",
            this.props.state.lat
          ),
          React.createElement(
            "p",
            null,
            "heading :",
            this.props.state.heading
          ),
          React.createElement(
            "p",
            null,
            "\uAC00\uC7A5 \uAC00\uAE4C\uC6B4 \uB178\uB4DC :",
            this.nearNode()
          ),
          React.createElement(
            "p",
            null,
            this.props.state.lat ? '위치 Y: ' + Math.round(this.props.userLat) + 'X : ' + Math.round(this.props.userLot) : '위치 찾는중'
          )
        )
      );
    }
  }]);

  return MapTest;
}(React.Component);