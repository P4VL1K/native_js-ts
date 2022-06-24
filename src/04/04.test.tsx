import {eventWrapper} from "@testing-library/user-event/dist/utils";

test ("should take old men older then 90", () => {
    const ages = [90,12,34,14,5,42,94]

    const oldAges = ages.filter(age => age<90)

    expect(oldAges.length).toBe(1);
    expect(oldAges[0]).toBe(94)
})

test ("should take courses cheaper 160", () => {
    const courses = [
        {title: "CSS", price: 100},
        {title: "JS", price: 130},
        {title: "REACT", price: 170}
    ]

    const cheapCourses = courses.filter(course => course.price<160)

    expect(cheapCourses.length).toBe(2);
    expect(cheapCourses[0].title).toBe("CSS")
    expect(cheapCourses[1].title).toBe("JS")
})

test("get only completed tasks", () => {
    const tasks = [
        {id:1, title: "Meat", isDone: false},
        {id:2, title: "Sousage", isDone: true},
        {id:3, title: "Carrot", isDone: false},
        {id:4, title: "Cherry", isDone: true},
    ]

    const completedTasks = tasks.filter(task => !task.isDone)

    expect(completedTasks.length).toBe(2);
    expect(completedTasks[0].id).toBe(1)
    expect(completedTasks[1].id).toBe(3)

})
