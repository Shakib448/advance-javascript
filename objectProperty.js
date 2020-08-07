const students = [
    {
        id: 21,
        name: "Omor sunny"
    }, {
        id: 31,
        name: "Manna Dey"
    }, {
        id: 41,
        name: "Moyouri"
    }, {
        id: 71,
        name: "DeepJol"
    }
];

const names = students.map(s => s.name);
const ids = students.map(i => i.id);
const bigger = students.filter(i => i.id > 30);
const biggerOne = students.find(i => i.id > 30);
console.log(biggerOne);