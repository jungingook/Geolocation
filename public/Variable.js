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
    infoHTML: null,
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
    infoHTML: null,
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

var OrganizationData = [{
    name: '공동체IT사회적협동조합',
    building: '미래청',
    floor: '',
    roomNumber: '',
    mainIMG: '',
    intro: '',
    phone: '',
    //email : '',
    website: '',
    //sns : '',
    otherING: null
}, {
    name: '공동체IT사회적협동조합',
    building: '미래청',
    floor: '',
    roomNumber: '',
    mainIMG: '',
    intro: '',
    phone: '',
    email: '',
    website: '',
    sns: '',
    otherING: null
}, {
    name: '공동체IT사회적협동조합',
    building: '미래청',
    floor: '',
    roomNumber: '',
    mainIMG: '',
    intro: '',
    phone: '',
    email: '',
    website: '',
    sns: '',
    otherING: null
}];