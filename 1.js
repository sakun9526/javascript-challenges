/*
 Write a JavaScript program to display the current day and time in the following format.

 Sample Output : Today is : Tuesday.
Current time is : 10 PM : 30 : 38

*/

//Regular answer 

let dayOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let today = new Date().getDay();

console.log('Today is: ',dayOfWeek[today])

let hour = new Date().getHours()
let minutes = new Date().getMinutes()
let seconds = new Date().getSeconds()
let ampm = hour >= 12 ? 'pm' : 'am';

console.log('Time is: ', `${hour}${ampm} : ${minutes} : ${seconds}`)

//improved answer
const getDateTime = (date) => {
    const dayOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const today = date.getDay();
    const hour = date.getHours()
    const minutes = date.getMinutes()
    const seconds = date.getSeconds()
    const ampm = hour >= 12 ? 'pm' : 'am';

    console.log(`Today is: ${dayOfWeek[today]} and Time is: ${hour}${ampm} : ${minutes} : ${seconds}`)
}

getDateTime(new Date())
