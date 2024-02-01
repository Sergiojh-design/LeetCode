/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let l = 0;
    let r = height.length - 1;
    let area = 0;
    while(r > l){
        area = Math.max(area, (r - l)*Math.min(height[l], height[r])); 
        if(height[l] > height[r]){
            r--;
        } else {
            l++;
        }
    }
    return area;
};