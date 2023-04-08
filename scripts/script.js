let courselist = []
function createCourseArray() {
    let codes = document.querySelectorAll("li>a")
    let dates = document.querySelectorAll("li>p:nth-child(2)")
    for (let idx = 0; idx < codes.length; idx++) {
        let course = {code: codes[idx].textContent, date: dates[idx].textContent}
        courselist.push(course)
    }
}
createCourseArray()

function findCourse(courselist) {
    let answer = 1
    while (isNaN(answer) === false)  {
        let user = prompt("Course Number?(4 digit code)")
        if (user.length != 4) {
            continue
        }
        answer = user
        break
    }
    
    course_answer = "#course"+answer
    
    for (let course of courselist) {
        if (course.code.includes(answer)) {
            let select = document.querySelector(course_answer)
            select.courselist.add("green")
            
        }
    }
}
findCourse(courselist)
// let message = ''
// for (let course of courselist) {
//     if (course.code.includes(answer)) {
//         message = `Yes I am taking the course: ${course.code} - ${course.name}`
//         console.log(message)
//     }

// }
// if (message == '') {
//     let newcourse = {
//         code: answer,
//         name: null
//     }
//     courselist.push(newcourse)
//     console.log("Successfully added course")
// }

    
