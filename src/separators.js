function thousands_separators(num) {
    var numArray = num.toString().split('.');
    var thousandSepartorNum = buildThousandSepartor(numArray);
    return thousandSepartorNum;
}


function buildThousandSepartor(numArray) {
    var integerArray = numArray[0].toString().split('');
    var integer = '';
    for (var i = 0; i < integerArray.length; i++) {
        integer += integerArray[i];
        if (Math.abs(integerArray.length - 1 - i) % 3 === 0 && integerArray.length - 1 - i !== 0) {
            integer += ',';
        }
    }

    if (numArray[1]) {
        return integer + '.' + numArray[1];
    } else {
        return integer;
    }

}

module.exports = thousands_separators;
