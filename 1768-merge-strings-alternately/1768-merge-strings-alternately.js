/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    let count = Math.max(word1.length, word2.length);
    let str = '';
    for(let i = 0; i < count ; i++){
        word1[i] ? str += word1[i] : '';
        word2[i] ? str += word2[i] : '';
    }
    return str;
};