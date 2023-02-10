module.exports = function toReadable(number) {
    const unit = {
        0: "zero",
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine',
    }
    const tenths = {
        10: 'ten',
        11: 'eleven',
        12: 'twelve',
        13: 'thirteen',
        14: 'fourteen',
        15: 'fifteen',
        16: 'sixteen',
        17: 'seventeen',
        18: 'eighteen',
        19: 'nineteen',
        20: 'twenty',
        30: 'thirty',
        40: 'forty',
        50: 'fifty',
        60: 'sixty',
        70: 'seventy',
        80: 'eighty',
        90: 'ninety',
    }
    let result;
    let numStr = number.toString();

    if (numStr.length <= 1) { return result = unit[number] }

    if (numStr.length === 2) {
        numStr[1] != 0 && numStr[0] < 2 ? result = tenths[number] : result = tenths[numStr[0] * 10] + ' ' + unit[numStr[1]];
        numStr[1] == 0 ? result = tenths[numStr[0] * 10] : '';

        return result
    }

    if (numStr.length === 3) {
        const h100 = 'hundred';
        numStr[1] == 0 && numStr[2] == 0 ? result = unit[numStr[0]] + ' ' + h100 : '';
        numStr[1] == 0 && numStr[2] != 0 ? result = unit[numStr[0]] + ' ' + h100 + ' ' + unit[numStr[2]] : '';
        numStr[1] <= 2 && numStr[1] != 0 ? result = unit[numStr[0]] + ' ' + h100 + ' ' + tenths[numStr[1] + numStr[2]] : '';
        numStr[1] >= 2 && numStr[1] != 0 ? result = unit[numStr[0]] + ' ' + h100 + ' ' + tenths[numStr[1] * 10] + ' ' + unit[numStr[2]] : '';
        numStr[1] >= 2 && numStr[2] == 0 ? result = unit[numStr[0]] + ' ' + h100 + ' ' + tenths[numStr[1] * 10] : '';

        return result
    }
}
