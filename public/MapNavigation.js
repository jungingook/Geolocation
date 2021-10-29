var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MapNavigation = function (_React$Component) {
  _inherits(MapNavigation, _React$Component);

  function MapNavigation(props) {
    _classCallCheck(this, MapNavigation);

    var _this = _possibleConstructorReturn(this, (MapNavigation.__proto__ || Object.getPrototypeOf(MapNavigation)).call(this, props));

    _this.nav = function () {
      list = node.filter(function (node) {
        return node.type == 'Building';
      });
      if (_this.state.search) {
        list = list.filter(function (node) {
          return node.alias.includes(_this.state.search);
        });
      }

      point = list.map(function (node, index) {
        return React.createElement(PlaceCard, { selectNode: _this.props.selectNode, key: index, node: node, index: index, nodeChange: _this.props.nodeChange, targetNodeChange: _this.props.targetNodeChange });
      });

      switch (_this.state.nav) {
        case 'sidebar':
          return React.createElement(
            'div',
            null,
            React.createElement(
              'div',
              { className: 'search' },
              React.createElement(
                'label',
                { 'for': 'fname' },
                React.createElement(
                  'p',
                  null,
                  '\uAC80\uC0C9'
                ),
                React.createElement('input', { placeholder: '\uC7A5\uC18C\uB97C \uAC80\uC0C9\uD558\uC138\uC694', value: _this.state.search, onChange: function onChange(e) {
                    return _this.setState({ search: e.target.value });
                  } })
              )
            ),
            React.createElement(
              'div',
              { id: 'navScroll' },
              React.createElement(
                'div',
                { id: 'mapPointList' },
                point
              )
            )
          );
        case 'test':
          return React.createElement(
            'div',
            null,
            React.createElement(MapTest, { key: 'MapTest', state: _this.props.state, userLat: _this.props.userLat, userLot: _this.props.userLot, mapChange: _this.props.mapChange })
          );
        default:
          break;
      }
    };

    _this.state = {
      nav: 'sidebar',
      lot: null,
      search: ''
    };
    return _this;
  }

  _createClass(MapNavigation, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        { id: 'MapNavigation' },
        this.nav()
      );
    }
  }]);

  return MapNavigation;
}(React.Component);

