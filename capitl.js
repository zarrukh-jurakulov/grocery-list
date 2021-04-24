let myName = 'jasur'
let myName2 = 'jAsuR'

function toCapitalizeString(a) {
 //uppercase 
 let upperCaseInput = a.toUpperCase()
 //lowercase
 let lowerCaseInput = a.toLowerCase()
 //remove uppercase T
 let removeUpperCaseT = upperCaseInput.slice(0, 1)
 //remove first elemnt from lowercase and return remaining string
 let removeLowerCaseT = lowerCaseInput.substring(1)
 //combine strings here
 let combineStrings = removeUpperCaseT + removeLowerCaseT

 console.log(combineStrings)
}


toCapitalizeString('toshkent')
