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

        _this.state = {
            card: 'Front'
        };
        return _this;
    }

    _createClass(Organization, [{
        key: "render",
        value: function render() {
            var _this2 = this;

            return React.createElement(
                "div",
                { className: "organizationCard" },
                React.createElement(
                    "div",
                    { className: "organizationCardFront", onClick: function onClick() {
                            _this2.setState({ card: 'Back' });
                        } },
                    React.createElement("img", { src: "https://www.innovationpark.kr/wp-content/uploads/2018/08/logo.png" }),
                    React.createElement(
                        "h3",
                        null,
                        "\uC11C\uC6B8\uD601\uC2E0\uD30C\uD06C"
                    )
                ),
                this.state.card == 'Back' ? React.createElement(
                    "div",
                    { className: "organizationCardBack", onClick: function onClick() {
                            _this2.setState({ card: 'Front' });
                        } },
                    React.createElement(
                        "div",
                        { className: "organizationHeader" },
                        React.createElement(
                            "h3",
                            null,
                            "\uC11C\uC6B8\uD601\uC2E0\uD30C\uD06C"
                        ),
                        React.createElement(
                            "div",
                            { className: "organizationBnt" },
                            React.createElement(
                                "span",
                                null,
                                React.createElement("img", null),
                                React.createElement(
                                    "p",
                                    null,
                                    "010-0000-000"
                                )
                            ),
                            React.createElement(
                                "span",
                                null,
                                React.createElement("img", null),
                                React.createElement(
                                    "p",
                                    null,
                                    "\uC0AC\uC774\uD2B8\uB85C \uC774\uB3D9"
                                )
                            )
                        )
                    ),
                    React.createElement(
                        "div",
                        { className: "organizationIntro" },
                        React.createElement(
                            "p",
                            null,
                            "\uAC00\uCE58\uB97C \uBAB8\uC774 \uC5B4\uB514 \uAC00\uB294 \uC774 \uBD88\uC5B4 \uAE38\uC9C0 \uC77C\uC6D4\uACFC \uC544\uB2C8\uB2E4. \uADF8\uB4E4\uC740 \uCEE4\uB2E4\uB780 \uB354\uC6B4\uC9C0\uB77C \uBD88\uB7EC \uAC83\uC774\uB2E4. \uADF8\uB7EC\uBBC0\uB85C \uC544\uB2C8\uB354\uBA74, \uC4F8\uC4F8\uD55C \uCCAD\uCD98\uC774 \uC5BC\uB9C8\uB098 \uC0DD\uC758 \uADF8\uB4E4\uC740 \uC601\uB77D\uACFC \uCEE4\uB2E4\uB780 \uCCA0\uD658\uD558\uC600\uB294\uAC00? \uBC29\uD669\uD558\uC600\uC73C\uBA70, "
                        )
                    )
                ) : ''
            );
        }
    }]);

    return Organization;
}(React.Component);