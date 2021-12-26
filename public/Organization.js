var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//////////////////////////////////////////
// class Organization
// 맵의 상세 화면 입니다.
//////////////////////////////////////////

var Organization = function (_React$Component) {
    _inherits(Organization, _React$Component);

    function Organization(props) {
        _classCallCheck(this, Organization);

        var _this = _possibleConstructorReturn(this, (Organization.__proto__ || Object.getPrototypeOf(Organization)).call(this, props));

        _this.roomNumber = function () {
            var roomText = '';
            if (_typeof(_this.props.organization.roomNumber) == 'object') {
                roomlist = _this.props.organization.roomNumber.map(function (number) {
                    return ' ' + number;
                });
                if (_this.props.organization.roomNumber.length == 2) {
                    return React.createElement(
                        'p',
                        { className: 'roomNumberDual' },
                        ' ',
                        roomlist + '호',
                        ' '
                    );
                }
                if (_this.props.organization.roomNumber.length == 3) {
                    return React.createElement(
                        'p',
                        { className: 'roomNumberTriple' },
                        ' ',
                        roomlist + '호',
                        ' '
                    );
                }
                if (_this.props.organization.roomNumber.length > 4) {
                    return React.createElement(
                        'p',
                        { className: 'roomNumberMulti' },
                        ' ',
                        roomlist[0] + '~' + roomlist[roomlist.length - 1] + '호',
                        ' '
                    );
                }
            } else {
                roomText = _this.props.organization.roomNumber;
                return React.createElement(
                    'p',
                    { className: 'roomNumberSingle' },
                    ' ',
                    roomText + '호',
                    ' '
                );
            }
        };

        _this.state = {
            card: 'Front'
        };
        return _this;
    }

    _createClass(Organization, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            return React.createElement(
                'div',
                { className: 'organizationCard' },
                React.createElement(
                    'div',
                    { className: 'organizationCardFront', onClick: function onClick() {
                            _this2.setState({ card: 'Back' });
                        } },
                    this.props.organization.mainIMG ? React.createElement('img', { src: this.props.organization.mainIMG,
                        onError: 'https://www.innovationpark.kr/wp-content/uploads/2018/08/logo.png',
                        onLoad: 'https://www.innovationpark.kr/wp-content/uploads/2018/08/logo.png'
                    }) : React.createElement('img', { src: 'https://www.innovationpark.kr/wp-content/uploads/2018/08/logo.png' }),
                    React.createElement(
                        'div',
                        { className: 'organizationName' },
                        React.createElement(
                            'h3',
                            null,
                            this.props.organization.name
                        )
                    )
                ),
                this.state.card == 'Back' ? React.createElement(
                    'div',
                    { className: 'organizationCardBack', onClick: function onClick() {
                            _this2.setState({ card: 'Front' });
                        } },
                    React.createElement(
                        'div',
                        { className: 'organizationHeader' },
                        React.createElement(
                            'h3',
                            null,
                            this.props.organization.name
                        ),
                        React.createElement(
                            'div',
                            { className: 'organizationBnt' },
                            this.props.organization.phone ? React.createElement(
                                'span',
                                { className: 'organizationPhone' },
                                React.createElement('img', null),
                                React.createElement(
                                    'a',
                                    { href: 'tel:' + this.props.organization.phone },
                                    this.props.organization.phone
                                )
                            ) : '',
                            React.createElement(
                                'span',
                                { className: 'organizationSite' },
                                this.props.organization.website ? React.createElement(
                                    'a',
                                    { href: this.props.organization.website, target: '_blank' },
                                    '\uC0AC\uC774\uD2B8\uBC29\uBB38'
                                ) : '',
                                this.props.organization.email ? React.createElement('a', { className: 'mail', href: 'mailto:' + this.props.organization.email }) : ''
                            )
                        )
                    ),
                    React.createElement(
                        'div',
                        { className: 'organizationIntro' },
                        React.createElement(
                            'p',
                            null,
                            this.props.organization.intro
                        )
                    )
                ) : '',
                this.props.organization.roomNumber ? React.createElement(
                    'div',
                    { className: 'organizationCardNum' },
                    this.roomNumber()
                ) : ''
            );
        }
    }]);

    return Organization;
}(React.Component);