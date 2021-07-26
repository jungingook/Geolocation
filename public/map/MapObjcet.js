var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MapObjcet = function (_React$Component) {
  _inherits(MapObjcet, _React$Component);

  function MapObjcet(props) {
    _classCallCheck(this, MapObjcet);

    var _this = _possibleConstructorReturn(this, (MapObjcet.__proto__ || Object.getPrototypeOf(MapObjcet)).call(this, props));

    _this.state = {
      lat: null,
      lot: null
    };
    return _this;
  }

  _createClass(MapObjcet, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      console.log('componentDidMount');
    }
  }, {
    key: "render",
    value: function render() {

      return React.createElement(
        "div",
        { id: "MapContainer" },
        "\uB9F5\uC785\uB2C8\uB2E4."
      );
    }
  }]);

  return MapObjcet;
}(React.Component);