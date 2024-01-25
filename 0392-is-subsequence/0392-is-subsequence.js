/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    let temp = 0;
    for(i = 0; i < t.length; i++){
        if(s[temp] === t[i]) temp++; 
    }
    return s.length === temp;
};