// By adding this tiny function to your JavaScript, you can create <h1> elements, with a given CSS class.

// const h1 = (title, style) => {
//   return `<h1 class="${style}">${title}</h1>`
// }

// Challenge
const h1 = (...props) => {
  console.log(props)
  return `<h1 class="${props[1]}">${props[0]}</h1>`
}
// Now you can add an h1 inside the container article that already exists using the innerHTML property.

document.querySelector("#container").innerHTML = `
    ${h1("Marcus Fulbright", "xx-large")}
`
// Once that code runs, you will have the following DOM.

{/* <article id="container">
    <h1 class="xx-large">Marcus Fulbright</h1>
</article> */}

// This may seem overly complicated when all you need to do is write the h1 element where needed. Why create a function to do it for you? Consider the case where you need to display the information for 12 students in the DOM. Each student will be represented in HTML with the following structure.

{/* <div class="student">
    <h1>Student Name</h1>
    <section>Student class</section>
    <aside>Additional information</aside>
</div> */}
// You've already created a function for the h1, so you create two more functions for the section and the aside. However, you want to ensure that all section elements are bordered with a dashed line.

const section = (...props) => {
  console.log(props)
  return `<section class="bordered dashed ${props[1]}">${props[0]}</section>`
}

const aside = (...props) => {
    return `<aside class="${props[1]}">${props[0]}</aside>`
}

// Component Function
// You can then use these functions to create a student component function.

const student = (name, clazz, info, status) => `
    <div id="student">
        ${h1(name, status)}
        ${section(clazz, "section--padded")}
        ${aside(info, "pushRight")}
    </div>
`

const container = document.querySelector("#container")
container.innerHTML = student("Marcus Fulbright", "Algebra", "Not a bright student")
// 10 of the students are currently passing the course, and 2 students are not. You want passing, and non-passing, student information to be styled differently. You want passing students' names to be green, and non-passing students to be orange.

// Here's a sample student list.

const students = [
    {
        name: "Chris Miller",
        class: "History",
        info: "Failed last exam",
        score: 59
    },
    {
        name: "Courtney Seward",
        class: "History",
        info: "Has completed all homework",
        score: 91
    },
    {
        name: "Garrett Ward",
        class: "History",
        info: "Wonderful at helping other students",
        score: 88
    },
    {
        name: "John Dulaney",
        class: "History",
        info: "Has never missed a class or exam",
        score: 92
    },
    {
        name: "Greg Lawrence",
        class: "History",
        info: "Sub-par performance all around",
        score: 64
    },
    {
        name: "Leah Duvic",
        class: "History",
        info: "Wonderful student",
        score: 97
    },
    {
        name: "Jesse Page",
        class: "History",
        info: "Smokes too much. Distracting.",
        score: 76
    },
    {
        name: "Kevin Haggerty",
        class: "History",
        info: "Falls asleep in class",
        score: 79
    },
    {
        name: "Max Wolf",
        class: "History",
        info: "Talks too much",
        score: 83
    },
    {
        name: "Lissa Goforth",
        class: "History",
        info: "Asks pointless, unrelated questions",
        score: 78
    },
    {
        name: "Tyler Bowman",
        class: "History",
        info: "When was the last time he attended class?",
        score: 48
    },
    {
        name: "Ray Medrano",
        class: "History",
        info: "Needs to contribute to in-class discussions",
        score: 95
    }
]

// Inject multiple student components into the DOM by executing the student function

students.forEach( (currentStudent) => {
  let studentComponent = ""
  if(currentStudent.score >= 60) {
    studentComponent = student(currentStudent.name, currentStudent.class, currentStudent.info, "passing")
  } else {
    studentComponent = student(currentStudent.name, currentStudent.class, currentStudent.info, "failing")
  }
document.querySelector("#container").innerHTML += `
 ${studentComponent}
 `
})





