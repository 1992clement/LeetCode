/**
 All DNA is composed of a series of nucleotides abbreviated as A, C, G, and T, for example: "ACGAATTCCG". When studying DNA, it is sometimes useful to identify repeated sequences within the DNA.

Write a function to find all the 10-letter-long sequences (substrings) that occur more than once in a DNA molecule.

For example,
*/

/**
 * @param {string} s
 * @return {string[]}
 */
var findRepeatedDnaSequences = function(s) {
    var tmp = [];
    var result = [];
    var j = 0;
    for(var i = 0; i<s.length; i++){
        if(tmp[s.substring(i, i+10)] === undefined){
            tmp[s.substring(i, i+10)] = false;
        }else if(tmp[s.substring(i, i+10)] === false){
            tmp[s.substring(i, i+10)] = true;
            result[j] = s.substring(i, i+10);
            j++;
        }
    }
    return result;
};