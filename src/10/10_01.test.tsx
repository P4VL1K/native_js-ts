import {
    addNewBooksToUser, CompanyType,
    makeHairstyle,
    moveUser,
    moveUserToOtherHouse, removeBook, updateBook, updateCompanyTitle, updateCompanyTitle2,
    upgradeLaptop,
    UserType,
    UserWithBooksType, UserWithCompaniesType,
    UserWithLaptopType, WithCompanies
} from "./10_01";




test('reference type test', () => {
    let user: UserType = {
        name: 'Dimych',
        hair: 32,
        address: {
            city: 'Minsk'
        }
    }

   let awesomeUser = makeHairstyle(user, 2)

    user.address.city = "Kiev"

    expect(awesomeUser.hair).toBe(16)
    expect(user.hair).toBe(32)
    expect(user.address.city).toBe('Kiev')
    expect(awesomeUser.address.city).toBe('Minsk')
})


test('change address', () => {
    let user: UserWithLaptopType = {
        name: 'Dimych',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'ZenBook'
        }
    }

    let movedUser = moveUser(user, 'Kiev')

    expect(user).not.toBe(movedUser)
    expect(user.address).not.toBe(movedUser.address)
    expect(user.laptop).toBe(movedUser.laptop)
})



test('upgrade laptop to mackbook', () => {
    let user: UserWithLaptopType = {
        name: 'Dimych',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'ZenBook'
        }
    }

    let userCopy = upgradeLaptop(user, "Mackbook")

    expect(userCopy).not.toBe(user)
    expect(userCopy.address).toBe(user.address)
    expect(userCopy.laptop).not.toBe(user.laptop)
    expect(userCopy.laptop.title).toBe("Mackbook")
})


test('move to other house', () => {
    let user: UserWithLaptopType & UserWithBooksType = {
        name: 'Dimych',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'ZenBook'
        },
        books: ['css','html','js','react']
    }

    let userCopy = moveUserToOtherHouse(user, 5)

    expect(userCopy).not.toBe(user)
    expect(userCopy.address.house).not.toBe(user.address.house)
    expect(userCopy.laptop).toBe(user.laptop)
    expect(userCopy.address).not.toBe(user.address)
    expect(userCopy.address.house).toBe(5)
    expect(user.address.house).toBe(12)
})


test('add new books to user', () => {
    let user: UserWithLaptopType & UserWithBooksType = {
        name: 'Dimych',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'ZenBook'
        },
        books: ['css','html','js','react']
    }

    let userCopy = addNewBooksToUser(user, ['ts','rest api'])

    expect(userCopy).not.toBe(user)
    expect(userCopy.address).toBe(user.address)
    expect(userCopy.laptop).toBe(user.laptop)
    expect(userCopy.books).not.toBe(user.books)
    expect(userCopy.books[4]).not.toBe('ts')
    expect(userCopy.books[5]).not.toBe('rest api')

})



test('update js to ts', () => {
    let user: UserWithLaptopType & UserWithBooksType = {
        name: 'Dimych',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'ZenBook'
        },
        books: ['css','html','js','react']
    }

    let userCopy = updateBook(user, 'js','ts')

    expect(userCopy).not.toBe(user)
    expect(userCopy.address).toBe(user.address)
    expect(userCopy.laptop).toBe(user.laptop)
    expect(userCopy.books).not.toBe(user.books)
    expect(userCopy.books[2]).toBe('ts')
    expect(userCopy.books.length).toBe(4)

})



test('remove js book', () => {
    let user: UserWithLaptopType & UserWithBooksType = {
        name: 'Dimych',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'ZenBook'
        },
        books: ['css','html','js','react']
    }

    let userCopy = removeBook(user, 'js')

    expect(userCopy).not.toBe(user)
    expect(userCopy.address).toBe(user.address)
    expect(userCopy.laptop).toBe(user.laptop)
    expect(userCopy.books).not.toBe(user.books)
    expect(userCopy.books[2]).toBe('react')
    expect(userCopy.books.length).toBe(3)

})



test('update company title', () => {
    let user: UserWithCompaniesType = {
        name: 'Dimych',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'ZenBook'
        },
        companies: [{id: 1, title: '≈пам'},{id: 2, title: 'IT-INCUBATOR'}]
    }

    let userCopy = updateCompanyTitle(user, 1, 'EPAM')

    expect(userCopy).not.toBe(user)
    expect(userCopy.address).toBe(user.address)
    expect(userCopy.laptop).toBe(user.laptop)
    expect(userCopy.companies).not.toBe(user.companies)
    expect(userCopy.companies[0].title).toBe('EPAM')
})

//1:18


test('update company', () => {
    let companies: CompanyType = {
        'Dimych': [{id: 1, title: 'epam'},{id: 2, title: 'IT-INCUBATOR'}],
        'Artem': [{id: 2, title: 'IT-INCUBATOR'}],
    }

    let userCopy = updateCompanyTitle2(companies, 1, 'Dimych', 'EPAM')

    expect(companies['Dimych']).not.toBe(userCopy['Dimych'])
    expect(companies['Artem']).toBe(userCopy['Artem'])
    expect(userCopy['Dimych'][0].title).toBe('EPAM')

})