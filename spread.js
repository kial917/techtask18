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

const zodiacSigns = [...stuff[0], ...stuff[1], ...stuff[2].slice(0, 2)].reduce((acc, item) => [...acc, ...item], []);

const flowers = [...stuff[2].pop(), ...stuff[3].slice(0, 2)].reduce((acc, item) => [...acc, ...item], []);;
console.log(zodiacSigns);
console.log(flowers)

const food = stuff[4]
    .map((arrElem) => arrElem.map((obj) => obj.value || obj.get()))
    .reduce((acc, item) => [...acc, ...item], [])
console.log(food);

const signsDoc = document.getElementById('signs');
signsDoc.innerHTML = zodiacSigns;
const flowersDoc = document.getElementById('flowers');
flowersDoc.innerHTML = flowers;
const foodDoc = document.getElementById('food');
foodDoc.innerHTML = food;