module.exports = function toReadable(number) {
    let num = {
        0: 'zero',
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine',
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
    }
    let numTens = {
        1: 'ten',
        2: 'twenty',
        3: 'thirty',
        4: 'forty',
        5: 'fifty',
        6: 'sixty',
        7: 'seventy',
        8: 'eighty',
        9: 'ninety',
    }
    if (number >= 0 && number < 20) {
        return num[number];
    } else if (number >= 20 && number < 100) {
        let tens = number.toString()[0];
        let units = number.toString()[1];
        if (units === '0') {
            return numTens[tens];
        } else
            return (numTens[tens] + ' ' + num[units]);
    } else if (number >= 100 && number < 1000) {
        let hundreds = number.toString()[0];
        let tens = number.toString()[1];
        let units = number.toString()[2];
        if (tens === '0' && units === '0') {
            return (num[hundreds] + ' hundred');
        } else if (tens === '0') {
            return (num[hundreds] + ' hundred ' + num[units]);
        } else if (units === '0') {
            return (num[hundreds] + ' hundred ' + numTens[tens]);
        } else if (tens === '1') {
            newTens = tens + units;
            return (num[hundreds] + ' hundred ' + num[newTens]);
        } else
            return (num[hundreds] + ' hundred ' + numTens[tens] + ' ' + num[units]);
    }
}
