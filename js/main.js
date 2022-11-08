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
        console.log("La parola è palindroma")

    }else{

        return false;
        console.log("La parola non è palindroma")
    }   


}

let controlloPalindromo = palindrome("deye");
console.log(controlloPalindromo);