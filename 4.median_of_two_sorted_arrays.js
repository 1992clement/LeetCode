/**
There are two sorted arrays nums1 and nums2 of size m and n respectively.

Find the median of the two sorted arrays. The overall run time complexity should be O(log (m+n)).
*/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    var sum = [];
    var j = 0;
    var k = 0;
    
    for(var i = 0; (k < nums2.length && j < nums1.length); i++){
        if(nums1[j] <= nums2[k]){
            sum[i] = nums1[j];
            j++;
        }else{
            sum[i] = nums2[k];
            k++;
        }
    }
    
    var toConcat = (k == nums2.length) ? nums1.slice(j, nums1.length) : nums2.slice(k, nums2.length);
    
    if(k == nums2.length){
        for(i; j < nums1.length; i++){
            sum[i] = nums1[j];
            j++;
        }
    }else{
        for(i; k < nums2.length; i++){
            sum[i] = nums2[k];
            k++;
        }
    }
    return (sum.length%2 == 1) ? sum[parseInt(sum.length/2)] : (sum[sum.length/2 - 1] + sum[sum.length/2])/2 ;
};