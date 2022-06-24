type CityType = {
    title: string
    countyTitle: string
}

type AddressType = {
    street: string
    city: CityType
}

export type StudentType = {
    tree: string
    windows: number
    rain: boolean
    address: AddressType
    technologies: Array<TechType>
}

type TechType = {
    id: number
    title: string
}




export const student: StudentType = {
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

