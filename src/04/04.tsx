
type CoursesType = {
    title: string
    price: number
}

const courses = [
    {title: "CSS", price: 100},
    {title: "JS", price: 130},
    {title: "REACT", price: 170}
]

const cheapCourses = (courses: CoursesType) => {
    return courses.price < 150
}
