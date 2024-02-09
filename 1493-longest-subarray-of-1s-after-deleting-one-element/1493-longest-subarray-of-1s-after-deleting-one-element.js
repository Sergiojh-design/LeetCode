/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function(nums) {
    let l = 0, r = 0, k = 1;
    while(r < nums.length){
        if(nums[r] === 0) k--;
        if(k < 0){
            if(nums[l] === 0) k++;
            l++;
        }
        r++;
    }
    return r - l - 1;
};