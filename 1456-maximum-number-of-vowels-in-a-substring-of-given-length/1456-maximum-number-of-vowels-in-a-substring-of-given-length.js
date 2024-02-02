/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function(s, k) {
    const vowObj = {'a': 1, 'e': 1, 'i': 1, 'o': 1, 'u': 1};
    let maxCount = 0;
    let vowCount = 0;
    let i = 0;
    let j = 0;
    while(j < s.length){
        if(vowObj[s[j]]) vowCount++;
        j++;
        if((j - i) === k) {
            maxCount = Math.max(maxCount, vowCount);
            if(vowObj[s[i]]) vowCount--;
            i++;
        }
        if(maxCount === k) return k;
    }
    return maxCount;
};