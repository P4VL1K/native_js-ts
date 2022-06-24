import {splitIntoWords, sum} from "./01";

test ('sum should be correct', () => {

    const a = 4;
    const b = 6;
    const c = 7;

    const result1 = sum(a,b)
    const result2 = sum(b,c)

    expect(result1).toBe(10)
    expect(result2).toBe(13)
})

test ('splitting into words shoild be corrected', () => {
    const sent1 = "Hello my friend!"
    const sent2 = "JS - the best programming language."

    const result1 = splitIntoWords(sent1)
    const result2 = splitIntoWords(sent2)

    expect(result1.length).toBe(3)
    expect(result1[0]).toBe("hello")
    expect(result1[1]).toBe("my")
    expect(result1[2]).toBe("friend")
})