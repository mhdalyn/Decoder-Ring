const expect = require("chai").expect;
const { substitution } = require("../src/substitution");
// Write your tests here!
describe("substitution", () => {
    describe("encoding", () => {
        it("correctly translates a given phrase based on the provided alphabet", () => {
            const expected = "dtllqut";
            const actual = substitution("message", "qwertyuiopasdfghjklzxcvbnm");
            expect(actual).to.equal(expected);
        })
        it("returns false when the alphabet provided is not exactly 26 characters", () => {
            const actual = substitution("message", "abcdefghijklmnopqrstuvxyz")
            expect(actual).to.be.false; 
        })
        it("returns false if there are any duplicates in the alphabet", () => {
            const actual = substitution("message", "abcdefghijklmnopqrstuvuxyz")
            expect(actual).to.be.false; 
        })
        it("ignores capital letters", () => {
            const expected = "dtllqut";
            const actual = substitution("message", "qwertyuiopasdfghjklzxcvbnm");
            expect(actual).to.equal(expected);
        })
        it("maintains spaces in the message", () => {
            const expected = "dn dtllqut";
            const actual = substitution("my message", "qwertyuiopasdfghjklzxcvbnm");
            expect(actual).to.equal(expected);
        })
    })
    describe("decoding", () => {
        it("correctly decodes messages", () => {
            const expected = "message";
            const actual = substitution("dtllqut", "qwertyuiopasdfghjklzxcvbnm", false);
            expect(actual).to.equal(expected);
        })
        it("maintains spaces in the message", () => {
            const expected = "my message";
            const actual = substitution("dn dtllqut", "qwertyuiopasdfghjklzxcvbnm", false);
            expect(actual).to.equal(expected);
        })
    })
})