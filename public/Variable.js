var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var PriorityQueue = function () {
    // 여러 메서드를 정의할 수 있음
    function PriorityQueue() {
        _classCallCheck(this, PriorityQueue);

        this.queue = [];
    }

    _createClass(PriorityQueue, [{
        key: 'enQueue',
        value: function enQueue(element) {
            // let element = {value,order}
            if (this.queue.length == 0) {
                this.queue.push(element);
                return;
            }
            for (var index = 0; index < this.queue.length; index++) {
                if (this.queue[index].order > element.order) {

                    this.queue.splice(index, 0, element);
                    return;
                }
            }
            this.queue.push(element);
        }
    }, {
        key: 'deQueue',
        value: function deQueue() {
            if (this.queue.length === 0) {
                return new Error("우선순위 큐에 데이터가 없습니다.");
            }

            return this.queue.shift();
        }
    }, {
        key: 'len',
        value: function len() {
            return this.queue.length;
        }
    }, {
        key: 'show',
        value: function show() {
            console.log(this.queue);
        }
    }]);

    return PriorityQueue;
}();

var node = [{
    num: 0,
    alias: '더미',
    type: 'Entrance',
    link: [],
    lat: null,
    lot: null
}, {
    num: 1,
    alias: '후문입구',
    type: 'Entrance',
    link: [{ vertex: 39, dist: 1 }],
    lat: 37.60944216173564,
    lot: 126.93302334590223,
    summary: '서울혁신파크의 후문'
}, {
    num: 2,
    alias: '불광역입구',
    type: 'Entrance',
    link: [{ vertex: 42, dist: 1 }],
    lat: 37.60842190983727,
    lot: 126.9318431243127,
    summary: '녹번파출소 방향 출구, 한평책빵 옆.'
}, {
    num: 3,
    alias: '쪽문입구',
    type: 'Entrance',
    link: [{ vertex: 34, dist: 1 }],
    lat: 37.60959109025191,
    lot: 126.93459659513226,
    summary: '북쪽 입구, 진홍로 주변'
}, {
    num: 4,
    alias: '50+입구',
    type: 'Entrance',
    link: [{ vertex: 45, dist: 1 }],
    lat: 37.60711174492423,
    lot: 126.93399178996386,
    summary: '50+앞의 주차장 입구'
}, {
    num: 5,
    alias: '민노총본부입구',
    type: 'Entrance',
    link: [{ vertex: 43, dist: 1 }],
    lat: 37.60789156293,
    lot: 126.93239936191706,
    summary: '민노총 건물 옆의 셋길'
}, {
    num: 6,
    alias: '정문입구',
    type: 'Entrance',
    link: [{ vertex: 30, dist: 1 }],
    lat: 37.607269321326264,
    lot: 126.93294688160951,
    summary: '서울혁신파크의 정문'
}, {
    num: 7,
    alias: '추가입구',
    type: 'Entrance',
    link: [],
    lat: null,
    lot: null
}, {
    num: 8,
    alias: '추가입구',
    type: 'Entrance',
    link: [],
    lat: null,
    lot: null
}, {
    num: 9,
    alias: '추가입구',
    type: 'Entrance',
    link: [],
    lat: null,
    lot: null
}, {
    num: 10,
    alias: 'SeMA창고',
    type: 'Building',
    link: [],
    lat: 37.609319784458094,
    lot: 126.93437017547136,
    summary: '질병관리본부 시절 실험에 필요한 약물들을 보관하던 시약 창고로 쓰였습니다. 시약창고 선반과 목조 구조물 등 역사와 흔적을 최대한 보존하는 방식으로 리모델링하여 예술이 살아 숨 쉬는 전시공간으로 활용하고 있습니다.',
    intro: '질병관리본부 시절 실험에 필요한 약물들을 보관하던 시약 창고로 쓰였습니다. 시약창고 선반과 목조 구조물 등 역사와 흔적을 최대한 보존하는 방식으로 리모델링하여 예술이 살아 숨 쉬는 전시공간으로 활용하고 있습니다.',
    infoHTML: null,
    img: 'https://www.innovationpark.kr/wp-content/uploads/2020/03/파크아카이빙혁신파크_SeMA1-scaled.jpg',
    group: null
}, {
    num: 11,
    alias: '공유동',
    type: 'Building',
    link: [],
    lat: 37.607957995285346,
    lot: 126.93485411682077,
    summary: '공유와 나눔의 가치를 생산하고 확산하는 공간입니다. 공용작업장, 공유창고 등의 공간과 중간지원조직이 입주해 있습니다.',
    intro: '공유와 나눔의 가치를 생산하고 확산하는 공간입니다. 공용작업장, 공유창고 등의 공간과 중간지원조직이 입주해 있습니다.',
    infoHTML: React.createElement(
        'div',
        null,
        React.createElement(
            'h3',
            { className: 'minititle' },
            ' ',
            React.createElement('span', { className: 'titleHeader' }),
            ' \uCE35\uBCC4\uC548\uB0B4 '
        ),
        React.createElement(
            'ul',
            null,
            React.createElement(
                'li',
                null,
                '1F \uACF5\uC720\uCC3D\uACE0'
            ),
            React.createElement(
                'li',
                null,
                '2F \uACF5\uC6A9\uC791\uC5C5\uC7A5 / \uB2E4\uBAA9\uC801\uD640 '
            ),
            React.createElement(
                'li',
                null,
                '3F~5F \uD06C\uB9AC\uD0A8\uB514\uC13C\uD130 '
            ),
            React.createElement(
                'li',
                null,
                '6F \uC11C\uC6B8\uC2DC\uC131\uD3C9\uB4F1\uD65C\uB3D9\uC9C0\uC6D0\uC13C\uD130 '
            ),
            React.createElement(
                'li',
                null,
                'RF \uC625\uC0C1\uACF5\uC720\uC9C0 '
            )
        )
    ),
    img: 'https://www.innovationpark.kr/wp-content/uploads/2020/03/파크아카이빙혁신파크_공유동2-scaled.jpg',
    group: null

},
// 비정확
{
    num: 12,
    alias: '극장동',
    type: 'Building',
    link: [],
    lat: 37.60915805917087,
    lot: 126.93259706409312,
    summary: '시민 대상의 대중문화 공동 작업장',
    intro: '시민 대상의 대중문화 공동 작업장',
    infoHTML: React.createElement(
        'div',
        null,
        React.createElement(
            'h3',
            { className: 'minititle' },
            ' ',
            React.createElement('span', { className: 'titleHeader' }),
            ' \uCE35\uBCC4\uC548\uB0B4 '
        ),
        React.createElement(
            'ul',
            null,
            React.createElement(
                'li',
                null,
                '1F \uB300\uAC15\uB2F9'
            ),
            React.createElement(
                'li',
                null,
                '2F \uC6CC\uD06C\uC20D\uB8F8'
            )
        )
    ),
    img: 'https://www.innovationpark.kr/wp-content/uploads/2020/03/파크아카이빙혁신파크_극장동3-scaled.jpg',

    group: null
}, {
    num: 13,
    alias: '맛동',
    type: 'Building',
    link: [],
    lat: 37.609192906419956,
    lot: 126.93324035592897,
    summary: '서울시식생활종합지원센터에서 운영하는 식문화 실험 공간',
    intro: '식문화의 새로운 패러다임을 고민하는 공간입니다. 다양한 식재료에 담긴 가치와 바른 식생활 정보를 시민과 나눕니다.',
    infoHTML: React.createElement(
        'div',
        null,
        React.createElement(
            'h3',
            { className: 'minititle' },
            ' ',
            React.createElement('span', { className: 'titleHeader' }),
            ' \uCE35\uBCC4\uC548\uB0B4 '
        ),
        React.createElement(
            'ul',
            null,
            React.createElement(
                'li',
                null,
                '1F~2F \uC8FC\uBC29 / \uC6CC\uD06C\uC20D\uB8F8 ',
                React.createElement(
                    'small',
                    null,
                    '(\uC11C\uC6B8\uC2DC \uC2DD\uC0DD\uD65C\uC885\uD569\uC9C0\uC6D0\uC13C\uD130 \uC6B4\uC601)'
                )
            )
        )
    ),
    img: 'https://www.innovationpark.kr/wp-content/uploads/2020/03/파크아카이빙혁신파크_맛동4-scaled.jpg'

}, {
    num: 14,
    alias: '목공동',
    type: 'Building',
    link: [],
    lat: 37.6093757914488,
    lot: 126.934062628268,
    summary: '전문 장비와 전문가가 상주하는 목공 작업장',
    intro: '',
    infoHTML: React.createElement(
        'div',
        null,
        React.createElement(
            'h3',
            { className: 'minititle' },
            ' ',
            React.createElement('span', { className: 'titleHeader' }),
            ' \uC6B4\uC601\uC2DC\uAC04 '
        ),
        React.createElement(
            'ul',
            null,
            React.createElement(
                'li',
                null,
                '\uC6D4\uC694\uC77C~\uAE08\uC694\uC77C \uC624\uC804 9\uC2DC~ \uC624\uD6C4 6\uC2DC'
            ),
            React.createElement(
                'li',
                null,
                '\uC57C\uAC04 \uC774\uC6A9: \uB9E4\uC6D4 \uB450 \uBC88\uC9F8 / \uB124 \uBC88\uC9F8 \uD654\uC694\uC77C \uC800\uB141 19\uC2DC~22\uC2DC'
            ),
            React.createElement(
                'li',
                null,
                '\uC8FC\uB9D0 \uACF5\uD734\uC77C \uD734\uBB34'
            ),
            React.createElement(
                'li',
                null,
                '*\uB9E4\uC6D4 \uB450 \uBC88\uC9F8 \uC218\uC694\uC77C 14\uC2DC\uAE4C\uC9C0 \uC6B4\uC601'
            )
        )
    ),
    img: 'https://www.innovationpark.kr/wp-content/uploads/2020/03/파크아카이빙혁신파크_우드파크2-scaled.jpg'

}, {
    num: 15,
    alias: '미래청',
    type: 'Building',
    link: [],
    lat: 37.608588150937656,
    lot: 126.93376609414261,
    summary: '서울시 지원조직 및 혁신가 입주 공간',
    intro: '다양한 혁신가 그룹과 중간지원조직이 입주해 활동하는 공간입니다. 1~2층은 카페와 오픈스페이스를 마련해 시민 누구나 편안하게 쉬거나 담소를 나눌 수 있습니다',
    infoHTML: React.createElement(
        'div',
        null,
        React.createElement(
            'h3',
            { className: 'minititle' },
            ' ',
            React.createElement('span', { className: 'titleHeader' }),
            ' \uCE35\uBCC4\uC548\uB0B4 '
        ),
        React.createElement(
            'ul',
            null,
            React.createElement(
                'li',
                null,
                '1F \uB2E4\uBAA9\uC801\uD640 \u2018\uD65C\uB825\u2019 / \uC138\uBBF8\uB098\uC2E4 / \uCC3D\uBB38\uCE74\uD398 / \uC11C\uB85C\uBC30\uC6C0\uD130 / \uC11C\uB85C\uBC30\uC6C0\uD130\uD1B5\uD569 / \uC2A4\uD398\uC774\uC2A4\uB958'
            ),
            React.createElement(
                'li',
                null,
                '2F \uC791\uC740\uC774\uC57C\uAE30\uBC29 / \uD070\uC774\uC57C\uAE30\uBC29 / \uBAA8\uB450\uBAA8\uC784\uBC29 / \uC624\uD508\uC2A4\uD398\uC774\uC2A4 / \uC6B4\uB3D9\uBC29 / \uB179\uC74C\uBC29 / \uC625\uC0C1\uACF5\uC720\uC9C0 '
            ),
            React.createElement(
                'li',
                null,
                '3F~6F \uC785\uC8FC\uC0AC \uC0AC\uBB34\uC2E4 '
            ),
            React.createElement(
                'li',
                null,
                '5F \uC625\uC0C1\uACF5\uC720\uC9C0 '
            )
        ),
        React.createElement(
            'h3',
            { className: 'minititle' },
            ' ',
            React.createElement('span', { className: 'titleHeader' }),
            ' \uB300\uAD00\uC548\uB0B4 '
        ),
        React.createElement(
            'ul',
            null,
            React.createElement(
                'li',
                null,
                '1F \uB2E4\uBAA9\uC801\uD640 \u2018\uD65C\uB825\u2019 / \uC138\uBBF8\uB098\uC2E4 / \uCC3D\uBB38\uCE74\uD398 \uB300\uAD00 :  '
            ),
            React.createElement(
                'li',
                null,
                ' 1F \uC11C\uB85C\uBC30\uC6C0\uD1301 / \uC11C\uB85C\uBC30\uC6C0\uD1302 / \uC11C\uB85C\uBC30\uC6C0\uD130\uD1B5\uD569 / \uC2A4\uD398\uC774\uC2A4\uB958 \uB300\uAD00 :  '
            ),
            React.createElement(
                'li',
                null,
                '2F \uC791\uC740\uC774\uC57C\uAE30\uBC29 1~5 / \uD070\uC774\uC57C\uAE30\uBC29 1~2 / \uBAA8\uB450\uBAA8\uC784\uBC29 1~2 / \uC624\uD508\uC2A4\uD398\uC774\uC2A4 / \uC6B4\uB3D9\uBC29 / \uB179\uC74C\uBC29  \uB300\uAD00 : '
            )
        )
    ),
    img: 'https://www.innovationpark.kr/wp-content/uploads/2020/03/파크아카이빙혁신파크_미래청5-scaled.jpg'
}, {
    num: 16,
    alias: '상상청',
    type: 'Building',
    link: [],
    lat: 37.60850421375721,
    lot: 126.9350328022683,
    summary: '혁신가 입주 및 다목적 실험 공간',
    intro: '수 천 가지 상상을 현실로 만드는 실천의 공간입니다. 다양한 혁신단체들의 개별·코워킹 사무실로 쓰이며 시민을 위한 카페와 전시체험공간을 갖추어 편하게 담소를 나누거나 문화 체험을 즐길 수 있습니다.',
    infoHTML: React.createElement(
        'div',
        null,
        React.createElement(
            'h3',
            { className: 'minititle' },
            ' ',
            React.createElement('span', { className: 'titleHeader' }),
            ' \uCE35\uBCC4\uC548\uB0B4 '
        ),
        React.createElement(
            'ul',
            null,
            React.createElement(
                'li',
                null,
                '1F \uC804\uC2DC\uCCB4\uD5D8\uACF5\uAC04 / \uB85C\uBE44 / \uC0C1\uC0C1\uC624\uB9841(\uC5F4\uB9B0 \uBB34\uB300)'
            ),
            React.createElement(
                'li',
                null,
                '2F \uAE00\uB85C\uBC8C \uCF54\uC6CC\uD0B9\uC874 / \uC0C1\uC0C1\uC758\uC232(\uAD50\uC721\uC7A5) / \uC0C1\uC0C1\uC774\uC0C11~5(\uD68C\uC758\uC2E4) / \uC0C1\uC0C1\uC624\uB9842(\uC5F4\uB9B0 \uBB34\uB300) '
            ),
            React.createElement(
                'li',
                null,
                '3F \uC0AC\uD68C\uD601\uC2E0 \uD504\uB85C\uC81D\uD2B8\uC874 / \uC624\uD508\uC2A4\uD398\uC774\uC2A4 '
            ),
            React.createElement(
                'li',
                null,
                '4F \uC0AC\uD68C\uD601\uC2E0 \uD504\uB85C\uC81D\uD2B8\uC874 / \uC0C1\uC0C1\uD050\uBE0C1~4(\uD68C\uC758\uC2E4) / \uC624\uD508\uC2A4\uD398\uC774\uC2A4 / \uC625\uC0C1\uACF5\uC720\uC9C0 '
            ),
            React.createElement(
                'li',
                null,
                '5F \uC544\uD2B8\uC5C5\uC11C\uC6B8 / \uC625\uC0C1\uACF5\uC720\uC9C0 '
            )
        )
    ),
    img: 'https://www.innovationpark.kr/wp-content/uploads/2020/03/파크아카이빙혁신파크_상상청1-scaled.jpg'
}, {
    num: 17,
    alias: '서울기록원',
    type: 'Building',
    link: [],
    lat: 37.60757102061909,
    lot: 126.93459736168829,
    summary: '시정·시민 기록을 수집, 기록의 가치를 공유하는 공간',
    intro: '시민과 함께 기록의 가치를 공유하고자 건립된 서울의 기록관리 전문기',
    infoHTML: React.createElement(
        'div',
        null,
        React.createElement(
            'h3',
            { className: 'minititle' },
            ' ',
            React.createElement('span', { className: 'titleHeader' }),
            ' \uCE35\uBCC4\uC548\uB0B4 '
        ),
        React.createElement(
            'ul',
            null,
            React.createElement(
                'li',
                null,
                '1F \uBE44\uC9C0\uD130 \uC13C\uD130'
            ),
            React.createElement(
                'li',
                null,
                '2F \uAE30\uB85D \uC5F4\uB78C\uC2E4 / \uAE30\uB85D \uC804\uC2DC\uC2E4 / \uC544\uCE74\uC774\uBE0C \uC0F5'
            ),
            React.createElement(
                'li',
                null,
                '3F \uC11C\uACE0 / \uC11C\uC6B8\uAE30\uB85D\uC6D0 \uC0AC\uBB34\uC2E4'
            )
        )
    ),
    img: 'https://www.innovationpark.kr/wp-content/uploads/2020/03/파크아카이빙혁신파크_서울기록원2-scaled.jpg'
}, {
    num: 18,
    alias: '50+서부캠퍼스',
    type: 'Building',
    link: [],
    lat: 37.60726430880799,
    lot: 126.93437210843615,
    summary: '50+세대의 인생 재설계 지원 공간',
    intro: '청년과 시니어라면 누구나 목소리를 낼 수 있는 세대공간 \n 함께 배우고, 스스로 만들어 가는 50+세대(50~64세)를 위한 공간입니다. 서울50플러스재단이 운영하고 있으며 다양한 모임과 학습이 가능한 시설이 조성되어 있습니다',
    infoHTML: React.createElement(
        'div',
        null,
        React.createElement(
            'h3',
            { className: 'minititle' },
            ' ',
            React.createElement('span', { className: 'titleHeader' }),
            ' \uCE35\uBCC4\uC548\uB0B4 '
        ),
        React.createElement(
            'ul',
            null,
            React.createElement(
                'li',
                null,
                '1F 50+\uCE74\uD398'
            ),
            React.createElement(
                'li',
                null,
                '2F '
            ),
            React.createElement(
                'li',
                null,
                '3F '
            )
        )
    ),
    img: 'https://www.innovationpark.kr/wp-content/uploads/2020/03/파크아카이빙혁신파크_오십플러스1-scaled.jpg'
}, {
    num: 19,
    alias: '야외공간',
    type: 'Building',
    link: [],
    lat: 37.60806697542989,
    lot: 126.93332234337605,
    summary: '다채로운 혁신 활동이 움트고 자라나는 공간',
    intro: '다채로운 혁신 활동이 움트고 자라나는 야외공간',
    infoHTML: React.createElement(
        'div',
        null,
        React.createElement(
            'h3',
            { className: 'minititle' },
            ' ',
            React.createElement('span', { className: 'titleHeader' }),
            ' \uCE35\uBCC4\uC548\uB0B4 '
        ),
        React.createElement(
            'ul',
            null,
            React.createElement(
                'li',
                null,
                '\uD601\uC2E0\uAD11\uC7A5 '
            ),
            React.createElement(
                'li',
                null,
                '\uD53C\uC544\uB178\uC232'
            ),
            React.createElement(
                'li',
                null,
                '\uC804\uBD07\uB300\uC9D1'
            )
        ),
        React.createElement(
            'p',
            null,
            '\uB300\uAD00\uC744 \uD558\uC2E0\uD6C4 \uB2E4\uC591\uD55C \uD589\uC0AC\uB97C \uC9C4\uD589\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.'
        )
    ),
    img: 'https://www.innovationpark.kr/wp-content/uploads/2020/03/파크아카이빙혁신파크_야외공간6-scaled.jpg'
}, {
    num: 20,
    alias: '연결동',
    type: 'Building',
    link: [],
    lat: 37.60831486600527,
    lot: 126.93448426849724,
    summary: '시민과 혁신가의 만남 공간',
    intro: '시민과 혁신가의 만남 공간',
    infoHTML: React.createElement(
        'div',
        null,
        React.createElement(
            'h3',
            { className: 'minititle' },
            ' ',
            React.createElement('span', { className: 'titleHeader' }),
            ' \uCE35\uBCC4\uC548\uB0B4 '
        ),
        React.createElement(
            'ul',
            null,
            React.createElement(
                'li',
                null,
                '2F \uB290\uD2F0\uB098\uBB34\uD640 / \uC0C1\uC0C1\uB9C8\uB8E8(\uD68C\uC758\uC2E4) '
            ),
            React.createElement(
                'li',
                null,
                'RF \uC625\uC0C1\uACF5\uC720\uC9C0'
            )
        )
    ),
    img: 'https://www.innovationpark.kr/wp-content/uploads/2020/03/파크아카이빙혁신파크_연결동2-scaled.jpg'
}, {
    num: 21,
    alias: '연수동',
    type: 'Building',
    link: [],
    lat: 37.60882518475889,
    lot: 126.93472502865448,
    summary: '혁신가들의 실험과 휴식이 있는 소셜 커뮤니티 호스텔',
    intro: '다양한 혁신가들의 실험과 휴식이 있는 소셜 커뮤니티 호스텔입니다. 유의미한 경험이 일어나는 숙박·연수·커뮤니티 공간으로, 소셜 섹터를 포함한 여러 분야의 파트너와 함께 즐거운 공간 실험을 지속합니다.',
    infoHTML: React.createElement(
        'div',
        null,
        React.createElement(
            'h3',
            { className: 'minititle' },
            ' ',
            React.createElement('span', { className: 'titleHeader' }),
            ' \uC911\uC694\uC0AC\uD56D '
        ),
        React.createElement(
            'b',
            null,
            '\uC11C\uC6B8\uD601\uC2E0\uD30C\uD06C \uC5F0\uC218\uB3D9\uC740 \uC548\uC804\uD558\uACE0 \uD3B8\uC548\uD55C \uC2DC\uC124 \uC81C\uACF5\uC744 \uC704\uD574 \uAC74\uBB3C\uBCF4\uC218\uB97C \uC9C4\uD589\uD569\uB2C8\uB2E4. \uD574\uB2F9 \uAE30\uAC04 \uB3D9\uC548 \uC5F0\uC218\uB3D9 \uC774\uC6A9\uC774 \uBD88\uAC00\uD558\uC624\uBA70, \uC11C\uC6B8\uD601\uC2E0\uD30C\uD06C \uD648\uD398\uC774\uC9C0 \uBC0F SNS \uCC44\uB110\uC744 \uD1B5\uD574 \uC6B4\uC601\uAC1C\uC2DC\uC77C\uC790\uB97C \uACF5\uC9C0\uD560 \uC608\uC815\uC774\uC624\uB2C8 \uC774\uC6A9\uC5D0 \uCC38\uACE0\uBC14\uB78D\uB2C8\uB2E4.'
        ),
        React.createElement(
            'h3',
            { className: 'minititle' },
            ' ',
            React.createElement('span', { className: 'titleHeader' }),
            ' \uCE35\uBCC4\uC548\uB0B4 '
        ),
        React.createElement(
            'ul',
            null,
            React.createElement(
                'li',
                null,
                '1F \uC18C\uC15C\uB2E4\uC774\uB2DD\uB8F8 / \uC138\uD0C1\uC2E4 / \uC138\uBBF8\uB098\uC2E4 '
            ),
            React.createElement(
                'li',
                null,
                '2F 1~2\uC778\uC6A9 \uAC1D\uC2E4 / 3~4\uC778\uC6A9 \uAC1D\uC2E4'
            ),
            React.createElement(
                'li',
                null,
                '3F 1~2\uC778\uC6A9 \uAC1D\uC2E4 / 3~4\uC778\uC6A9 \uAC1D\uC2E4 / 7~8\uC778\uC6A9 \uC628\uB3CC\uBC29'
            ),
            React.createElement(
                'li',
                null,
                'RF \uC625\uC0C1\uACF5\uC720\uC9C0'
            )
        )
    ),
    img: 'https://www.innovationpark.kr/wp-content/uploads/2020/03/파크아카이빙혁신파크_연수동2-scaled.jpg'
}, {
    num: 22,
    alias: '예술동',
    type: 'Building',
    link: [],
    lat: 37.60925226850322,
    lot: 126.9329198987966,
    summary: '예술실험공간',
    intro: '폐수처리장으로 사용되었던 건물로 옛 시설을 활용한 문화예술 작업과 다양한 장르의 융합 및 협업을 통한 예술 실험을 하는 공간',
    infoHTML: React.createElement(
        'div',
        null,
        React.createElement(
            'h3',
            { className: 'minititle' },
            ' ',
            React.createElement('span', { className: 'titleHeader' }),
            ' \uCE35\uBCC4\uC548\uB0B4 '
        ),
        React.createElement(
            'ul',
            null,
            React.createElement(
                'li',
                null,
                '1F~2F (\uAD6C)\uD3D0\uC218\uCC98\uB9AC\uC2DC\uC124'
            ),
            React.createElement(
                'li',
                null,
                '3F \uC804\uC2DC\uACF5\uAC04 / \uC138\uB77C\uBBF9 \uC791\uC5C5\uACF5\uAC04'
            )
        )
    ),
    img: 'https://www.innovationpark.kr/wp-content/uploads/2020/03/파크아카이빙혁신파크_예술동1-scaled.jpg'
}, {
    num: 23,
    alias: '재생동',
    type: 'Building',
    link: [],
    lat: 37.60880180460156,
    lot: 126.93216888128909,
    summary: '버려진 자원의 재사용을 모색하는 활동 공간',
    intro: '장난감, 현수막, 피아노처럼 버려지는 자원을 활용해 새로운 쓰임을 모색하는 활동이 다양하게 펼쳐지는 곳입니다.',
    infoHTML: null,
    img: 'https://www.innovationpark.kr/wp-content/uploads/2020/03/파크아카이빙혁신파크_재생동2-scaled.jpg'
}, {
    num: 24,
    alias: '제작동',
    type: 'Building',
    link: [],
    lat: 37.60923740213418,
    lot: 126.93348316376975,
    summary: '지식과 기술을 공유하며 일상을 유쾌하게 만드는 사람들의 공간입니다.',
    intro: '지식과 기술을 공유하며 일상을 유쾌하게 만드는 사람들의 공간입니다. 3D 프린터, 레이저커터 등 디지털 장비로 시제품과 일상에 필요한 제작물을 직접 만들어볼 수 있는 서울이노베이션팹랩, 자연에너지와 주변 자원을 활용해 누구나 배울 수 있는 적정기술로 대안의 삶을 실현하는 적정기술랩이 함께 있습니다.',
    infoHTML: React.createElement(
        'div',
        null,
        React.createElement(
            'h3',
            { className: 'minititle' },
            ' ',
            React.createElement('span', { className: 'titleHeader' }),
            ' \uCE35\uBCC4\uC548\uB0B4 '
        ),
        React.createElement(
            'ul',
            null,
            React.createElement(
                'li',
                null,
                '1F \uC11C\uC6B8\uC774\uB178\uBCA0\uC774\uC158\uD339\uB7A9'
            ),
            React.createElement(
                'li',
                null,
                '2F \uC801\uC815\uAE30\uC220\uB7A9'
            )
        ),
        React.createElement(
            'h3',
            { className: 'minititle' },
            ' ',
            React.createElement('span', { className: 'titleHeader' }),
            ' \uBB38\uC758\uC548\uB0B4 '
        ),
        React.createElement(
            'ul',
            null,
            React.createElement(
                'li',
                null,
                '\uC804\uD654 : ',
                React.createElement(
                    'a',
                    { href: 'tel:02-6365-6835' },
                    '02-6365-6835'
                )
            ),
            React.createElement(
                'li',
                null,
                '\uC774\uBA54\uC77C : ',
                React.createElement(
                    'a',
                    { href: 'mailto:fablab@innovationpark.kr' },
                    'fablab@innovationpark.kr'
                ),
                ' '
            ),
            React.createElement(
                'li',
                null,
                '\uD398\uC774\uC2A4\uBD81 : ',
                React.createElement(
                    'a',
                    { href: 'www.facebook.com/makerpark19' },
                    'www.facebook.com/makerpark19'
                )
            ),
            React.createElement(
                'li',
                null,
                '\uC778\uC2A4\uD0C0\uADF8\uB7A8 : ',
                React.createElement(
                    'a',
                    { href: 'http://instagram.com/innovationfablab' },
                    'http://instagram.com/innovationfablab'
                )
            ),
            React.createElement(
                'li',
                null,
                '\uC11C\uC6B8\uC774\uB178\uBCA0\uC774\uC158\uD339\uB7A9 \uD648\uD398\uC774\uC9C0 : ',
                React.createElement(
                    'a',
                    { href: 'https://www.innofablab.kr/' },
                    'https://www.innofablab.kr/'
                )
            )
        )
    ),
    img: 'https://www.innovationpark.kr/wp-content/uploads/2020/03/파크아카이빙혁신파크_제작동1-scaled.jpg'
}, {
    num: 25,
    alias: '참여동',
    type: 'Building',
    link: [],
    lat: 37.60744615418906,
    lot: 126.93375674838013,
    summary: '서울시 지원조직 및 시민 편의 공간',
    intro: '서울시 지원조직 및 시민 편의 공간',
    infoHTML: React.createElement(
        'div',
        null,
        React.createElement(
            'h3',
            { className: 'minititle' },
            ' ',
            React.createElement('span', { className: 'titleHeader' }),
            ' \uCE35\uBCC4\uC548\uB0B4 '
        ),
        React.createElement(
            'ul',
            null,
            React.createElement(
                'li',
                null,
                '1F \uC2DC\uC124\uAD00\uB9AC\uC2E4 / \uC6B0\uCCB4\uAD6D / \uAC74\uAC15\uD601\uC2E0\uC0B4\uB9BC\uC758\uC6D0 / \uB354\uC2A4\uB9C8\uC77C\uCE58\uACFC\uC758\uC6D0'
            ),
            React.createElement(
                'li',
                null,
                '2F \uB2E4\uBAA9\uC801\uC2E4 / \uC11C\uC6B8\uC2DC\uCCAD\uB144\uD65C\uB3D9\uC9C0\uC6D0\uC13C\uD130 / \uCE7C\uD3F4\uB77C\uB2C8 \uC0AC\uD68C\uACBD\uC81C\uC5F0\uAD6C\uC18C / \uB85C\uC26C\uCF54\uB9AC\uC544'
            ),
            React.createElement(
                'li',
                null,
                '3F \uC11C\uC6B8\uC2DC\uB9BD\uC740\uD3C9\uCCAD\uC18C\uB144\uC131\uBB38\uD654\uC13C\uD130 / \uC624\uB514\uC138\uC774\uD559\uAD50'
            )
        )
    ),
    img: 'https://www.innovationpark.kr/wp-content/uploads/2020/03/파크아카이빙혁신파크_참여동2-scaled.jpg'
}, {
    num: 26,
    alias: '청년청',
    type: 'Building',
    link: [],
    lat: 37.60876781371208,
    lot: 126.93272141086058,
    summary: '청년들이 다양한 실험과 시도를 통해 경험을 축적하는 공간',
    intro: '서울시 지원조직 및 시민 편의 공간',
    infoHTML: React.createElement(
        'div',
        null,
        React.createElement(
            'h3',
            { className: 'minititle' },
            ' ',
            React.createElement('span', { className: 'titleHeader' }),
            ' \uCE35\uBCC4\uC548\uB0B4 '
        ),
        React.createElement(
            'ul',
            null,
            React.createElement(
                'li',
                null,
                '1F \uC2DC\uC124\uAD00\uB9AC\uC2E4 / \uC6B0\uCCB4\uAD6D / \uAC74\uAC15\uD601\uC2E0\uC0B4\uB9BC\uC758\uC6D0'
            ),
            React.createElement(
                'li',
                null,
                '2F \uB2E4\uBAA9\uC801\uC2E4 / \uC11C\uC6B8\uC2DC \uC11C\uBD81\uAD8C\uC9C1\uC7A5\uB9D8\uC9C0\uC6D0\uC13C\uD130 / \uC11C\uC6B8\uC2DC\uCCAD\uB144\uD65C\uB3D9\uC9C0\uC6D0\uC13C\uD130 / \uCE7C\uD3F4\uB77C\uB2C8 \uC0AC\uD68C\uACBD\uC81C\uC5F0\uAD6C\uC18C'
            ),
            React.createElement(
                'li',
                null,
                '3F \uC11C\uC6B8\uD06C\uB9AC\uC5D0\uC774\uD2F0\uBE0C\uB7A9 / \uC624\uB514\uC138\uC774\uD559\uAD50'
            )
        )
    ),
    img: 'https://www.innovationpark.kr/wp-content/uploads/2020/03/파크아카이빙혁신파크_청년청3-scaled.jpg'
}, {
    num: 27,
    alias: '홍보관',
    type: 'Building',
    link: [],
    lat: 37.60795399540395,
    lot: 126.93422076809068,
    summary: '서울혁신파크 홍보 및 안내 공간',
    intro: '서울혁신파크 홍보 및 안내 공간',
    infoHTML: null,
    img: 'https://www.innovationpark.kr/wp-content/uploads/2020/03/파크아카이빙혁신파크052_홍보관1-scaled.jpg'
}, {
    num: 28,
    alias: '피아노숲',
    type: 'Building',
    link: [],
    lat: 37.60767139221308,
    lot: 126.93324981304163,
    summary: '',
    intro: '',
    infoHTML: null,
    img: 'https://www.innovationpark.kr/wp-content/uploads/2020/07/5%EC%A3%BC%EB%85%84BA%ED%94%BC%EC%95%84%EB%85%B8%EC%88%B202.jpg'
}, {
    num: 29,
    alias: '추가건물',
    type: null,
    link: [],
    lat: null,
    lot: null,
    summary: '',
    intro: '',
    infoHTML: null
}, {
    num: 30,
    alias: '정문앞길',
    type: 'Node',
    link: [{ vertex: 31, dist: 1 }, { vertex: 44, dist: 1 }, { vertex: 28, dist: 1 }, { vertex: 0, dist: 1 }],
    lat: 37.60739728573696,
    lot: 126.9331586196691
}, {
    num: 31,
    alias: '우체국앞삼거리',
    type: 'Node',
    link: [{ vertex: 30, dist: 1 }, { vertex: 32, dist: 1 }, { vertex: 44, dist: 1 }, { vertex: 45, dist: 1 }, { vertex: 19, dist: 1 }, { vertex: 25, dist: 1 }, { vertex: 28, dist: 1 }],
    lat: 37.607643769143216,
    lot: 126.9337165140005
}, {
    num: 32,
    alias: '혁신광장삼거리',
    type: 'Node',
    link: [{ vertex: 31, dist: 1 }, { vertex: 33, dist: 1 }, { vertex: 49, dist: 1 }, { vertex: 19, dist: 1 }, { vertex: 27, dist: 1 }],
    lat: 37.60804536561769,
    lot: 126.93393645582297
}, {
    num: 33,
    alias: '미래청정문앞',
    type: 'Node',
    link: [{ vertex: 32, dist: 1 }, { vertex: 34, dist: 1 }, { vertex: 15, dist: 1 }, { vertex: 15, dist: 1 }],
    lat: 37.608480746448805,
    lot: 126.9341803598243
}, {
    num: 34,
    alias: '창고앞삼거리',
    type: 'Node',
    link: [{ vertex: 35, dist: 1 }, { vertex: 33, dist: 1 }, { vertex: 60, dist: 1 }, { vertex: 51, dist: 1 }, { vertex: 21, dist: 1 }, { vertex: 3, dist: 1 }],
    lat: 37.60900345960884,
    lot: 126.93453709896487
}, {
    num: 35,
    alias: 'SeMA창고앞',
    type: 'Node',
    link: [{ vertex: 36, dist: 1 }, { vertex: 34, dist: 1 }, { vertex: 10, dist: 1 }],
    lat: 37.60911607404934,
    lot: 126.93419913534414
}, {
    num: 36,
    alias: '목공동앞',
    type: 'Node',
    link: [{ vertex: 37, dist: 1 }, { vertex: 35, dist: 1 }, { vertex: 47, dist: 1 }, { vertex: 14, dist: 1 }],
    lat: 37.60913094789519,
    lot: 126.93396309903648
}, {
    num: 37,
    alias: '제작동앞',
    type: 'Node',
    link: [{ vertex: 36, dist: 1 }, { vertex: 38, dist: 1 }, { vertex: 39, dist: 1 }, { vertex: 24, dist: 1 }],
    lat: 37.609073575979764,
    lot: 126.93355808252514
}, {
    num: 38,
    alias: '후문사거리',
    type: 'Node',
    link: [{ vertex: 39, dist: 1 }, { vertex: 40, dist: 1 }, { vertex: 37, dist: 1 }, { vertex: 48, dist: 1 }, { vertex: 13, dist: 1 }],
    lat: 37.609001328951166,
    lot: 126.93316647770618
}, {
    num: 39,
    alias: '예술동앞',
    type: 'Node',
    // link:[{vertex:22,dist:10,},{vertex:13,dist:10,},{vertex:38,dist:20,},{vertex:1,dist:27,},],
    link: [{ vertex: 38, dist: 1 }, { vertex: 1, dist: 1 }, { vertex: 22, dist: 1 }, { vertex: 13, dist: 1 }, { vertex: 12, dist: 1 }],
    lat: 37.60920913015019,
    lot: 126.93308960777496
}, {
    num: 40,
    alias: '청년청앞',
    type: 'Node',
    link: [{ vertex: 38, dist: 1 }, { vertex: 41, dist: 1 }, { vertex: 50, dist: 1 }, { vertex: 26, dist: 1 }],
    lat: 37.608667741282666,
    lot: 126.93292270812543
}, {
    num: 41,
    alias: '청년청삼거리',
    type: 'Node',
    link: [{ vertex: 43, dist: 1 }, { vertex: 42, dist: 1 }, { vertex: 40, dist: 1 }],
    lat: 37.6081932952329,
    lot: 126.9325763949662
}, {
    num: 42,
    alias: '한평책빵앞',
    type: 'Node',
    link: [{ vertex: 41, dist: 1 }, { vertex: 23, dist: 1 }, { vertex: 2, dist: 1 }],
    lat: 37.608565138650675,
    lot: 126.93223038544407
}, {
    num: 43,
    alias: '민노총본부앞',
    type: 'Node',
    link: [{ vertex: 44, dist: 1 }, { vertex: 41, dist: 1 }, { vertex: 5, dist: 1 }],
    lat: 37.60805730460387,
    lot: 126.93270513254174
}, {
    num: 44,
    alias: '피아노숲산책길입구',
    type: 'Node',
    link: [{ vertex: 30, dist: 1 }, { vertex: 31, dist: 1 }, { vertex: 43, dist: 1 }, { vertex: 49, dist: 1 }, { vertex: 28, dist: 1 }, { vertex: 19, dist: 1 }],
    lat: 37.60794256328353,
    lot: 126.93292775751615
}, {
    num: 45,
    alias: '50+주차장',
    type: 'Node',
    link: [{ vertex: 31, dist: 1 }, { vertex: 46, dist: 1 }, { vertex: 53, dist: 1 }, { vertex: 4, dist: 1 }],
    lat: 37.60745171954629,
    lot: 126.9341508419926
}, {
    num: 46,
    alias: '50+앞',
    type: 'Node',
    link: [{ vertex: 45, dist: 1 }, { vertex: 53, dist: 1 }, { vertex: 18, dist: 1 }],
    lat: 37.607296603487974,
    lot: 126.93430104344944
}, {
    num: 47,
    alias: '미래청후문',
    type: 'Node',
    link: [{ vertex: 36, dist: 1 }, { vertex: 48, dist: 1 }, { vertex: 15, dist: 1 }],
    lat: 37.60875213352221,
    lot: 126.93370828261739
}, {
    num: 48,
    alias: '미래청주차장',
    type: 'Node',
    link: [{ vertex: 38, dist: 1 }, { vertex: 47, dist: 1 }, { vertex: 50, dist: 1 }, { vertex: 15, dist: 1 }],
    lat: 37.608837127860845,
    lot: 126.93347492866995
}, {
    num: 49,
    alias: '혁신광장주차장길',
    type: 'Node',
    link: [{ vertex: 50, dist: 1 }, { vertex: 44, dist: 1 }, { vertex: 32, dist: 1 }, { vertex: 19, dist: 1 }],
    lat: 37.6083781258346,
    lot: 126.93315034090416
}, {
    num: 50,
    alias: '혁신광장주차장',
    type: 'Node',
    link: [{ vertex: 48, dist: 1 }, { vertex: 40, dist: 1 }, { vertex: 49, dist: 1 }],
    lat: 37.608524184755105,
    lot: 126.93325100048658
}, {
    num: 51,
    alias: '상상청앞광장',
    type: 'Node',
    link: [{ vertex: 33, dist: 1 }, { vertex: 34, dist: 1 }, { vertex: 52, dist: 1 }, { vertex: 60, dist: 1 }, { vertex: 16, dist: 1 }, { vertex: 21, dist: 1 }, { vertex: 20, dist: 1 }],
    lat: 37.60852788215142,
    lot: 126.9346301594023
}, {
    num: 52,
    alias: '공유동 계단아래',
    type: 'Node',
    link: [{ vertex: 51, dist: 1 }, { vertex: 55, dist: 1 }, { vertex: 58, dist: 1 }, { vertex: 11, dist: 1 }, { vertex: 20, dist: 1 }],
    lat: 37.6081794086154,
    lot: 126.93467843893991
}, {
    num: 53,
    alias: '50+옆길',
    type: 'Node',
    link: [{ vertex: 45, dist: 1 }, { vertex: 46, dist: 1 }, { vertex: 54, dist: 1 }],
    lat: 37.607388967434005,
    lot: 126.93442631488531
}, {
    num: 54,
    alias: '기록원앞',
    type: 'Node',
    link: [{ vertex: 17, dist: 1 }, { vertex: 53, dist: 1 }, { vertex: 55, dist: 1 }],
    lat: 37.60760145185315,
    lot: 126.93449605084456
}, {
    num: 55,
    alias: '기록원삼거리',
    type: 'Node',
    link: [{ vertex: 17, dist: 1 }, { vertex: 53, dist: 1 }, { vertex: 56, dist: 1 }, { vertex: 11, dist: 1 }],
    lat: 37.60788896760449,
    lot: 126.93462150417565
}, {
    num: 56,
    alias: '공유동뒷편',
    type: 'Node',
    link: [{ vertex: 55, dist: 1 }, { vertex: 57, dist: 1 }],
    lat: 37.60776485218328,
    lot: 126.93499813606469
}, {
    num: 57,
    alias: '공유동후문뒷편',
    type: 'Node',
    link: [{ vertex: 52, dist: 1 }, { vertex: 59, dist: 1 }, { vertex: 11, dist: 1 }],
    lat: 37.60797444652555,
    lot: 126.93515376354881
}, {
    num: 58,
    alias: '공유동후문앞',
    type: 'Node',
    link: [{ vertex: 57, dist: 1 }, { vertex: 59, dist: 1 }],
    lat: 37.60810451711958,
    lot: 126.93489758360907

}, {
    num: 59,
    alias: '상상청산길입구',
    type: 'Node',
    link: [{ vertex: 58, dist: 1 }, { vertex: 60, dist: 1 }],
    lat: 37.60877973497911,
    lot: 126.93539952800975
}, {
    num: 60,
    alias: '상상청주차장',
    type: 'Node',
    link: [{ vertex: 59, dist: 1 }, { vertex: 34, dist: 1 }, { vertex: 60, dist: 1 }],
    lat: 37.60896542061618,
    lot: 126.93513434933583
}];

