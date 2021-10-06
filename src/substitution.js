// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  let abet = "abcdefghijklmnopqrstuvwxyz";
  function substitution(input, alphabet, encode = true) {

    //checks to make sure alphabet exists and has a length of exactly 26
    if (alphabet == undefined || alphabet.length != 26) return false;

    //loop through given alphabet to check for duplicate characters
    let dupeTest = [];
    for (i = 0; i < alphabet.length; i++) {
      if (dupeTest.includes(alphabet.charAt(i))) {
        return false;
      } else dupeTest.push(alphabet.charAt(i));
    }

    //converts the message using the encoding alphabet
    let convertedMessage = "";
    for (i = 0; i < input.length; i++) {
      let a = 0;

      //ignores characters not provided in the alphabet
      if (alphabet.search(input.charAt(i)) == -1) {
        convertedMessage += input.charAt(i);
      } else {
        
        //tests to determine whether the program should encode or decode
        if (encode == true) {
          a = abet.search(input.charAt(i));
          convertedMessage += alphabet.charAt(a);
        } else {
          a = alphabet.search(input.charAt(i));
          convertedMessage += abet.charAt(a);
        }
      }
    }

    return convertedMessage;
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
