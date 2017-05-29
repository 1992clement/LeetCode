/**
Given a string, find the length of the longest substring without repeating characters.

Examples:

Given "abcabcbb", the answer is "abc", which the length is 3.

Given "bbbbb", the answer is "b", with the length of 1.

Given "pwwkew", the answer is "wke", with the length of 3. Note that the answer must be a substring, "pwke" is a subsequence and not a substring.
**/

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    if(s === ""){
        return 0;
    }
    var maxLength = 1;
    var length = 1;
    
    //left pointer of current substring
    var j = 0;
    //right pointer of current substring
    var k = 0;
    //current letter of current substring pointer
    var l = 0;
    
    while(l<s.length - 1){
        if(s[l] !== s[k+1]){
            if(l == k){
                l = j;
                k++;
                length = k - j + 1;
                if(length > maxLength){
                    maxLength = length;
                }
            }else{
                l++;
            }
        }else{
            j++;
            l = j;
            if(j>k){
                k++;
            }
            length = k - j + 1;
        }
    }
    return maxLength;
};