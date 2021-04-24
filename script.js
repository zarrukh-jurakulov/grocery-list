let inputArray = [];
let input = document.getElementById("groceryName");
console.log('nameInput', typeof input)
// let captalizeString = (str) => str[0].toUpperCase + str.slice(1).lowerCase();
// let captalizeWords = (str) => str.split(' ').map
//  (captalizeString).join(' ');
// captalizeString()






function groceryButton() {


 let messages = []
 if (input.value === '' || input.value == null) {
  messages.push('List empty')
  document.getElementById("messagesInput").innerHTML = messages;
  document.getElementById("messagesInput").style.color = "#641E16";
  document.getElementById("messagesInput").style.backgroundColor = "#E74C3C";

 } else {
  messages.push('Item added to the list');
  document.getElementById("messagesInput").innerHTML = messages;
  document.getElementById("messagesInput").style.color = "#0b5e3d";
  document.getElementById("messagesInput").style.backgroundColor = "#7DCEA0";

 }
 //uppercase 
 let upperCaseInput = input.value.toUpperCase()
 //lowercase
 let lowerCaseInput = input.value.toLowerCase()
 //remove uppercase T
 let removeUpperCaseT = upperCaseInput.slice(0, 1)
 //remove first elemnt from lowercase and return remaining string
 let removeLowerCaseT = lowerCaseInput.substring(1)
 //combine strings here

 let combineStrings = removeUpperCaseT + removeLowerCaseT;


 // capitalizing
 inputArray.push(combineStrings);
 // map method to HTML
 groceryList.innerHTML = "<ul>" + inputArray.map(function (inputArray) {
  return "<li>" + inputArray + "</li>"
 }).join('') + "</ul>";



}
function clearButton() {
 inputArray = [];
 location.reload();


}
groceryButton() 
