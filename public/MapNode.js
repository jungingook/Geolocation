var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MapNode = function (_React$Component) {
    _inherits(MapNode, _React$Component);

    function MapNode(props) {
        _classCallCheck(this, MapNode);

        var _this = _possibleConstructorReturn(this, (MapNode.__proto__ || Object.getPrototypeOf(MapNode)).call(this, props));

        _this.nodeType = function (value) {
            switch (value) {
                case 'Entrance':
                    return 'green';
                case 'Building':
                    return 'red';
                case 'Node':
                    return 'blue';
                default:
                    break;
            }
        };

        _this.guideLine = function () {
            var points = _this.props.route.map(function (num) {
                return Math.floor((node[num].lot - _this.props.MapContainer.start.lot) / _this.props.MapContainer.map.lot * -1 * 1000) + "," + Math.floor((node[num].lat - _this.props.MapContainer.start.lat) / _this.props.MapContainer.map.lat * -1 * 1000) + " ";
            });
            if (_this.props.navigationMode == 'myLocation') {
                points.push(Math.floor(_this.props.lot * 1000) + "," + Math.floor(_this.props.lat * 1000) + " ");
            }
            return React.createElement('polyline', { id: 'GuideLine',
                points: points,
                fill: 'none', stroke: 'blue', 'stroke-width': '6' });
        };

        _this.noti = function (e, num) {
            _this.props.nodeChange(num);
            e.stopPropagation();
        };

        thlatstate = _defineProperty({
            lot: null
        }, 'lot', null);
        return _this;
    }

    _createClass(MapNode, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            list = node.filter(function (node) {
                return node.lat && node.lot;
            });
            list = list.filter(function (node) {
                return node.type == "Building";
            });
            mapNode = list.map(function (node, index) {
                return React.createElement(
                    'g',
                    null,
                    React.createElement('circle', { className: "nodetest " + node.alias + " " + index,
                        onClick: function onClick(e) {
                            return _this2.noti(e, node.num);
                        },
                        cy: (node.lat - _this2.props.MapContainer.start.lat) / _this2.props.MapContainer.map.lat * -1 * 100 + "%",
                        cx: (node.lot - _this2.props.MapContainer.start.lot) / _this2.props.MapContainer.map.lot * -1 * 100 + "%",
                        r: '15',
                        fill: '#00000010' }),
                    React.createElement('circle', { className: "nodetest " + node.alias + " " + index,
                        onClick: function onClick(e) {
                            return _this2.noti(e, node.num);
                        },
                        cy: (node.lat - _this2.props.MapContainer.start.lat) / _this2.props.MapContainer.map.lat * -1 * 100 + "%",
                        cx: (node.lot - _this2.props.MapContainer.start.lot) / _this2.props.MapContainer.map.lot * -1 * 100 + "%",
                        r: '5',
                        fill: _this2.nodeType(node.type) })
                );
            });

            mapLink = node.map(function (node, index) {
                return React.createElement('circle', { className: "nodetest " + node.alias,
                    cy: (node.lat - _this2.props.MapContainer.start.lat) / _this2.props.MapContainer.map.lat * -1 * 100 + "%",
                    cx: (node.lot - _this2.props.MapContainer.start.lot) / _this2.props.MapContainer.map.lot * -1 * 100 + "%",
                    r: '5',
                    fill: _this2.nodeType(node.type) });
            });

            return React.createElement(
                'svg',
                { id: 'MapNode', viewBox: '0 0 1000 1000', style: { 'transform': 'scale(' + this.props.mapZoom + ')' } },
                this.guideLine(),
                mapNode
            );
        }
    }]);

    return MapNode;
}(React.Component);

var PlaceNoti = function (_React$Component2) {
    _inherits(PlaceNoti, _React$Component2);

    function PlaceNoti(props) {
        _classCallCheck(this, PlaceNoti);

        var _this3 = _possibleConstructorReturn(this, (PlaceNoti.__proto__ || Object.getPrototypeOf(PlaceNoti)).call(this, props));

        thlatstate = _defineProperty({
            lot: null
        }, 'lot', null);
        return _this3;
    }

    _createClass(PlaceNoti, [{
        key: 'render',
        value: function render() {
            var linkNode = node[this.props.node].link.map(function (link) {
                return node[link.vertex].alias + '(' + link.vertex + '), ';
            });
            var top = (node[this.props.node].lat - this.props.MapContainer.start.lat) / this.props.MapContainer.map.lat * -1 * 100;
            var left = (node[this.props.node].lot - this.props.MapContainer.start.lot) / this.props.MapContainer.map.lot * -1 * 100;
            return React.createElement(
                'div',
                { id: 'PlaceNotiLayer', style: { 'transform': 'scale(' + this.props.mapZoom + ')' } },
                React.createElement(
                    'div',
                    { id: 'PlaceNoti', style: { top: top + '%', left: left + '%', 'transform': 'scale(' + 1 / this.props.mapZoom + ')' }, onClick: function onClick(e) {
                            return e.stopPropagation();
                        } },
                    React.createElement('img', { src: node[this.props.node].img }),
                    React.createElement(
                        'div',
                        { id: 'PlaceNotiInfo' },
                        React.createElement(
                            'h3',
                            null,
                            React.createElement(
                                'span',
                                null,
                                node[this.props.node].alias
                            )
                        ),
                        React.createElement(
                            'p',
                            null,
                            linkNode
                        )
                    )
                )
            );
        }
    }]);

    return PlaceNoti;
}(React.Component);