import React from "react";
import {ManType} from "./Destructuring";


export type StreetType = {
    title: string
}

export type AdressType = {
    street: StreetType
}

export type LessonsType = {
    title: string
}


let props: ManType
beforeEach(() => {
    props = {
        name: 'Pasha',
        age: 21,
        lessons: [{title: "1"}, {title: "2"}, {title: "3"}],
        adress: {
            street: {
                title: 'Surganova'
            }
        }
    }
})

test('', () => {

    const [ls1, ...restLessons] = props.lessons

    let a = props.lessons[0]
    let b = props.lessons[1]

    expect(a.title).toBe("1")
    expect(b.title).toBe("2")

    expect(ls1.title).toBe("1")
    expect(restLessons.length).toBe(2)
    expect(restLessons[1].title).toBe("3")
    // expect(ls2.title).toBe("2")

})