var PlaceCard = function (_React$Component2) {
  _inherits(PlaceCard, _React$Component2);

  function PlaceCard(props) {
    _classCallCheck(this, PlaceCard);

    var _this2 = _possibleConstructorReturn(this, (PlaceCard.__proto__ || Object.getPrototypeOf(PlaceCard)).call(this, props));

    _this2.select = function (num) {
      _this2.props.nodeChange(num);
      // this.setState({
      //   mode : 'more',
      // })
    };

    _this2.unselect = function () {
      _this2.props.nodeChange(null);
      _this2.setState({
        mode: 'info'
      });
    };

    _this2.route = function (e) {
      _this2.setState({
        mode: 'route'
      });
      e.stopPropagation();
    };

    _this2.back = function (e) {
      _this2.setState({
        mode: 'info'
      });
      e.stopPropagation();
    };

    _this2.content = function () {

      switch (_this2.state.mode) {
        case 'test':
          return React.createElement(
            'div',
            { div: true, className: 'mapPoint mapTransition', onClick: function onClick() {
                return _this2.props.nodeChange(_this2.props.node.num);
              } },
            React.createElement('img', { src: _this2.props.node.img }),
            React.createElement(
              'div',
              { className: 'poin\u3134tInfo' },
              React.createElement(
                'div',
                { className: 'pointheader' },
                React.createElement(
                  'h3',
                  null,
                  _this2.props.node.alias
                ),
                React.createElement(
                  'span',
                  null,
                  React.createElement(
                    'button',
                    { onClick: function onClick() {
                        return _this2.setState({ mode: 'nav' });
                      } },
                    '\uAE38\uCC3E\uAE30'
                  ),
                  React.createElement(
                    'button',
                    { onClick: function onClick() {
                        return _this2.setState({ mode: 'more' });
                      } },
                    '\uB354\uBCF4\uAE30'
                  )
                )
              ),
              React.createElement(
                'p',
                null,
                _this2.props.node.summary
              )
            )
          );
        case 'info':
          return React.createElement(
            'div',
            { div: true, className: 'PlaceCard', onClick: function onClick() {
                return _this2.select(_this2.props.node.num);
              } },
            React.createElement('img', { className: 'PlaceImg', src: _this2.props.node.img }),
            React.createElement(
              'div',
              { className: 'Placeinfo' },
              React.createElement(
                'div',
                { className: 'PlaceHeaher' },
                React.createElement(
                  'h3',
                  { className: 'PlaceTitle' },
                  _this2.props.node.alias
                )
              )
            ),
            React.createElement(
              'div',
              { className: 'PlaceButton' },
              React.createElement(
                'button',
                { className: 'router', onClick: function onClick() {
                    return _this2.setState({ mode: 'more' });
                  } },
                React.createElement(
                  'p',
                  null,
                  '\uAC74\uBB3C\uC548\uB0B4'
                )
              ),
              React.createElement(
                'button',
                { className: 'more', onClick: function onClick(e) {
                    return _this2.route(e);
                  } },
                React.createElement(
                  'p',
                  null,
                  '\uAE38\uCC3E\uAE30'
                )
              )
            )
          );
        case 'route':
          return React.createElement(
            'div',
            { div: true, className: 'RouteCard' },
            React.createElement('img', { className: 'PlaceImg', src: _this2.props.node.img }),
            React.createElement(
              'div',
              { className: 'Placeinfo' },
              React.createElement(
                'div',
                { className: 'PlaceHeaher' },
                React.createElement(
                  'h3',
                  { className: 'PlaceTitle' },
                  _this2.props.node.alias
                )
              ),
              React.createElement(
                'h3',
                { className: 'routerNoti' },
                ' \uCD9C\uBC1C\uC9C0\uC810\uC744 \uC120\uD0DD\uD558\uC138\uC694 '
              ),
              React.createElement(
                'ul',
                { className: 'routerlist' },
                React.createElement(
                  'li',
                  { className: 'routerButton', onClick: function onClick() {
                      _this2.props.targetNodeChange(_this2.props.node.num, 'myLocation');
                    } },
                  React.createElement('img', { className: 'routerImgMe' }),
                  React.createElement(
                    'p',
                    null,
                    '\uB0B4\uC704\uCE58'
                  )
                ),
                React.createElement(
                  'li',
                  { className: 'routerButton', onClick: function onClick() {
                      _this2.props.targetNodeChange(_this2.props.node.num, 'front');
                    } },
                  React.createElement('img', { className: 'routerImgFront' }),
                  React.createElement(
                    'p',
                    null,
                    '\uC815\uBB38'
                  )
                ),
                React.createElement(
                  'li',
                  { className: 'routerButton', onClick: function onClick() {
                      _this2.props.targetNodeChange(_this2.props.node.num, 'back');
                    } },
                  React.createElement('img', { className: 'routerImgBack' }),
                  React.createElement(
                    'p',
                    null,
                    '\uD6C4\uBB38'
                  )
                ),
                React.createElement(
                  'li',
                  { className: 'routerButton', onClick: function onClick() {
                      _this2.props.targetNodeChange(_this2.props.node.num, 'station');
                    } },
                  React.createElement('img', { className: 'routerImgSubway' }),
                  React.createElement(
                    'p',
                    null,
                    '\uBD88\uAD11\uC5ED'
                  )
                )
              )
            ),
            React.createElement(
              'div',
              { className: 'PlaceButton' },
              React.createElement(
                'button',
                { className: 'router', onClick: function onClick() {
                    return _this2.setState({ mode: 'more' });
                  } },
                React.createElement(
                  'p',
                  null,
                  '\uAC74\uBB3C\uC548\uB0B4'
                )
              ),
              React.createElement(
                'button',
                { className: 'more', onClick: function onClick(e) {
                    return _this2.back(e);
                  } },
                React.createElement(
                  'p',
                  null,
                  '\uB4A4\uB85C'
                )
              )
            )
          );
        case 'more':
          return React.createElement(
            'div',
            { div: true, className: 'MoreCard', onClick: function onClick() {
                return _this2.unselect();
              } },
            React.createElement('img', { className: 'PlaceImg', src: _this2.props.node.img }),
            React.createElement(
              'div',
              { className: 'Placeinfo' },
              React.createElement(
                'div',
                { className: 'PlaceHeaher' },
                React.createElement(
                  'h3',
                  { className: 'PlaceTitle' },
                  _this2.props.node.alias
                )
              ),
              React.createElement(
                'p',
                { className: 'PlaceSummary' },
                ' ',
                _this2.props.node.summary
              ),
              React.createElement(
                'div',
                { className: 'MoreCardButton' },
                React.createElement(
                  'button',
                  null,
                  '\uB354\uBCF4\uAE30'
                ),
                React.createElement(
                  'button',
                  null,
                  '\uC785\uC8FC\uB2E8\uCCB4 \uC18C\uAC1C'
                )
              )
            ),
            React.createElement(
              'div',
              { className: 'PlaceButton' },
              React.createElement(
                'button',
                { className: 'more', onClick: function onClick(e) {
                    return _this2.back(e);
                  } },
                React.createElement(
                  'p',
                  null,
                  '\uB4A4\uB85C'
                )
              ),
              React.createElement(
                'button',
                { className: 'more', onClick: function onClick(e) {
                    return _this2.route(e);
                  } },
                React.createElement(
                  'p',
                  null,
                  '\uAE38\uCC3E\uAE30'
                )
              )
            )
          );
      }
    };

    _this2.state = {
      mode: 'info'
    };
    return _this2;
  }

  _createClass(PlaceCard, [{
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps, prevState) {
      // console.log('componentDidUpdate');
    }
  }, {
    key: 'render',
    value: function render() {
      return this.content();
    }
  }]);

  return PlaceCard;
}(React.Component);