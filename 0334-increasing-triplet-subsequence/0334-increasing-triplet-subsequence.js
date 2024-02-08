/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function(nums) {
    let firstNum = Infinity;
    let secondNum = Infinity;

    for(let i = 0; i < nums.length; i++){
        if(nums[i] > firstNum && nums[i] > secondNum){
            return true;
        } else if (nums[i] > firstNum) {
            secondNum = nums[i];
        } else {
            firstNum = nums[i];
        }
    }
    return false;
};