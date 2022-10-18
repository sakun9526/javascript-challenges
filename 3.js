/*
Write a JavaScript program to get the current date.

mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy
*/

const getCurrentDate = (date) => {
    const year = date.getFullYear()
    const month = date.getMonth() + 1
    const day = date.getDate()

    console.log(`${month}/${day}/${year}`)
}

getCurrentDate(new Date())