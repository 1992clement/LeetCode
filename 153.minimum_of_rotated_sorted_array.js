/**
Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.

(i.e., 0 1 2 4 5 6 7 might become 4 5 6 7 0 1 2).

Find the minimum element.

You may assume no duplicate exists in the array.

Subscribe to see which companies asked this question.
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    if(nums.length == 1){
        return nums[0];
    }
    
    var start = 0;
    var end = nums.length - 1;
    
    while (start < end){
        var med = parseInt((start + end) / 2);
        
        if(nums[med] > nums[end]){
            start = med + 1;
        }else{
            end = med;
        }
    }
    return nums[start];
};