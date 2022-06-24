



export type PeopleType = {
    name: string
    age: number
}

let people: Array<PeopleType> = [
    {name: "Dimas Potrubeiko", age: 21},
    {name: "Alexey Sergienya", age: 20},
    {name: "Andrey Bolaz", age: 23},
    {name: "Nikita Bobrovskiy", age: 22}
]


export const createGreetingMeassages = (people: Array<PeopleType>) => {
    return people.map( man => `Hello, ${man.name.split(" ")[0]}`)
}