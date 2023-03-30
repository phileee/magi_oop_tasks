const {colors, argb} = require('./../data/data');
const lodash = require('lodash');

function rgbToHex([r, g, b]) {
    function colorToHex(color) {
        return color.toString(16).length == 1 ? '0' + color.toString(16) : color.toString(16);
    }
    
    return `#${colorToHex(r)}${colorToHex(g)}${colorToHex(b)}`
}

function consolidateSortedArray(colors, argb) {
    const hexes = argb.map(rgb => rgbToHex(rgb));
    
    const consolidatedArray = colors.map((color, i) => {
        return {"color" : color, "hex_name" : hexes[i]}
    });

    return lodash.sortBy(consolidatedArray, 'color');
}

console.log(consolidateSortedArray(colors, argb));