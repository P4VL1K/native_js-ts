import {createGreetingMeassages, PeopleType} from "./05";


let people: Array<PeopleType>

beforeEach( () => {
    people = [
        {name: "Dimas Potrubeiko", age: 21},
        {name: "Alexey Sergienya", age: 20},
        {name: "Andrey Bolaz", age: 23},
        {name: "Nikita Bobrovskiy", age: 22}
    ]
})


test("should get array of greeting messages", () => {

    const messages = createGreetingMeassages(people)

    expect(messages.length).toBe(4)
})