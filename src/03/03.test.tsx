import {StudentType} from "../02/02";
import {addSkill, doesStudentLiveIn, makeRainActive} from "./03";

let student: StudentType;
beforeEach(() => {
    student= {
        tree: "big",
        windows: 234,
        rain: false,
        address: {
            street: "Surganova",
            city: {
                title: "Minsk",
                countyTitle: "Belarus"
            }
        },
        technologies: [
            {
                id: 1,
                title: "HTML"
            },
            {
                id: 2,
                title: "React"
            },
            {
                id: 3,
                title: "CSS"
            },
        ]
    }
})



test('new tech skill shoul be added to student', () => {

    expect(student.technologies.length).toBe(3);

    addSkill(student, "JS");

    expect(student.technologies.length).toBe(4);
    expect(student.technologies[3].title).toBe("JS");
    expect(student.technologies[3].id).toBeDefined();
})

test("student should be rain", ()=>{
    expect(student.rain).toBe(false)

    makeRainActive(student)

    expect(student.rain).toBe(true)

})

test('does student live in city', ()=>{

    let res1 = doesStudentLiveIn(student, "New-York")
    let res2 = doesStudentLiveIn(student, "Minsk")

    expect(res1).toBe(false)
    expect(res2).toBe(true)
})
