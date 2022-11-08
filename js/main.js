"use strict"


/**
 * @param {string} str
 * @return {string}
 */

function palindrome(str){
    const reg = /[\W_]/g;

    const smallStr = str.toLowerCase().replace(reg, '');

    const reversed = str.split("").reverse().join("");
    console.log(reversed)


    if(reversed === str){

        return true;

    }else{

        return false;
    }


}

let controlloPalindromo = palindrome("eye");
console.log(controlloPalindromo);