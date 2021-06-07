const stuff = [
    [
        '♈',
        '♉',
        '♊',
        '♋',
        '♌',
    ],
    [
        '♍',
        '♎',
    ],
    [
        [
            '♏',
            '♐',
            '♑',
        ],
        [
            '♒',
            '♓',
        ],
        [
            '🌸',
            '🌷',
            '🌹',
            '🌺',
        ]
    ],
    [
        '🌻',
        '🌼',
        '🌽',
    ],
    [
        [{
                value: '🍅'
            },
            {
                value: '🍎'
            },
        ],
        [{
                value: '🍏'
            },
            {
                get: () => '🍑'
            },
        ],
        [{
                get: () => '🍒'
            },
            {
                get: () => '🍓'
            },
        ],
    ]
];

/**
 * Из представленного массива stuff необходимо заполнить
 * константы zodiacSigns, flowers, food соответственно
 * знаками задиака, цветами и съедобными объектами.
 * Значения должны получиться плоскими массивами
 * без оберток в виде объектов и методов вида:
 * 🍅 🍎 🍏 🍑 🍒 🍓
 * Попробуйте написать как можно меньше кода для достижения
 * результата.
 */

const zodiacSigns = [...stuff[0], ...stuff[1], ...stuff[2][0], ...stuff[2][1]]

const flowers = [...stuff[2][2], ...stuff[3][0], ...stuff[3][1]];

const food = stuff[4].map((arrElem) => {
    const arrCircle = [];
    for (let elem of arrElem) {
        (elem.value) ? arrCircle.push(elem.value): arrCircle.push(elem.get());
    }
    return arrCircle;
})

const signsDoc = document.getElementById('signs');
signsDoc.innerHTML = zodiacSigns;
const flowersDoc = document.getElementById('flowers');
flowersDoc.innerHTML = flowers;
const foodDoc = document.getElementById('food');
foodDoc.innerHTML = food;