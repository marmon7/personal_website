let courselist = [
    {code: "ACIT 1620", name: "Fundemental Web Technologies" },
    {code: "ACIT 1515", name: "Scripting for IT"},
    {code: "ACIT 1630", name: "Database Systems"}
]

do {
    answer = prompt("Course Number?(4 digit code)")
    if (answer.length != 4) {
        answer = 'a'
    }
} while (isNaN(answer))

let message = ''
for (let course of courselist) {
    if (course.code.includes(answer)) {
        message = `Yes I am taking the course: ${course.code} - ${course.name}`
        console.log(message)
    }

}
if (message == '') {
    let newcourse = {
        code: answer,
        name: null
    }
    courselist.push(newcourse)
    console.log("Successfully added course")
}

    
