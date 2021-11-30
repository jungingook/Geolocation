var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//////////////////////////////////////////
// class BuildingIntro
// 맵의 상세 화면 입니다.
//////////////////////////////////////////


var BuildingIntro = function (_React$Component) {
    _inherits(BuildingIntro, _React$Component);

    function BuildingIntro(props) {
        _classCallCheck(this, BuildingIntro);

        var _this = _possibleConstructorReturn(this, (BuildingIntro.__proto__ || Object.getPrototypeOf(BuildingIntro)).call(this, props));

        _this.wheelControl = function () {
            if (_this.introBody.current.scrollTop == 0) {
                _this.setState({
                    wheel: false
                });
            } else {
                _this.setState({
                    wheel: true
                });
            }
        };

        _this.introBody = React.createRef();
        _this.state = {
            wheel: false
        };
        return _this;
    }

    _createClass(BuildingIntro, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.introBody.current.addEventListener('wheel', this.preventDefault);
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            this.introBody.current.removeEventListener('wheel', this.preventDefault);
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate(prevProps, prevState) {
            if (prevProps.selectNode != this.props.selectNode) {
                this.introBody.current.scrollTo({ top: 0 });
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            return React.createElement(
                'div',
                { id: 'BuildingIntro' },
                React.createElement(
                    'div',
                    { id: 'IntroHeader', className: this.state.wheel ? 'IntroHeaderSmall' : 'IntroHeaderBig' },
                    React.createElement(
                        'div',
                        { id: 'IntroBG' },
                        React.createElement('img', { src: node[this.props.selectNode].img })
                    ),
                    React.createElement(
                        'div',
                        { id: 'IntroText' },
                        React.createElement(
                            'div',
                            null,
                            React.createElement(
                                'h2',
                                null,
                                node[this.props.selectNode].alias
                            ),
                            React.createElement(
                                'p',
                                null,
                                node[this.props.selectNode].intro
                            )
                        )
                    ),
                    React.createElement(
                        'div',
                        { id: 'IntroControl' },
                        React.createElement(
                            'div',
                            { id: 'controlZone' },
                            React.createElement(
                                'div',
                                { id: 'MoveMap', onClick: function onClick() {
                                        return _this2.props.containerModeChange('map');
                                    } },
                                React.createElement(
                                    'p',
                                    null,
                                    '\uB4A4\uB85C'
                                )
                            )
                        )
                    )
                ),
                React.createElement(
                    'div',
                    { id: 'IntroBody', ref: this.introBody, onWheel: function onWheel(e) {
                            return _this2.wheelControl(e);
                        } },
                    React.createElement(
                        'div',
                        { id: 'MoreInfo' },
                        node[this.props.selectNode].infoHTML ? node[this.props.selectNode].infoHTML : ''
                    ),
                    React.createElement(
                        'div',
                        { id: 'OrganizationInfo' },
                        React.createElement(
                            'h3',
                            { className: 'minititle' },
                            ' ',
                            React.createElement('span', { className: 'titleHeader' }),
                            '\uC785\uC8FC\uB2E8\uCCB4 \uC548\uB0B4'
                        ),
                        React.createElement(
                            'div',
                            { id: 'OrganizationList' },
                            React.createElement(Organization, null),
                            React.createElement(Organization, null),
                            React.createElement(Organization, null)
                        )
                    )
                )
            );
        }
    }]);

    return BuildingIntro;
}(React.Component);