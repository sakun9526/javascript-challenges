/*
 Write a JavaScript program to display the current day and time in the following format.

 Sample Output : Today is : Tuesday.
Current time is : 10 PM : 30 : 38

*/
let dayOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let today = new Date().getDay();

console.log('Today is: ',dayOfWeek[today])