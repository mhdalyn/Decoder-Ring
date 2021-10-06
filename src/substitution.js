// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope
  // let abet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
  let abet = "abcdefghijklmnopqrstuvwxyz";
  function substitution(input, alphabet, encode = true) {
    // your solution code here
    if (alphabet == undefined || alphabet.length != 26) return false;
    //loop through given alphabet to check for duplicate characters
    let dupetest = [];
    for (i = 0; i < alphabet.length; i++) {
      if (dupetest.includes(alphabet.charAt(i))) {
        return false;
      } else dupetest.push(alphabet.charAt(i));
    }
    let convertedMessage = "";
    for (i = 0; i < input.length; i++) {
      let a = 0;
      if (alphabet.search(input.charAt(i)) == -1) {
        convertedMessage += input.charAt(i);
      } else {
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
