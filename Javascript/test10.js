//Destructuring of objects
const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: " hitesh"
}
// course.courseInstructor

const {courseInstructor : instructor} = course
console.log(instructor);

//React Method 
// const  navbar = ({company}) => {  //it is being destructured

// }

// navbar(company = "hitesh")

//JSON
// {
//     //structure of json
//     "coursename": "js in hindi",
//     "price": "free",
//     "courseInstructor": " hitesh"
// }
/*
APIs 
{
    either we get in objects 
}
we get API in form of arrays 
or 
[
    {},
    {},
    {}
]

*/