module.exports = function toReadable (number) {
    if (number == 0) return 'zero';
    res = '';
    const singles = {
        0: '',
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine'
    };

    const teens = {
        10: 'ten',
        11: 'eleven',
        12: 'twelve',
        13: 'thirteen',
        14: 'fourteen',
        15: 'fifteen',
        16: 'sixteen',
        17: 'seventeen',
        18: 'eighteen',
        19: 'nineteen'
    };

    const decs = {
        0: '',
        2: 'twenty',
        3: 'thirty',
        4: 'forty',
        5: 'fifty',
        6: 'sixty',
        7: 'seventy',
        8: 'eighty',
        9: 'ninety',
    }


    let single = number % 10;
    number = Math.trunc(number / 10);
    let dec = number % 10;
    let hundred = Math.trunc(number / 10);

    if (hundred > 0) {
        res = res + singles[hundred] + ' hundred ';
    }
    if (dec == 1) {
        res = res + teens[10 + single];
    }else {
        res = res +  decs[dec] + ' ' + singles[single];
    }
    
  return res.replace(/\s+/g, ' ').trim();
}
