const colors_json = require('./../data/colors.json');
const lodash = require('lodash');

function createSortedKeys(colors) {
    const colorsWithNewKeys = [];
    for (let i of colors) {
        const [newColor] = Object.entries(i);
        colorsWithNewKeys.push({"color" : newColor[0], "rgb" : newColor[1].slice(0,3)});
    }
    return lodash.sortBy(colorsWithNewKeys, 'color');
}

console.log(createSortedKeys(colors_json));