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
            // console.log(this.introBody.current.scrollTop,'체크 테스트')
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

        _this.floorChange = function (floor) {
            _this.setState({
                floor: floor
            });
        };

        _this.BuildingFloor = function () {

            var BuildingOrganization = OrganizationData.filter(function (organization) {
                return organization.building == node[_this.props.selectNode].alias;
            });
            var floor = new Set();
            BuildingOrganization.map(function (organization) {
                return floor.add(organization.floor);
            });
            var Floor = Array.from(floor);
            return Floor.map(function (f) {
                return React.createElement(
                    'button',
                    { className: f == _this.state.floor ? 'select' : 'unSelect', onClick: function onClick() {
                            return _this.floorChange(f);
                        } },
                    ' ',
                    f,
                    '\uCE35 '
                );
            });
        };

        _this.OrganizationList = function () {
            // 건물필터
            var BuildingOrganization = OrganizationData.filter(function (organization) {
                return organization.building == node[_this.props.selectNode].alias;
            });
            // 층별 필터
            console.log(_this.state.floor, '층별 ');
            if (_this.state.floor) {
                BuildingOrganization = BuildingOrganization.filter(function (organization) {
                    return organization.floor == _this.state.floor;
                });
            }
            return BuildingOrganization.map(function (organization) {
                return React.createElement(Organization, { organization: organization });
            });
        };

        _this.introBody = React.createRef();
        _this.state = {
            wheel: false,
            floor: null
        };
        return _this;
    }

    _createClass(BuildingIntro, [{
        key: 'componentDidUpdate',
        value: function componentDidUpdate(prevProps, prevState) {
            if (prevProps.selectNode != this.props.selectNode) {
                this.introBody.current.scrollTo({ top: 0 });
                this.setState({
                    floor: null
                });
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var BuildingFloor = this.BuildingFloor();
            var OrganizationList = this.OrganizationList();

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
                                    'svg',
                                    {
                                        xmlns: 'http://www.w3.org/2000/svg',
                                        width: 'current',
                                        height: 'current',
                                        viewBox: '0 0 595 419'
                                    },
                                    React.createElement(
                                        'g',
                                        null,
                                        React.createElement(
                                            'g',
                                            null,
                                            React.createElement('path', { 'class': 'st0', d: 'M400.25,330.79c-4.61,0-9.21-1.76-12.73-5.27L182.75,120.75c-7.03-7.03-7.03-18.43,0-25.46 c7.03-7.03,18.43-7.03,25.46,0l204.77,204.77c7.03,7.03,7.03,18.43,0,25.46C409.46,329.03,404.85,330.79,400.25,330.79z' })
                                        ),
                                        React.createElement(
                                            'g',
                                            null,
                                            React.createElement('path', { 'class': 'st0', d: 'M195.48,330.79c-4.61,0-9.21-1.76-12.73-5.27c-7.03-7.03-7.03-18.43,0-25.46L387.52,95.29 c7.03-7.03,18.43-7.03,25.46,0c7.03,7.03,7.03,18.43,0,25.46L208.2,325.52C204.69,329.03,200.08,330.79,195.48,330.79z' })
                                        )
                                    )
                                )
                            )
                        )
                    )
                ),
                React.createElement(
                    'div',
                    { id: 'IntroBody', ref: this.introBody, onTouchStart: function onTouchStart(e) {
                            return _this2.wheelControl(e);
                        }, onTouchEnd: function onTouchEnd(e) {
                            return _this2.wheelControl(e);
                        }, onWheel: function onWheel(e) {
                            return _this2.wheelControl(e);
                        } },
                    React.createElement(
                        'div',
                        { id: 'MoreInfo' },
                        node[this.props.selectNode].infoHTML ? node[this.props.selectNode].infoHTML : ''
                    ),
                    OrganizationList.length != 0 ? React.createElement(
                        'div',
                        { id: 'OrganizationInfo' },
                        React.createElement(
                            'div',
                            { id: 'OrganizationInfoHeader' },
                            React.createElement(
                                'h3',
                                { className: 'minititle' },
                                ' ',
                                React.createElement('span', { className: 'titleHeader' }),
                                '\uC785\uC8FC\uB2E8\uCCB4 \uC548\uB0B4'
                            ),
                            React.createElement(
                                'div',
                                { id: 'BuildingFloor' },
                                React.createElement(
                                    'button',
                                    { className: null == this.state.floor ? 'select' : 'unSelect', onClick: function onClick() {
                                            return _this2.floorChange(null);
                                        } },
                                    ' \uBAA8\uB450 '
                                ),
                                BuildingFloor
                            )
                        ),
                        React.createElement(
                            'div',
                            { id: 'OrganizationList' },
                            OrganizationList
                        )
                    ) : ''
                )
            );
        }
    }]);

    return BuildingIntro;
}(React.Component);