/**
A password is considered strong if below conditions are all met:

    It has at least 6 characters and at most 20 characters.
    It must contain at least one lowercase letter, at least one uppercase letter, and at least one digit.
    It must NOT contain three repeating characters in a row ("...aaa..." is weak, but "...aa...a..." is strong, assuming other conditions are met).

Write a function strongPasswordChecker(s), that takes a string s as input, and return the MINIMUM change required to make s a strong password. If s is already strong, return 0.

Insertion, deletion or replace of any one character are all considered as one change.
*/

/**
 * @param {string} s
 * @return {number}
 */
var strongPasswordChecker = function(s) {
    var typeChecker = [false, false, false];
    var charTypeToChange = 0;
    var followingCharsToChange = 0;
    var charsToAdd = 0;
    var charsToRemove = 0;
    //Séquences de caractères successifs
    var sequencesToProcess = [];
    
    if(s.length < 6){
        charsToAdd = 6 - s.length;
    }else if(s.length > 20){
        charsToRemove = s.length - 20;
    }
        
    var sIndex = 0;
    var sequencesToProcessIndex = 0;
    //on parcours la string
    while(sIndex < s.length){
        typeChecker[0] = isUpperCase(s[sIndex], typeChecker[0]);
        typeChecker[1] = isLowerCase(s[sIndex], typeChecker[1]);
        typeChecker[2] = isNumber(s[sIndex], typeChecker[2]);
        
        //On cherche les séquences de char successifs dans la chaine
        var comparedIndex = sIndex+1;
        while(s[sIndex]===s[comparedIndex] && comparedIndex<s.length){
            typeChecker[0] = isUpperCase(s[comparedIndex], typeChecker[0]);
            typeChecker[1] = isLowerCase(s[comparedIndex], typeChecker[1]);
            typeChecker[2] = isNumber(s[comparedIndex], typeChecker[2]);
            comparedIndex++;
        }
        //Si on a trouvé au moins 3 chars successifs
        if(comparedIndex-sIndex>=3){
            //On stock la séquence
            sequencesToProcess[sequencesToProcessIndex] = s.substring(sIndex, comparedIndex);
            sequencesToProcessIndex++;
        }
        sIndex = comparedIndex;
    }
    
    //on check combien de types il nous manque
    for(var i = 0; i<3; i++){
        if(typeChecker[i]===false){
            charTypeToChange++;
        }
    }
    
    //On vérifie combien on peut casser de séquences en retirant le moins possible de chars;
    //On retire 1 char de toutes les sequences dont length%3==0
    //Puis, on retire 2 chars de toutes les sequences dont length%3==1
    //Puis, on retire 3 chars de toutes les sequences restantes, jusqu'à ne plus avoir de sequence, ou de chars.
    if(charsToRemove > 0){
        var charsRemoved = 0;
        for(var loopCount = 0; loopCount < 3 && charsRemoved+loopCount < charsToRemove; loopCount++){
            for(var index = 0; index < sequencesToProcess.length && charsRemoved+loopCount < charsToRemove; index++){
                if(sequencesToProcess[index].length%3===loopCount){
                   sequencesToProcess[index] = sequencesToProcess[index].substring(0, sequencesToProcess[index].length-(1+loopCount)); 
                   charsRemoved+=(1+loopCount);
                }
            }
        }
    }
    //On vérifie si on a besoin de modifier des chars pour casser des séquences
    for(index=0; index<sequencesToProcess.length; index++){
        followingCharsToChange += parseInt(sequencesToProcess[index].length/3);
    }

    //Si on a besoin d'ajouter des chars, on peut utiliser ces chars pour compléter les types manquants, ou casser des séquences
    if(charsToAdd > 0){
        charTypeToChange -= charsToAdd; 
        followingCharsToChange -= charsToAdd;
    }
    //Si on a besoin de modifier des chars pour casser des séquences, on peut utiliser ces chars pour compléter les types de char manquants
    if(followingCharsToChange > 0){
        charTypeToChange -= followingCharsToChange;
    }else{
        followingCharsToChange = 0;
    }
    if(charTypeToChange<0){
        charTypeToChange = 0;
    }
    return(charTypeToChange + followingCharsToChange + charsToAdd + charsToRemove);
};

var isUpperCase = function(char, value){
    if(char.charCodeAt(0) >= 65 && char.charCodeAt(0) <= 90){
        return true;
    }
    return value;
};
var isLowerCase = function(char, value){
    if(char.charCodeAt(0) >=97 && char.charCodeAt(0) <= 122){
        return true;
    }
    return value;
};
var isNumber = function(char, value){
    if(char.charCodeAt(0) >= 48 && char.charCodeAt(0) <= 57){
        return true;
    }
    return value;
};