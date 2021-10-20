/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let arr = s.split(' ');
    let reverseArr = [];
    let obj = {};
    for(let i = arr.length - 1; i >= 0; i--){
        if(arr[i] !== ''){
            reverseArr.push(arr[i]);
        }
    }

    return reverseArr.join(' ');
};