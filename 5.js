/*
 Write a JavaScript program to determine whether a given year is a leap year
*/

/*
 Leap year rules

 1. If the year is evenly divisible by 4, go to step 2. Otherwise, go to step 5.
 2. If the year is evenly divisible by 100, go to step 3. Otherwise, go to step 4.
 3. If the year is evenly divisible by 400, go to step 4. Otherwise, go to step 5.
 4. The year is a leap year (it has 366 days).
 5. The year is not a leap year (it has 365 days).

*/

const checkLeapYear = (year) => {
    console.log(year)
}

checkLeapYear(2022)