// const OrganizationData = [

//     {
//         name : '예시',
//         building : '빌딩이름',
//         floor : 1,
//         roomNumber : '방번호',
//         mainIMG : '',
//         intro : '',
//         phone : '',
//         //email : '',
//         website : '',
//         //sns : '',
//         otherING : null,
//     }
// ]


var OrganizationData = [{ "name": "서울시 사회적경제지원센터", "building": "미래청", "floor": 1, "roomNumber": null, "mainIMG": "https://sehub.net/wp-content/themes/se/images/logo2018.png", "phone": "02-353-3553", "website": null, "intro": "서울시 사회적경제지원센터", "email": "" }, { "name": "서울시 청년허브", "building": "미래청", "floor": 1, "roomNumber": null, "mainIMG": "https://youthhub.kr/wp-content/uploads/2018/10/top_logo_3.png", "phone": "070-4432-6182\n02-6238-6900", "website": null, "intro": "서울시 청년허브", "email": "" }, { "name": "서울혁신센터", "building": "미래청", "floor": 2, "roomNumber": null, "mainIMG": null, "phone": "02-389-7512", "website": null, "intro": "지속가능한 사회를 위한 글로벌 혁신생산기지", "email": "hello@innovationpark.kr" }, { "name": "(주)미닝오브", "building": "미래청", "floor": 3, "roomNumber": "303A", "mainIMG": "http://meaningof.co.kr/wp-content/uploads/2020/12/footer-logo.png", "phone": "02-363-2759", "website": null, "intro": "여성 영화인과 협업하여 실버 세대를 위한 영상 자서전 콘텐츠 제작", "email": "official@meaningof.co.kr" }, { "name": "협동조합 은빛기획", "building": "미래청", "floor": 3, "roomNumber": "303B", "mainIMG": "http://www.mylifestory.kr/images/logo_top.png", "phone": "070-8770-5100", "website": null, "intro": "어르신들의 자서전 출간 / 생애사쓰기 글쓰기 교육 조문보 사업 / 추모영상 제작 등", "email": "silverplan@hanmail.net" }, { "name": "(주)트래블러스맵", "building": "미래청", "floor": 3, "roomNumber": "304", "mainIMG": null, "phone": "02-2068-2788", "website": null, "intro": "공정여행(관광)을 통한 지속가능한 지역사회 개발 Benefit Local, Protect Nature, Respect People", "email": "travelersmap@daum.net" }, { "name": "사단법인 유엔인권정책센터", "building": "미래청", "floor": 3, "roomNumber": "305", "mainIMG": "http://www.kocun.org/v1/images/common/top_logo.gif", "phone": "02-6287-1210", "website": null, "intro": "복지/인권", "email": "" }, { "name": "주식회사 세눈컴퍼니", "building": "미래청", "floor": 3, "roomNumber": "308", "mainIMG": "https://yt3.ggpht.com/ytc/AKedOLSkSZmjkuPluyffCT8Hrz8npWMdsuZvpAvGgwVq=s88-c-k-c0x00ffffff-no-rj", "phone": "070-4268-9965", "website": null, "intro": "은평형 “마을호텔” 프로젝트 <<북한산을 품은 은평마을호텔>>", "email": "mail@senoon.net" }, { "name": "대안교육연대", "building": "미래청", "floor": 3, "roomNumber": "309", "mainIMG": "https://scontent-ssn1-1.xx.fbcdn.net/v/t1.18169-9/539085_432717870148741_668256366_n.png?_nc_cat=105&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=4EunEnX9hCoAX9S2SOr&_nc_ht=scontent-ssn1-1.xx&oh=8fd2936f8eb8c4573a827099c9cff734&oe=61DBF5AD", "phone": "02-6358-0081~3", "website": null, "intro": "대안적인 삶과 교육의 사회적 실천", "email": "psae0590@daum.net" }, { "name": "사단법인 빅이슈코리아", "building": "미래청", "floor": 3, "roomNumber": ["313", "314", "315A"], "mainIMG": "https://s1.bigissue.kr/assets/bigissue/images/icon/logoHeader.png", "phone": "02-766-1115", "website": null, "intro": "홈리스 자립 일자리 마련 및 홈리스 인식개선 사업", "email": "info@bigissue.kr" }, { "name": "(주)파머스페이스", "building": "미래청", "floor": 3, "roomNumber": "315B", "mainIMG": "http://www.fspace.co.kr/image/logo_mb.png", "phone": "", "website": null, "intro": "국내 제 1호 못난이 농식품 거래 플랫폼을 운영 중으로 못난이 농산물의 판로개척에 어려움을 겪는 농가와 합리적인 가격의 농산물 구매를 원하는 식품 가공업체와 일반 소비자를 연결하고 있습니다. 현재 B2B 거래 플랫폼 ", "email": "farmerspace@fspace.co.kr" }, { "name": "사단법인 배리어프리 영화위원회", "building": "미래청", "floor": 3, "roomNumber": "315C", "mainIMG": "https://barrierfreefilms.or.kr/files/attach/images/177/d07a21d58e2244a1c20ff4a338c9c50d.png", "phone": "02-6238-3200", "website": null, "intro": "다양성 영화 기획, 상영, 장애인 지원 사업", "email": "barrierfreefilms@gmail.com" }, { "name": "고문헌연구회", "building": "미래청", "floor": 3, "roomNumber": "316", "mainIMG": null, "phone": "070-8795-8970", "website": null, "intro": "남북교류, 고문헌연구, 시민교육", "email": "unimemory1@gmail.com" }, { "name": "서울시 마을공동체 종합지원센터", "building": "미래청", "floor": 3, "roomNumber": ["317", "320"], "mainIMG": "http://www.seoulmaeul.org/bbs/images/logo.png", "phone": "02-385-2642", "website": null, "intro": "서울시마을공동체종합지원센터", "email": "" }, { "name": "(주)회의설계소", "building": "미래청", "floor": 3, "roomNumber": "318", "mainIMG": "https://cdn.imweb.me/thumbnail/20210719/e77982f071656.png", "phone": "", "website": null, "intro": "시민참여영역(참여예산, 도시재생, 마을, 협치, 청년 등) 퍼실리테이션 교육 및 용역사업(워크숍, 원탁토론 등) 진행", "email": "meetndeets@gmail.com" }, { "name": "유한회사 유아트랩서울", "building": "미래청", "floor": 3, "roomNumber": "319A", "mainIMG": "http://urbanartlab.org/wp-content/themes/uartlab/img/mainlogo.svg", "phone": "", "website": null, "intro": "문화/예술", "email": "info@uartlab.org" }, { "name": "(주)세상에 없는 세상", "building": "미래청", "floor": 3, "roomNumber": "319B", "mainIMG": "https://cdn.imweb.me/thumbnail/20211013/280b01e59e61b.png", "phone": "", "website": null, "intro": "환경 문제 전환 싹쓰리(친환경 유통 플랫폼, 폐자원 기반의 제품 재활용, 생분해 일회용 그릇 제작)", "email": "tour@onlytour.co.kr" }, { "name": "난민인권센터", "building": "미래청", "floor": 4, "roomNumber": "401A", "mainIMG": "https://blog.kakaocdn.net/dn/WPXrt/btqw7b5hKc5/mhyU1xEJkNYhVUXQn6RJz0/img.gif", "phone": "02-712-0620", "website": null, "intro": "국내 난민의 인권 상황 개선", "email": "refucenter@gmail.com" }, { "name": "콩으로 여는 세상(전순옥)", "building": "미래청", "floor": 4, "roomNumber": "401B", "mainIMG": null, "phone": "", "website": null, "intro": "제조/생산/유통", "email": "365beanworld@gmail.com" }, { "name": "주식회사 투에니원센츄리", "building": "미래청", "floor": 4, "roomNumber": "401C", "mainIMG": null, "phone": "", "website": null, "intro": "주식회사 투에니원센츄리", "email": "kyle7949@sa21c.com" }, { "name": "히든북", "building": "미래청", "floor": 4, "roomNumber": "401G", "mainIMG": "http://www.hiddenbook.co.kr/img/logo_2020.png", "phone": "", "website": null, "intro": "야외 도서관, 독서 교육, 작은 도서관 운영을 통해 소셜미션을 실현. (대표사업: 찾아가는 도서관인 야외도서관)", "email": "wwwphwww@naver.com" }, { "name": "트리플앤 주식회사", "building": "미래청", "floor": 4, "roomNumber": "402", "mainIMG": "http://treeple.net/img/top_logo.png", "phone": "070-8692-0392", "website": null, "intro": "사회혁신/비영리 프로젝트 성장 주기별 IT 기술 솔루션 개발", "email": "help@treeple.net" }, { "name": "주식회사 헤니", "building": "미래청", "floor": 4, "roomNumber": "403", "mainIMG": "http://heni.co.kr/layouts/img/heni_logo.png", "phone": "02-571-7581", "website": null, "intro": "녹지 환경 취약 지역의 컨테이너 조경수를 활용한 조경 녹지 공간 조성", "email": "pasebe@hanmail.net" }, { "name": "은평 주거복지센터", "building": "미래청", "floor": 4, "roomNumber": "404", "mainIMG": "http://www.ephousewel.com/gnuboard4/images/logo.jpg", "phone": "02-388-2979", "website": null, "intro": "은평구 주거취약계층 주거비 지원, 공공임대주택 맞춤형 상담, 철거민 세입자 주거 상담, 청년 주거 상담", "email": "ephousewel@daum.net" }, { "name": "서울프린지네트워크", "building": "미래청", "floor": 4, "roomNumber": "405", "mainIMG": "https://www.seoulfringefestival.net:5632/images/logo.png", "phone": "02-325-8150", "website": null, "intro": "팬데믹 시대의 예술 혹은 축제를 위하여", "email": "seoulfringe@hanmail.net" }, { "name": "사단법인 씨즈", "building": "미래청", "floor": 4, "roomNumber": "406", "mainIMG": "https://www.theseeds.asia/images/front/common/logo--top.jpg", "phone": "02-355-7910", "website": null, "intro": "서울형 지역순환경제 모델 개발 및 실행", "email": "seeds@theseeds.asia" }, { "name": "주식회사 헬스브릿지", "building": "미래청", "floor": 4, "roomNumber": "407", "mainIMG": "https://scontent-gmp1-1.xx.fbcdn.net/v/t1.6435-9/97430433_110010714046725_8876605469821501440_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=pdTUzhvCcPsAX9ffj-K&_nc_ht=scontent-gmp1-1.xx&oh=b02e9cb443e97844e55a2b1b2c61be7f&oe=61DAC43A", "phone": "02-452-0905", "website": null, "intro": "서울시 건강주치의 서비스 : 020 스마트헬스케어", "email": "mail@healthbridge.kr" }, { "name": "캐릭터메이커스 협동조합", "building": "미래청", "floor": 4, "roomNumber": "408", "mainIMG": null, "phone": "", "website": null, "intro": "사회활동", "email": "snan@mavc.co.kr" }, { "name": "오늘의행동 사회적협동조합", "building": "미래청", "floor": 4, "roomNumber": "409A", "mainIMG": "https://cdn.imweb.me/thumbnail/20201124/c7b50230d0969.png", "phone": "", "website": null, "intro": "오늘의행동 사회적협동조합은 ", "email": "share@todaygoodaction.org" }, { "name": "이풀약초협동조합", "building": "미래청", "floor": 4, "roomNumber": "409B", "mainIMG": "https://cdn.imweb.me/thumbnail/20210401/0e26b10c34e7f.png", "phone": "02-3674-5200", "website": null, "intro": "약초협동조합,산림형 예비사회적기업, 공방, 공동작업장", "email": "ipoolcoop@naver.com" }, { "name": "주식회사 모아스토리", "building": "미래청", "floor": 4, "roomNumber": "409D", "mainIMG": "http://moastory.cafe24.com/wp-content/uploads/2018/02/logo_m.png", "phone": "", "website": null, "intro": "우리 사회의 약한 그룹인 청소년, 다문화가정, 장애인 및 취약계층을 위한 콘텐츠를 제작", "email": "siesoll@moastory.com" }, { "name": "주식회사 공공공간", "building": "미래청", "floor": 4, "roomNumber": ["410", "411"], "mainIMG": "http://000gan.com/wp-content/uploads/2017/10/zeroSpace_black_195x104.png@2x.png", "phone": "", "website": null, "intro": "문화/예술", "email": "000gan@000gan.com" }, { "name": "올드브라운", "building": "미래청", "floor": 4, "roomNumber": "412", "mainIMG": null, "phone": "02-2654-2050", "website": null, "intro": "도심 및 농촌 잉여 천연자원을 활용한 친환경 컬러링 생태 시장 만들기", "email": "botanicaldye@gmail.com" }, { "name": "에이치비엠 사회적협동조합", "building": "미래청", "floor": 4, "roomNumber": "413", "mainIMG": "http://www.hbmcoop.co.kr/static/img/HBM_logo_png.png", "phone": "02-6930-5861", "website": null, "intro": "글로벌 협업 네트워크 구축 프로젝트", "email": "hbmcoop@gmail.com" }, { "name": "모두를위한 극장공정영화 협동조합", "building": "미래청", "floor": 4, "roomNumber": "414", "mainIMG": "https://scontent-gmp1-1.xx.fbcdn.net/v/t1.6435-9/59727595_1979106542215030_5564554719549980672_n.png?_nc_cat=106&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=pdaQT6TVV4MAX-DEXmu&_nc_ht=scontent-gmp1-1.xx&oh=a51365139a253f7b82637a0c344591a9&oe=61DA7508", "phone": "02-2632-5800", "website": null, "intro": "대안영화 배급 상영 제작 교육", "email": "cine4all.coop@gmail.com" }, { "name": "공동체아이티 사회적협동조합", "building": "미래청", "floor": 4, "roomNumber": ["415", "416"], "mainIMG": "https://cdn.imweb.me/thumbnail/20210624/dbc99a100d30d.png", "phone": "", "website": null, "intro": "디지털 포용을 실현하는 시민IT공방", "email": "ictact@ictact.kr" }, { "name": "사단법인 아름다운배움", "building": "미래청", "floor": 4, "roomNumber": "417", "mainIMG": "https://cdn.imweb.me/thumbnail/20210527/4244496b736a9.png", "phone": "070-4205-1525", "website": null, "intro": "Little Library / Class Library / 3T 프로젝트 / Korea Vision Trip / 은평가족학교", "email": "aum1525@naver.com" }, { "name": "(주)세상에 없는 세상", "building": "미래청", "floor": 4, "roomNumber": "418", "mainIMG": "https://cdn.imweb.me/thumbnail/20211013/280b01e59e61b.png", "phone": "", "website": null, "intro": "환경 문제 전환 싹쓰리(친환경 유통 플랫폼, 폐자원 기반의 제품 재활용, 생분해 일회용 그릇 제작)", "email": "tour@onlytour.co.kr" }, { "name": "사회적협동조합 자바르떼", "building": "미래청", "floor": 5, "roomNumber": "502A", "mainIMG": "https://lh3.googleusercontent.com/EkmMtN6Tm1b-tW10QcJK_8GY7y9ApWqht29VrG6gxvps_KiPtm1Qx51Nt1SHccBqyyxcAIxUY6ihewk_idbCzUGdPdUZnhyHQHg2FEMLsYTaf9bg9m9ksQ", "phone": "02-334-8209", "website": null, "intro": "지역문화예술 교육 / 창작 / 지역문화기획 / 문화예술 사회적경제 컨설팅(멘토링)", "email": "jobarte@arteplay.net" }, { "name": "유한회사 커먼그린", "building": "미래청", "floor": 5, "roomNumber": "503", "mainIMG": "http://www.common-green.com/wp-content/uploads/2021/07/%EC%BB%A4%EB%A8%BC%EA%B7%B8%EB%A6%B0-%EB%A1%9C%EA%B3%A02.png", "phone": "", "website": null, "intro": "도시민 누구나 최소한의 비용과 투자로 생산을 시작할 수 있는 도시형 농사 키트를 개발하고 판매", "email": "commongreen2@gmail.com" }, { "name": "공익인권변호사모임 희망을만드는법", "building": "미래청", "floor": 5, "roomNumber": "504", "mainIMG": "https://www.hopeandlaw.org/wp-content/uploads/2021/12/header_logo.png", "phone": "02-364-1210", "website": null, "intro": "소수자인권옹호,기업인권침해,인권증진활동,인권 중심 법제도 개선", "email": "hope@hopeandlaw.org" }, { "name": "주식회사 알피오플래닛", "building": "미래청", "floor": 5, "roomNumber": "506B", "mainIMG": "https://scontent-gmp1-1.xx.fbcdn.net/v/t1.6435-1/p148x148/33083032_1289455954563041_5190361938768429056_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=1eb0c7&_nc_ohc=5OrDFIbSdI0AX_qCSBh&_nc_ht=scontent-gmp1-1.xx&oh=00_AT_AnW_Z_f_rR_8Yb_GTKgtr2OpSF7sXcYY6gpEs4Cx40w&oe=61DBCB61", "phone": "070-7771-0701", "website": null, "intro": "(지역 주민 커뮤니티 중심) 서울형 디지털 헬스케어 & 에듀텍 플렛폼", "email": "contact@rpoplanets.com" }, { "name": "사단법인 한국청소년 동아리연맹", "building": "미래청", "floor": 5, "roomNumber": "507", "mainIMG": "http://kycakyca.alltheway.kr/images/main/mlogo.png", "phone": "02-387-0771", "website": null, "intro": "청소년 동아리 활동 지원/육성, 복지, 교육, 체험, 진로, 멘토링", "email": "kyca04@daum.net" }, { "name": "이주민 사회적협동조합", "building": "미래청", "floor": 5, "roomNumber": "508", "mainIMG": "http://www.icsc21c.org/img/logo.png", "phone": "02-351-3798", "website": null, "intro": "원어민외국어교실, 문화체험교실, 이주민 교육, 다문화자녀 교육", "email": "ejoomin7@naver.com" }, { "name": "사회혁신연구소", "building": "미래청", "floor": 5, "roomNumber": "509", "mainIMG": "http://images.squarespace-cdn.com/content/v1/5454b808e4b03e44bada5cd6/1414894583734-PZXAHM8Q0CVRH5PVCHC7/1-1.png?format=1500w", "phone": "", "website": null, "intro": "공공관계 서비스업, 경영컨설팅업, 연구용역(지속가능발전, 협치, 사회혁신, 주민참여, 중장기발전계획 등)", "email": "kwon155@gmail.com" }, { "name": "디어건축사사무소 주식회사", "building": "미래청", "floor": 5, "roomNumber": "510", "mainIMG": "http://www.deararch.com/wp-content/uploads/2015/11/cropped-t_l2.png", "phone": "02-2263-8861", "website": null, "intro": "테트리스 하우스 건축설계 S/W와 건축자재 솔루션을 이용하여 취약계층과 지역에 싸고 튼튼한 조립식 모듈러 주택 보급사업", "email": "adotdear@naver.com" }, { "name": "주식회사 마이리얼짐", "building": "미래청", "floor": 5, "roomNumber": "511", "mainIMG": "https://myrealgym.com/assets/img/Logo1_2@0.5x-2.png", "phone": "02-6494-1122", "website": null, "intro": "몸의 문제를 찾는 100% 비대면 근골격검사 및 온라인 홈교정 서비스", "email": "thejunu@naver.com" }, { "name": "하트투하트", "building": "미래청", "floor": 6, "roomNumber": "601", "mainIMG": null, "phone": "", "website": null, "intro": "하트투하트", "email": "setmefree15@naver.com" }, { "name": "주식회사 눈금", "building": "미래청", "floor": 6, "roomNumber": "602A", "mainIMG": "https://noongeum.com/wp-content/uploads/2020/01/cropped-%E1%84%82%E1%85%AE%E1%86%AB%E1%84%80%E1%85%B3%E1%86%B7512-w.png", "phone": "070-8787-8897", "website": null, "intro": "1:1 비대면 영양 코칭을 통한 어린이 성장관리 및 성장 문제 개선", "email": "support@noongeum.com" }, { "name": "㈜오마이컴퍼니", "building": "미래청", "floor": 6, "roomNumber": "602C", "mainIMG": "https://www.ohmycompany.com/omc/asset/images/logo.png", "phone": "02-388-2556", "website": null, "intro": "로컬, 혁신단체 등을 위한 후원형 크라우드펀딩 진행", "email": "omc@ohmycompany.com" }, { "name": "주식회사 국제지속가능인증원", "building": "미래청", "floor": 6, "roomNumber": "604A", "mainIMG": "http://www.igsc.kr/html/_skin/img/common/logo_re.png", "phone": "", "website": null, "intro": "환경/생태/에너지", "email": "yongjin.lee@igsc.kr" }, { "name": "콜라보 커뮤니케이션즈", "building": "미래청", "floor": 6, "roomNumber": "604B", "mainIMG": "https://scontent-gmp1-1.xx.fbcdn.net/v/t1.18169-1/p148x148/11222950_863488560396135_4098522912220178829_n.png?_nc_cat=110&ccb=1-5&_nc_sid=1eb0c7&_nc_ohc=e2obtXCtGMAAX9n_RUi&_nc_ht=scontent-gmp1-1.xx&oh=00_AT9o2L-OJmtewkiicQgoqK-9lY0OvpBlUrbV9yUnyrMVBg&oe=61DD3791", "phone": "050-5720-1279", "website": null, "intro": "디지털 사회혁신을 위한 온라인혁신파크 빅데이터 플랫폼 구축 및 운영", "email": "biz@colcomm.net" }, { "name": "주식회사 아시아공정무역 네트워크", "building": "미래청", "floor": 6, "roomNumber": "605", "mainIMG": "http://asiafairtrade.net/img/logo.png", "phone": "070-4465-3341", "website": null, "intro": "저개발국 공정무역 제품 수입 및 국내 유통, 판매", "email": "afn.sns@gmail.com" }, { "name": "서울시협동조합 지원센터", "building": "미래청", "floor": 6, "roomNumber": "606", "mainIMG": "https://www.15445077.net/resources/front/images/toplogo.png", "phone": "02-383-8380\n1544-5077", "website": null, "intro": "서울시협동조합지원센터", "email": "" }, { "name": "주식회사 모아관리", "building": "미래청", "floor": 6, "roomNumber": "607", "mainIMG": null, "phone": "", "website": null, "intro": "건물시설관리, 경비, 청소, 방역", "email": "moagwanri@daum.net" }, { "name": "비건생활 연구소(비건카페 달냥)", "building": "상상청", "floor": 1, "roomNumber": "103", "mainIMG": "https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/52457250_2305212789716145_7273396376971509760_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_cat=109&_nc_ohc=6q5HuQMVFZUAX-N45eL&edm=ABfd0MgBAAAA&ccb=7-4&oh=77c560a9657acbdb309e55783c021718&oe=61BDB64B&_nc_sid=7bff83", "phone": "", "website": null, "intro": "비건 문화 활동을 통한 윤리적 식생활 환경문제 개선 및 건강한 청년 문화 네트워크 확산에 기여", "email": "vegancafedn@gmail.com" }, { "name": "이야기꾼의 책공연", "building": "상상청", "floor": 1, "roomNumber": "104", "mainIMG": "https://scontent-gmp1-1.xx.fbcdn.net/v/t1.18169-9/37111_426099024130843_1679571852_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=p7UmQsQBV2oAX-RePPB&tn=g-HUaHzUo514HHzu&_nc_ht=scontent-gmp1-1.xx&oh=00_AT_li8Dyc2lDpV_STUj_Bzp54iGXkwctZVw3htYcHxzr_w&oe=61DAB67A", "phone": "", "website": null, "intro": "어린이,시민의 협동작업장 공간모델링", "email": "pinkshoes@haja.or.kr" }, { "name": "서울혁신센터 글로벌존", "building": "상상청", "floor": 2, "roomNumber": "201", "mainIMG": null, "phone": "", "website": null, "intro": "서울혁신센터 글로벌존", "email": "" }, { "name": "글로벌코워킹존", "building": "상상청", "floor": 2, "roomNumber": "203", "mainIMG": null, "phone": "", "website": null, "intro": "", "email": "" }, { "name": "주식회사 씨닷", "building": "상상청", "floor": 2, "roomNumber": "203", "mainIMG": "http://www.cdot.asia/wp-content/uploads/2018/05/cdot_logo.png", "phone": "", "website": null, "intro": "글로컬한 활동을 하는 개인과 기관들의 커뮤니티 형성", "email": "sunkyung.han@cdot.asia" }, { "name": "재단법인 한국사회투자", "building": "상상청", "floor": 2, "roomNumber": "203", "mainIMG": "http://www.social-investment.kr/_asset/img/common/logo_index202001.png", "phone": "", "website": null, "intro": "사회혁신을위한 체인지메이커 및 팀기업가 육성", "email": "vida.movil.rio@gmail.com" }, { "name": "주식회사 어스맨", "building": "상상청", "floor": 3, "roomNumber": ["301", "306"], "mainIMG": "https://contents.sixshop.com/uploadedFiles/154886/default/image_1611576492552.png", "phone": "02-6212-1258", "website": null, "intro": "사람이 중심이 되는 무역을 통해 지구촌 곳곳에 지속가능한 삶을 확산시키는 공정무역 브랜드", "email": "heejin@earthman.asia" }, { "name": "인권도시연구소", "building": "상상청", "floor": 3, "roomNumber": "302", "mainIMG": "http://hrcity.or.kr/theme/prunit/img/logo.png", "phone": "02-6094-5302", "website": null, "intro": "국내 지방자치들의 인권도시 실현", "email": "hrcity@naver.com" }, { "name": "노동건강연대", "building": "상상청", "floor": 3, "roomNumber": "303", "mainIMG": "http://laborhealth.or.kr/2019/wp-content/uploads/2019/04/header-logo-left.png", "phone": "02-469-3976", "website": null, "intro": "비정규직 노동자의 취약한 노동환경과 이를 용인하는 사회구조를 바꾸기 위해 당사자와 전문가가 연대하여 활동", "email": "laborhealthh@hanmail.net" }, { "name": "발전대안 피다", "building": "상상청", "floor": 3, "roomNumber": "304", "mainIMG": "https://cdn.imweb.me/thumbnail/20180313/5aa7ce80def6a.png", "phone": "02-518-0705", "website": null, "intro": "민과 함께 국내외 부조리하고 불평등한 개발을 감시하며 그 '대안'을 찾아가는 단체", "email": "hanlight@hanmail.net" }, { "name": "주식회사 사운드플렉스 스튜디오", "building": "상상청", "floor": 3, "roomNumber": "305", "mainIMG": "https://soundplex.org/img/frontend/brand/logo_soundplexstudio.png", "phone": "070-4132-5644", "website": null, "intro": "시각장애인을 위한 화면해설(음성해설) 제작, 배리어프리콘텐츠 기획 및 제작", "email": "info@soundplex.org" }, { "name": "히든앤코", "building": "상상청", "floor": 3, "roomNumber": "307", "mainIMG": "https://hiddntaste.com/web/upload/NNEditor/20211027/ba70fcd77c586d5dfa65e7335abd9771.png", "phone": "070-4006-1415", "website": null, "intro": "코코넛 오일을 활용한 제품개발을 통해 제3세계 코코넛 농부를 지원", "email": "hiddn01@gmail.com" }, { "name": "한국IT 개발자협동조합", "building": "상상청", "floor": 3, "roomNumber": "308", "mainIMG": "http://kodec.or.kr/images/common/logo.gif", "phone": "", "website": null, "intro": "일자리,노동,프리랜서협동조합,일자리공유플랫폼", "email": "ohkodec@gmail.com" }, { "name": "재단법인 한국사회투자", "building": "상상청", "floor": 3, "roomNumber": ["310", "311"], "mainIMG": "http://www.social-investment.kr/_asset/img/common/logo_index202001.png", "phone": "02-2278-8399", "website": null, "intro": "사회혁신조직에 맞춤형 임팩트금융을 제공하며, 민간기금을 조성해 소셜벤처, 사회혁신조직을 발굴, 육성", "email": "info@sifund.kr" }, { "name": "비영리IT 지원센터", "building": "상상청", "floor": 3, "roomNumber": "312", "mainIMG": "http://www.npoit.kr/wp-content/uploads/2019/07/%EB%B9%84%EC%98%81%EB%A6%ACIT%EC%A7%80%EC%9B%90%EC%84%BC%ED%84%B0-%EC%82%AC%EC%9D%B4%ED%8A%B8-%ED%99%88%EB%B2%84%ED%8A%BC-1.png", "phone": "02-2088-2928", "website": null, "intro": "더 나은 정보통신기술 인프라를 바탕으로 비영리단체와 사회적경제 조직이 사회문제를 해결하는 프로젝트에 집중할 수 있도록 지원", "email": "npoit@npoit.kr" }, { "name": "언더독스", "building": "상상청", "floor": 3, "roomNumber": ["313", "314", "315", "316", "317"], "mainIMG": "https://underdogs.co.kr/wp-content/uploads/2020/10/underdogs-bi.svg", "phone": "02-6384-3222", "website": null, "intro": "청년사회혁신창업가육성 및 성장", "email": "contact@underdogs.co.kr" }, { "name": "코워킹스페이스", "building": "상상청", "floor": 3, "roomNumber": ["318", "319"], "mainIMG": null, "phone": "", "website": null, "intro": "", "email": "" }, { "name": "감성붓다", "building": "상상청", "floor": 3, "roomNumber": ["318", "319"], "mainIMG": "https://storage.googleapis.com/cr-resource/image/b17ad0a0562b88173f818253442a2d84/gamsungbootda/836a131acf52c011d896c199d0c56c26.png", "phone": "", "website": null, "intro": "(미술/예술/디자인) 캘리그라피 디자인", "email": "gamsungbootda@naver.com" }, { "name": "라이터스", "building": "상상청", "floor": 3, "roomNumber": ["318", "319"], "mainIMG": "https://scontent-gmp1-1.xx.fbcdn.net/v/t1.6435-1/p148x148/98203922_1362175263972745_4829467617980841984_n.png?_nc_cat=100&ccb=1-5&_nc_sid=1eb0c7&_nc_ohc=-fDe817znhQAX_AwbiY&_nc_ht=scontent-gmp1-1.xx&oh=04c53f36fbaddb4d646e469f46c8cbb3&oe=61DC344C", "phone": "", "website": null, "intro": "글쓰기를 매개로 작가와 시민을 연결하며, 창작물 직거래 장터 '글 파는 가게'로 운영하는 등 작가들의 지속가능한 작품 활동을 지원", "email": "jh_jin81@naver.com" }, { "name": "주식회사 소리엔", "building": "상상청", "floor": 3, "roomNumber": ["318", "319"], "mainIMG": "http://www.sorien.kr/img/sorien/sub_logo.png", "phone": "", "website": null, "intro": "교통약자 이동권, 생활반경 확대를 위한 모바일 플랫폼", "email": "voice2sky@naver.com" }, { "name": "스튜디오메조 건축사사무소", "building": "상상청", "floor": 3, "roomNumber": ["318", "319"], "mainIMG": "https://a-platform.co.kr/uploaded/member/mezzo/l1_67581ef81aefde4436b84a70bfa96a820.jpg", "phone": "", "website": null, "intro": "마을건축가 , 공공건축가가 참여하는 도시재생", "email": "twblue1@gmail.com" }, { "name": "창작집단 숨비", "building": "상상청", "floor": 3, "roomNumber": ["318", "319"], "mainIMG": "https://payload.cargocollective.com/1/16/531563/10488117/logo_800.jpg", "phone": "", "website": null, "intro": "드론을 활용한 시민 문화활동 개발과 공연 콘텐츠 개발", "email": "so4860@hanmail.net" }, { "name": "주식회사 펫로그온", "building": "상상청", "floor": 3, "roomNumber": ["318", "319"], "mainIMG": null, "phone": "", "website": null, "intro": "반려동물 온라인 등록 플랫폼 개발을 통한 동물과 지속가능한 사회 만들기", "email": "contact@petlogon.com" }, { "name": "사단법인 디지털리터러시 교육협회", "building": "상상청", "floor": 3, "roomNumber": ["318", "319"], "mainIMG": null, "phone": "02-2062-3001", "website": null, "intro": "사회 혁신가 디지털 리터러시 역량 강화를 위한 프로젝트형 교육 사업", "email": "request@cdledu.org" }, { "name": "주식회사 데이터목수", "building": "상상청", "floor": 3, "roomNumber": ["318", "319"], "mainIMG": null, "phone": "02-2645-5931", "website": null, "intro": "정보 격차 해소를 위한 정보공유플랫폼", "email": "insoo.jeong@gmail.com" }, { "name": "시소", "building": "상상청", "floor": 3, "roomNumber": ["318", "319"], "mainIMG": null, "phone": "", "website": null, "intro": "숲,자연,아보리스트,숲밧줄놀이,팝업놀이터", "email": "hello@playseesaw.kr" }, { "name": "(주)인올그린", "building": "상상청", "floor": 3, "roomNumber": ["318", "319"], "mainIMG": null, "phone": "", "website": null, "intro": "원예와 아트를 결합한 일자리 창출", "email": "inallgreen@naver.com" }, { "name": "이로", "building": "상상청", "floor": 3, "roomNumber": ["318", "319"], "mainIMG": null, "phone": "", "website": null, "intro": "국제교류 프로그램 사업 (기획, 운영), 미디어·리서치 사업, 컨설팅 및 코디네이트, 통역 / 번역", "email": "iro@iroeum.com" }, { "name": "(사)한국과학문화 교육단체연합", "building": "상상청", "floor": 3, "roomNumber": ["318", "319"], "mainIMG": "https://scontent-gmp1-1.xx.fbcdn.net/v/t1.18169-1/p148x148/150492_311280182290047_2054647450_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=1eb0c7&_nc_ohc=ls2c7ZQvxKEAX9rWP05&_nc_ht=scontent-gmp1-1.xx&oh=00_AT-rcwIvOtmwOYz-Dkrdgxfb4iI6gWJqGJWP51Zpm7qpKQ&oe=61DC9AF9", "phone": "", "website": null, "intro": "모두를 위한 러닝랩", "email": "yeskkok@naver.com" }, { "name": "주식회사 엑스포콘텐츠플랫폼", "building": "상상청", "floor": 3, "roomNumber": ["318", "319"], "mainIMG": "https://scontent-gmp1-1.xx.fbcdn.net/v/t1.18169-1/p148x148/14937436_353490161661495_4561412597896616896_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=1eb0c7&_nc_ohc=Lp_rrSQo1FAAX8g_31d&_nc_ht=scontent-gmp1-1.xx&oh=1b31be3bc43d19573be346c9a5747d2d&oe=61DC72A3", "phone": "070-7123-4101\n02-549-5048", "website": null, "intro": "폐골판지를 활용한 실물크기 페이퍼토이 제작", "email": "info@x4design.co.kr" }, { "name": "사단법인 한국공론포럼", "building": "상상청", "floor": 3, "roomNumber": ["318", "319"], "mainIMG": null, "phone": "02-730-0432", "website": "https://www.facebook.com/groups/1738388286298843", "intro": "폐기물 정책 관련 지역 주민 공론장 지원 / 지자체 주민공론장 관련 조례제정지원 / 공론관련 이론 교육 / 관련 도서 출판", "email": "parkts2923@socon.re.kr" }, { "name": "크라스키노 포럼", "building": "상상청", "floor": 3, "roomNumber": ["318", "319"], "mainIMG": "http://kraskinoforum.net/images/main_img/logo.jpg", "phone": "", "website": "http://kraskinoforum.net/", "intro": "2019.창립기념 정책포럼 및 문화공연/러시아음악회/인문강좌 진행 등", "email": "newglass75@naver.com" }, { "name": "(사)지방자치발전소", "building": "상상청", "floor": 3, "roomNumber": ["318", "319"], "mainIMG": "https://t1.daumcdn.net/cfile/tistory/99601B475CDC9B9D20", "phone": "", "website": "https://icola2010.tistory.com/", "intro": "민주시민교육을 통한 자치역량과 지방의회의 역량 강화교육, 시민의식 수준에 발맞춘 지방자치단체의 정책연구를 주요 목적사업으로 하여 자치분권의 온전한 실현", "email": "icola2019@gmail.com" }, { "name": "에뻬아트피플", "building": "상상청", "floor": 3, "roomNumber": ["318", "319"], "mainIMG": null, "phone": "", "website": null, "intro": "공연예술 사운드 레코딩 및 리마스터링", "email": "design.epee@gmail.com" }, { "name": "(사) 한국전자상거래학회", "building": "상상청", "floor": 3, "roomNumber": ["318", "319"], "mainIMG": "https://kecra.jams.or.kr/res/homepage/INS000001781/logo_IMG000007623.jpg;jsessionid=z1eLRqCF6daUeo8ACsiOrlbg11fAr6KRBLz0ZAgGX1UekUqvpPD56OUa1SSr2SbE.JAMSWAS2_servlet_engine7", "phone": "", "website": null, "intro": "전자상거래시장의 활성화를 위해 글로벌 비즈니스 네트워킹 구축을 통한 중소기업의 판로 개척", "email": "gglobal111@naver.com" }, { "name": "새로운 사회를 창조하는 청년광장", "building": "상상청", "floor": 3, "roomNumber": ["318", "319"], "mainIMG": "https://modo-phinf.pstatic.net/20170928_56/1506565879737pHxRG_JPEG/mosa0wA8Hm.jpeg?type=f320_320", "phone": "", "website": "https://ypower2025.modoo.at/", "intro": "청년들이 생각하는 ‘공정’에 대한 의견을 청취하고 문제의식이 무엇인지 드러내는 다양한 공론장을 운영합니다. ‘청년과 공정’에 대한 기존 정책과 담론을 조사하고 인터뷰를 통해 청년들의 의견을 청취하여 청년의 시선에서 공정사회에 대한 해법을 모색하는 연구를 진행합니다. 공론장과 연구내용을 발표와 포럼을 통해 시민들에게 알려냅니다.", "email": "ypower2025@gmail.com" }, { "name": "모두를위한자유 구(안티카)", "building": "상상청", "floor": 3, "roomNumber": ["318", "319"], "mainIMG": "https://yt3.ggpht.com/OLsnm8W4AfgZoPAtT8sVbmpXc1hivlVfkpHDMGMvBgttX9pMcB920z-NA1X2FffhGxjt4mg8oJA=s88-c-k-c0x00ffffff-no-rj", "phone": "", "website": null, "intro": "정신장애인 당사자 창작문화예술단", "email": "antica.act@gmail.com" }, { "name": "수작업실", "building": "상상청", "floor": 3, "roomNumber": ["318", "319"], "mainIMG": null, "phone": "", "website": null, "intro": "로컬 브랜딩 및 지역 비즈니스 개발", "email": "hello@soozakupsil.com" }, { "name": "워커벅스 (빌더스앤워커스)", "building": "상상청", "floor": 3, "roomNumber": ["318", "319"], "mainIMG": "https://cdn.imweb.me/thumbnail/20210802/fb6c34034c5cc.png", "phone": "", "website": null, "intro": "건설기술인 연결, 생활기술인 교육 등", "email": "kpm1001@daum.net" }, { "name": "마을무지개", "building": "상상청", "floor": 3, "roomNumber": ["318", "319"], "mainIMG": "https://lh3.googleusercontent.com/qpN21A44N_z5_7cNHJ3u4_YhXpLc-m2Y7ETz9xo-KeS-UfY4OgP60BD3CgsgzhYiSLCFJT5hpFJFJpbyrfBKLXDbGByICH-7YQSbVTd2fcxF2mdScvHA=s0", "phone": "", "website": null, "intro": "■ 사업1 : 글로벌식탁으로의 초대 - 내용 : 맞춤형 케이터링 사업으로 기업체, 소규모 모임등에 다문화 음식 배달 서비스로 음식을 통한 문화 향유 기회를 제공함 ■ 사업2 : 원데이 원푸드 마을무지개 도시락 - 내용 : 1일1메뉴 도시락으로 단가를 낮추고 양질의 도시락 제공 - 내용 : 아시안 푸드 식당 운영, 돌봄서비스 식사지원 서비스 제공", "email": "soyoun1124@hanmail.net" }, { "name": "달집", "building": "상상청", "floor": 3, "roomNumber": ["318", "319"], "mainIMG": null, "phone": "", "website": null, "intro": "융복합형 문화예술교육프로그램", "email": "daljip@naver.com" }, { "name": "타래유니버스", "building": "상상청", "floor": 3, "roomNumber": ["318", "319"], "mainIMG": "http://www.taraeuniverse.com/img/gnb_logo2.png", "phone": "", "website": null, "intro": "각종 행사기획, 예술교육, 홍보대행 서비스", "email": "onlyjanghee@daum.net" }, { "name": "한국페땅끄협회", "building": "상상청", "floor": 3, "roomNumber": ["318", "319"], "mainIMG": "http://petanque.kr/wp-content/uploads/2019/01/logo-gym.fkpb_.png", "phone": "", "website": null, "intro": "사회활동", "email": "contact@petanque.kr" }, { "name": "주식회사 엘씨벤처스", "building": "상상청", "floor": 3, "roomNumber": ["318", "319"], "mainIMG": null, "phone": "", "website": null, "intro": "환경/생태/에너지", "email": "lovecharmbag@gmail.com" }, { "name": "Log!n (이윤준)", "building": "상상청", "floor": 3, "roomNumber": ["318", "319"], "mainIMG": null, "phone": "", "website": null, "intro": "사회활동", "email": "socoooolguy@naver.com" }, { "name": "주민자치방송진흥원 (황인수)", "building": "상상청", "floor": 3, "roomNumber": ["318", "319"], "mainIMG": null, "phone": "", "website": null, "intro": "미디어", "email": "hwtotal@naver.com" }, { "name": "피플라", "building": "상상청", "floor": 3, "roomNumber": ["318", "319"], "mainIMG": null, "phone": "", "website": null, "intro": "환경/생태/에너지", "email": "hwtotal@naver.com" }, { "name": "EOK", "building": "상상청", "floor": 3, "roomNumber": ["318", "319"], "mainIMG": null, "phone": "", "website": null, "intro": "문화/예술", "email": "eokm@daum.net" }, { "name": "위누", "building": "상상청", "floor": 3, "roomNumber": ["320", "321"], "mainIMG": "http://weenu.com/weenu_co/images/weenu_logo.png", "phone": "", "website": null, "intro": "창작가와 시민의 만남을 촉진하는 공동공간 기반 예술커뮤니티", "email": "artup@weenu.com" }, { "name": "주식회사 위라이드", "building": "상상청", "floor": 4, "roomNumber": "401", "mainIMG": null, "phone": "070-7722-9284", "website": null, "intro": "스마트 시티 솔루션 개발(ICT 기술을 이용한 스마트관광 및 스마트 모빌리티)", "email": "hello@weridekorea.com" }, { "name": "재단법인 한국사회투자", "building": "상상청", "floor": 4, "roomNumber": ["402", "403"], "mainIMG": "http://www.social-investment.kr/_asset/img/common/logo_index202001.png", "phone": "02-2278-8399", "website": null, "intro": "사회혁신기업 대상 금융, 경영컨설팅 및 성장지원", "email": "info@sifund.kr" }, { "name": "주식회사 어반정글", "building": "상상청", "floor": 4, "roomNumber": "404", "mainIMG": "https://cdn.imweb.me/thumbnail/20210706/5b159eae5967f.png", "phone": "", "website": null, "intro": "소셜 가드닝, 공동체 활성화 사업", "email": "urbanjunglelab@gmail.com" }, { "name": "핸드스피크 주식회사", "building": "상상청", "floor": 4, "roomNumber": ["405", "406"], "mainIMG": "https://cdn.imweb.me/thumbnail/20200822/bf528102114b8.png", "phone": "", "website": null, "intro": "수어를 활용한 문화예술 콘텐츠 기획/제작", "email": "meet@handspeak.kr" }, { "name": "주식회사 플랜제닉", "building": "상상청", "floor": 4, "roomNumber": ["407", "408"], "mainIMG": "http://plantgenic.co.kr/web/upload/category/logo/accac785cfb0b4d9ef6aa707571e6c69_UbXXAhkKGk_3_top.jpg", "phone": "", "website": null, "intro": "도시 스마트팜을 통한 식물생산", "email": "moonedge@naver.com" }, { "name": "엔피오(NPO) 교육센터", "building": "상상청", "floor": 4, "roomNumber": "412", "mainIMG": "http://www.snpo.kr/new/img/center_logo_kr.gif", "phone": "070-4243-1778", "website": null, "intro": "비영리단체 모금역량 강화 교육 및 컨설팅 등 재정자립 기반 강화 사업", "email": "" }, { "name": "에이치비엠 사회적협동조합", "building": "상상청", "floor": 4, "roomNumber": "418", "mainIMG": "http://www.hbmcoop.co.kr/static/img/HBM_logo_png.png", "phone": "02-6930-5861", "website": null, "intro": "글로벌 협업 네트워크 구축 프로젝트", "email": "hbmcoop@gmail.com" }, { "name": "에이유디 사회적협동조합", "building": "상상청", "floor": 5, "roomNumber": "501A", "mainIMG": "https://cdn.imweb.me/thumbnail/20211206/a938ae6439c23.png", "phone": "070-4322-3653", "website": null, "intro": "쉐어타이핑 등 IT플랫폼 기반의 사회서비스 제공을 통해, 청각장애인의 의사소통과 사회참여 지원", "email": "wonjin.park@audsc.org" }, { "name": "지구집현전", "building": "상상청", "floor": 5, "roomNumber": "502", "mainIMG": null, "phone": "", "website": null, "intro": "지구집현전", "email": "" }, { "name": "페어스페이스 컨소시엄", "building": "공유동", "floor": 1, "roomNumber": "101", "mainIMG": null, "phone": "", "website": null, "intro": "혁신형공유창고운영,청년/여성창업존", "email": "suplee1@naver.com" }, { "name": "(주)착한엄마", "building": "공유동", "floor": 1, "roomNumber": "102", "mainIMG": null, "phone": "", "website": null, "intro": "(주)착한엄마", "email": "suplee1@naver.com" }, { "name": "(주)약속의자전거", "building": "공유동", "floor": 2, "roomNumber": "203", "mainIMG": "https://scontent-gmp1-1.xx.fbcdn.net/v/t39.30808-1/p200x200/262479190_420128226369225_1374496545538344091_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=c6021c&_nc_ohc=FfNkzXEbfIYAX_I1_g2&_nc_ht=scontent-gmp1-1.xx&oh=8879b523cf5516c8b4458b21a846b854&oe=61BC99F3", "phone": "02-384-0101", "website": null, "intro": "자전거 교육(정비, 타는법, 리사이클링), 행사기획, 자전거 회원제 시스템 운영", "email": "ceo@prombicycle.com" }, { "name": "서울시립 은평청소년 미래진로센터", "building": "공유동", "floor": 3, "roomNumber": null, "mainIMG": null, "phone": "02-389-2090", "website": null, "intro": "3,4,5,6층(사무국 5층)소재 서울시립 은평청소년미래진로센터", "email": "" }, { "name": "서울시 성평등 활동지원센터", "building": "공유동", "floor": 6, "roomNumber": null, "mainIMG": "http://seoulgenderequity.kr/wp-content/themes/project/images/logo--top.png", "phone": "02-6258-1010", "website": null, "intro": "서울시 성평등활동지원센터", "email": "" }, { "name": "서울특별시립미술관", "building": "SeMA창고", "floor": 1, "roomNumber": null, "mainIMG": "https://sema.seoul.go.kr/resources/images/common/footer_logo_v1.svg", "phone": "", "website": "https://sema.seoul.go.kr/", "intro": "서울특별시립미술관", "email": "" }, { "name": "서울혁신센터 (이노베이션팹랩)", "building": "제작동", "floor": 1, "roomNumber": null, "mainIMG": "https://static.wixstatic.com/media/93db6e_6c1c3b04453547a584b79af636a9bdc8~mv2.png/v1/fill/w_126,h_31,al_c,q_85,usm_0.66_1.00_0.01/93db6e_6c1c3b04453547a584b79af636a9bdc8~mv2.webp", "phone": "", "website": null, "intro": "서울혁신센터 (서울이노베이션팹랩)", "email": "" }, { "name": "집으로 가는 길", "building": "제작동", "floor": 2, "roomNumber": "201-A", "mainIMG": null, "phone": "", "website": null, "intro": "노숙인 자활지원 집수리 사업", "email": "zerocentre@naver.com" }, { "name": "이풀 약초협동조합", "building": "참여동", "floor": 1, "roomNumber": "101", "mainIMG": "https://cdn.imweb.me/thumbnail/20210305/1f89ee83fa675.png", "phone": "02-3674-5200", "website": "https://www.ipool.kr/", "intro": "약초협동조합,산림형 예비사회적기업, 공방, 공동작업장", "email": "ipoolcoop@naver.com" }, { "name": "살림의료복지 사회적협동조합", "building": "참여동", "floor": 1, "roomNumber": "103A", "mainIMG": "https://cdn.imweb.me/upload/S20191011d1b2cb1b86d03/44891d8779265.png", "phone": "02-6014-9949(내선 4)", "website": null, "intro": "사람중심 의료복지, 살림의원, 살림치과, 운동센터 다짐, 건강혁신점 운영", "email": "salim@salimcoop.org" }, { "name": "재단법인 스마일 (더스마일치과의원)", "building": "참여동", "floor": 1, "roomNumber": "103B", "mainIMG": null, "phone": "02-757-2835", "website": null, "intro": "장애인 치과센터", "email": "qna@smilefund.org" }, { "name": "서울시 청년활동지원센터", "building": "참여동", "floor": 2, "roomNumber": ["201", "202", "203", "204"], "mainIMG": "https://sygc.kr/assets/footer-logo-eda59a766ebb72272a803b5d1b358f04b24156ed6da8db7b0686030b5fb85e11.png", "phone": "", "website": null, "intro": "서울시 청년활동지원센터", "email": "" }, { "name": "녹번동우편취급국", "building": "참여동", "floor": 1, "roomNumber": "104", "mainIMG": "https://www.koreapost.go.kr/site/kpost/images/postkor/logo.png", "phone": "02-385-0004", "website": null, "intro": "녹번동우편취급국", "email": "" }, { "name": "아름인도서관", "building": "참여동", "floor": 2, "roomNumber": "206", "mainIMG": null, "phone": "", "website": null, "intro": "아름인도서관", "email": "" }, { "name": "주식회사 로쉬코리아", "building": "참여동", "floor": 2, "roomNumber": "207", "mainIMG": null, "phone": "02-2038-2636", "website": null, "intro": "시니어를 위한 생활밀착형 온디맨드 서비스", "email": "hello@losh.co.kr" }, { "name": "서울시립은평 청소년성문화센터", "building": "참여동", "floor": 3, "roomNumber": ["301", "302"], "mainIMG": "http://www.hiteen.org/superboard/data/siteconfig/2021070816090216257281425278.png", "phone": "02-6380-7480", "website": null, "intro": "아동·청소년의 건강한 성문화를 위해 성교육을 중심으로 캠페인, 청소년 활동, 지역사회 연계 프로그램 등을 운영", "email": "yptacteen@naver.com" }, { "name": "오디세이학교", "building": "참여동", "floor": 3, "roomNumber": ["304", "305"], "mainIMG": null, "phone": "", "website": null, "intro": "오디세이학교", "email": "sssol3942@gmail.com" }, { "name": "비움과채움", "building": "한평 책방", "floor": 1, "roomNumber": "101", "mainIMG": null, "phone": "", "website": null, "intro": "한평 책방, 한평 가게", "email": "road365@gmail.com" }, { "name": "주식회사 제로마켓", "building": "비전화카페", "floor": 1, "roomNumber": null, "mainIMG": null, "phone": "", "website": null, "intro": "주식회사 제로마켓", "email": "zeromarket.minji@gmail.com" }, { "name": "서울시 식생활 종합지원센터", "building": "맛동", "floor": 1, "roomNumber": null, "mainIMG": null, "phone": "070-4285-3981\n02-824-2622", "website": null, "intro": "서울시 식생활 종합지원센터", "email": "" }, { "name": "민주노총 서울본부", "building": "민주노총 서울본부", "floor": 1, "roomNumber": null, "mainIMG": null, "phone": "02-2269-6161", "website": null, "intro": "민주노총 서울본부", "email": "" }, { "name": "청년청", "building": "청년청", "floor": 1, "roomNumber": null, "mainIMG": null, "phone": "", "website": null, "intro": "청년청", "email": "" }];