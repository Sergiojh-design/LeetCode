/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    let vowles = {'a': 1, 'e': 1, 'i': 1, 'o': 1, 'u': 1, 'A': 1, 'E': 1, 'I': 1, 'O': 1, 'U': 1,};
    let start = 0;
    let end = s.length - 1;
    let arr = s.split('');
    while(start < end){
        if(vowles[arr[start]] && vowles[arr[end]]){
            [arr[start], arr[end]] = [arr[end], arr[start]];
            start++;
            end--;
        } else if(vowles[arr[start]]){
            end--;
        } else {
            start++;
        }
    }
    return arr.join('');
};