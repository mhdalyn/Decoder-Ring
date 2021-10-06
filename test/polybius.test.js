const {polybius} = require("../src/polybius.js")
const expect = require("chai").expect;
// Write your tests here!

describe("Polybius", () => {
    describe("encoding", () => {
        it("translates i and j to 42 when encoding", () => {
            const expected = "42424242"
            const actual = polybius("ijji");
            expect(actual).to.equal(expected);
        })

        it("ignores capital letters", () => {
            const expected = "21112452 21112452";
            const actual = polybius("BARK bark");
            expect(actual).to.equal(expected);
        })

        it("maintains spaces in the message, before and after encoding", () => {
            const expected = "2311423344114233 3453113151";
            const actual = polybius("maintain space");
            expect(actual).to.equal(expected);
        })
    })
    describe("decoding", () => {
        it("translates 42 to (i/j) when decoding", () => {
            const expected = "(i/j)";
            const actual = polybius("42", false);
            expect(actual).to.equal(expected);
        })
        
        it("maintains spaces in the message, before and after decoding", () => {
            const expected = "ma(i/j)nta(i/j)n space";
            const actual = polybius("2311423344114233 3453113151", false);
            expect(actual).to.equal(expected);
        })
    })
})