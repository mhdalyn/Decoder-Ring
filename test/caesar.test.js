const expect = require("chai").expect;
const {caesar} = require("../src/caesar.js");

describe ("caesar", () => {

    it("returns false if the shift value is not present", () => {
        const emptyShift = caesar("Words")
        expect(emptyShift).to.be.false;
    });

    it("returns false if the shift value is equal to 0", () => {
        const tooZero = caesar("Words", 0)
        expect(tooZero).to.be.false;
    });

    it("returns false if the shift value is greater than 25", () => {
        const tooBig = caesar("Words",26)
        expect(tooBig).to.be.false;
    });

    it("returns false if the shift value is less than -25", () => {
        const tooSmall = caesar("Words"-26)
        expect(tooSmall).to.be.false;
    });
    
    it("ignores capital letters", () => {
        const result = caesar("Test", 2);
        expect(result).to.equal("vguv")
        
    })
    
    it("handles shifts that go past the end of the alphabet", () => {
        const expectedAbove = "yza" //xyz shifted +1
        const actualAbove = caesar("xyz", 1)
        expect(actualAbove).to.equal(expectedAbove);
    })

    it("handles shifts that go past the beginning of the alphabet", () => {
        const expectedBelow = "zab" //abc shifted -1
        const actualBelow = caesar("abc", -1)
        expect(actualBelow).to.equal(expectedBelow);
    })

    it("maintains spaces and other nonalphabetic symbols in the message, before and after encoding or decoding", () => {
        const expected = "yargen-blargen."
        const actual = caesar("bdujhq-eodujhq.", -3);
        expect(actual).to.equal(expected);
    })
})