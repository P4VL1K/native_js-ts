

type UserType = {
    name: string
    age: number
}

function increaseAge (u: UserType) {
    u.age++
}


test('big test', () => {

    let user = {
        name: "Pasha",
        age: 21
    }

    const superman = user

    superman.age = 1000

    expect(user.age).toBe(1000)


})

test('array test', () => {

    let users =[ {
        name: "Pasha",
        age: 21
    },
        {
            name: "Dasha",
            age: 24
        }]


    const supermans = users

    supermans.push({name: "Superman", age: 1000})

    expect(users[2]).toEqual({name: "Superman", age: 1000})


})


test('easy test', () => {
    let address = "Minsk"
    let user1 = {
        name: "Dasha",
        age: 24,
        address: address
    }
    address = "Soligorsk"
    let user2 = {
        name: "Dasha",
        age: 24,
        address: address
    }
    let user3 = {
        name: "Dasha",
        age: 24,
        address: address
    }
    expect(user3.address).toBe("Soligorsk")
    expect(user2.address).toBe( "Soligorsk")
})