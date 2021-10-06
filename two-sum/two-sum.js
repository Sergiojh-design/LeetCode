/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let i = 0;
    let j = 1;
    let array = [];
    while (i < nums.length){
        if(nums[i]+nums[j] === target){
            array.push(i);
            array.push(j);
            return array;
        } else if (j === nums.length-1){
            i++;
            j = i + 1;
        } else {
            j++;
        }
    }
};