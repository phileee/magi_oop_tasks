const colors_json = require('./../data/colors.json');

function filterSorter(colors) {
    const colors_short = [];
    for (let i of colors) {
        if (Object.keys(i)[0].length < 6) {
            colors_short.push(Object.keys(i)[0])
        }
    }
    return colors_short.sort();
}

console.log(filterSorter(colors_json))