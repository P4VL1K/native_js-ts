
export type UserType = {
    name: string
    hair: number
    address: {city: string, house?: number}
}

export type LaptopType = {
    title: string
}
export type UserWithCompaniesType = UserType & {
    laptop: LaptopType
    companies: WithCompanies
}
export type UserWithLaptopType = UserType & {
    laptop: LaptopType
}
export type UserWithBooksType = {
    books: Array<string>
}
export type CompType = {
    id: number
    title: string
}
export type WithCompanies = Array<CompType>

export function makeHairstyle(u: UserType, power: number) {
    let copy = {...u, hair: u.hair / 2, address: {...u.address}}
    return copy
}

export function moveUser (u: UserWithLaptopType, city: string) {
    let copy = {...u, address: {...u.address, city: city}}
    return copy
}

export function upgradeLaptop(u: UserWithLaptopType, title: string) {
    return {...u, laptop: {...u.laptop, title: title}}
}

export function moveUserToOtherHouse (u: UserWithLaptopType & UserWithLaptopType, house: number) {
    return {...u, address: {...u.address, house: house}}
}

export function addNewBooksToUser (u: UserWithLaptopType & UserWithBooksType, newBooks: Array<string>) {
    return {...u, books: [...u.books, [...newBooks]]}
}

export function updateBook (u: UserWithLaptopType & UserWithBooksType, oldBook: string, newBook: string) {
    return {...u, books: u.books.map(b => b === oldBook ? newBook : b)}
}

export function removeBook(u: UserWithLaptopType & UserWithBooksType, removedBook: string) {
    return {...u, books: u.books.filter(b => b !== removedBook)}
}

export function updateCompanyTitle(u: UserWithCompaniesType, id: number, newTitle: string) {
    return {...u, companies: u.companies.map(i => i.id === id ? {...i, title: newTitle} : i)}
}

export function updateCompanyTitle2(companies: CompanyType, id: number, userName:string, newTitle: string) {
    let companyCopy = {...companies}
    companyCopy[userName] = companyCopy[userName].map(u => u.id === id ? {...u, title: newTitle} : u)
    return companyCopy
}

export type CompanyType = {
    [key: string] : Array<{id: number, title: string}>
}