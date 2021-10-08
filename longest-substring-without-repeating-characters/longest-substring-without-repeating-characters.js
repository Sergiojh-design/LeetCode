/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    if(s.length === 0) return 0;
    
    let i = 0;
    let j = 0;
    let value = 0;
    let tempvalue = 0;
    let obj = {};
    while(i < s.length){
        if(obj[s[j]] === undefined && s[j] !== undefined){
            obj[s[j]] = 1;
            j++;
            tempvalue++;
        } else {
            obj = {};
            i++;
            j = i;
            tempvalue = 0;
        }
        
        if(tempvalue > value){
            value = tempvalue;
        }
    }
    return value;
};