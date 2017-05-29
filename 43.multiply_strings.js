/**
Given two non-negative integers num1 and num2 represented as strings, return the product of num1 and num2.

Note:

    The length of both num1 and num2 is < 110.
    Both num1 and num2 contains only digits 0-9.
    Both num1 and num2 does not contain any leading zero.
    You must not use any built-in BigInteger library or convert the inputs to integer directly.
*/

/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
    if(num1 === '0' || num2 === '0'){
        return '0';
    }
    
    if(num1 === '1'){
        return num2;
    }
    
    if(num2 === '1'){
        return num1;
    }
    
    var size1 = num1.length;
    var size2 = num2.length;
    var length = size1 + size2;
    var indexes = [];
    
    for(var i = size2 - 1; i >= 0; i--){
        for(var j = size1 - 1; j >= 0; j --){
            var mult = (num1[j] - '0') * (num2[i] - '0');
            var idx1 = i + j;
            var idx2 = i + j + 1;
            
            if(typeof(indexes[idx2])=='undefined'){
                indexes[idx2] = 0;
            }
            var sum = parseInt(mult) + parseInt(indexes[idx2]);
            
            if(typeof(indexes[idx1])=='undefined'){
                indexes[idx1] = 0;
            }
            indexes [idx1] += parseInt(sum / 10);
            indexes[idx2] = sum % 10;
        }
    }
    
    var count = 0;
    var builder = '';
    
    for(var idx = 0; idx < indexes.length; idx++){
        if(count !== 0 || (count === 0 && indexes[idx] !== 0 )){
            builder += indexes[idx];
        }
        count = 1;
    }
    if(builder.length === 0){
        return '0';
    }else{
        return builder;
    }  
};