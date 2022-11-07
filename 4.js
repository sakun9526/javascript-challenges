/*
 Write a JavaScript program to rotate the string 'w3resource' in right direction by periodically 
 removing one letter from the end of the string and attaching it to the front.
*/

const defaultString = 'w3resource';
//convert string in to an array of seperate letters 
let defaultArray = defaultString.split("")
//reverse the array
console.log(defaultArray.reverse())
