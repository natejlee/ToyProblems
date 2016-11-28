/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    var num = x.toString().split('');

    if(num[0] === '-') {
        num.splice(0,1);
        num = -num.reverse().join('');
    } else {
        num = +num.reverse().join('');
    }

    if(num > Math.pow(2,31)) {
        return 0;
    }

    if(num < 1 - Math.pow(2,31)) {
        return 0;
    }

    return num;
};