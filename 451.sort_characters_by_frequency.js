/**
Given a string, sort it in decreasing order based on the frequency of characters.
*/

/**
 * @param {string} s
 * @return {string}
 * fromCharCode()
 * 
 */
var frequencySort = function(s) {
    var occurrences = [];
    var sorted = [];
    var result = "";
    for(var index = 0; index < s.length; index++){
        if(occurrences[s[index]]===undefined){
           occurrences[s[index]] = s[index]; 
        }else{
            occurrences[s[index]]+=s[index];
        }
    }
    for(var key in occurrences){
        if(sorted[occurrences[key].length]===undefined){
            sorted[occurrences[key].length] = "";
        }
        sorted[occurrences[key].length]+=occurrences[key];
    }
    for(index = sorted.length; index > 0; index--){
        if(sorted[index]!==undefined){
            result+=sorted[index];
        }
    }
    return result;
};