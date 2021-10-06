// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {

  function caesar(input, shift, encode = true) {
    //conditional test that filters out function calls with incorrect shift codes
    if (shift == 0 || shift < -25 || shift > 25 || !shift) return false;

    let cipher = shift
    //allows decoding messages by reversing shift
    if (encode === false) {
      cipher = -cipher;
    }

    //converts input string into a lowercase array
    const message = input.toLowerCase().split("");

    //creates a new array of encrypted character codes for the message array
    let encryptedMessage = message.map((char) => {
      let newChar = char.charCodeAt(0);
      //allows non-letter characters to bypass being modified
      if (newChar >= 97 && newChar <= 122) {
        const moddedChar = newChar + cipher;
        //tests if a modified character would fall inside the letter range and adjusts it if it doesn't
        if (moddedChar >= 97 && moddedChar <= 122) {
          newChar += cipher;
        } else if (moddedChar < 97) {
          newChar += cipher + 26;
        } else if (moddedChar > 122) {
          newChar += cipher - 26;
        }
      }
      return newChar;
    });

    //returns a string constructed from the values stored in the encrypted array
    return String.fromCharCode(...encryptedMessage);
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
