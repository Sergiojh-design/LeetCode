/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function(gain) {
    let highest = 0
    let current = 0;
    for(let i = 0; i < gain.length; i++){
        current += gain[i];
        highest = Math.max(highest, current)
    }
    return highest;
};