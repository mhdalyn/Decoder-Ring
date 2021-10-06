// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // array of objects linking the letters and their corresponding number pair
  const cipher = [
    {num: 11, char: "a"},
    {num: 21, char: "b"},
    {num: 31, char: "c"},
    {num: 41, char: "d"},
    {num: 51, char: "e"},
    {num: 12, char: "f"},
    {num: 22, char: "g"},
    {num: 32, char: "h"},
    {num: 42, char: "(i/j)"},
    {num: 52, char: "k"},
    {num: 13, char: "l"},
    {num: 23, char: "m"},
    {num: 33, char: "n"},
    {num: 43, char: "o"},
    {num: 53, char: "p"},
    {num: 14, char: "q"},
    {num: 24, char: "r"},
    {num: 34, char: "s"},
    {num: 44, char: "t"},
    {num: 54, char: "u"},
    {num: 15, char: "v"},
    {num: 25, char: "w"},
    {num: 35, char: "x"},
    {num: 45, char: "y"},
    {num: 55, char: "z"}
  ]
  function polybius(input, encode = true) {
    // your solution code here
    try {
    if (encode) {
      let encryptedMessage = input.toLowerCase();
      encryptedMessage = encryptedMessage.replace(/i/g, 42)
      encryptedMessage = encryptedMessage.replace(/j/g, 42)
      cipher.forEach((key) => {
        while (encryptedMessage.includes(key.char)) {
        encryptedMessage = encryptedMessage.replace(key.char, key.num);
        }
      })
      return encryptedMessage;
    } else {
      let message = input.toLowerCase();
      let messageArray = message.split(" ");
      let decryptedMessage = [];
      messageArray.forEach((word) => {
        let decryptedWord = "";
        for(i = 0; i < word.length; i = i + 2) {
          const numPair = word.slice(i, i+2)
          const letterObj = cipher.find((key) => key.num == numPair)
          decryptedWord += letterObj.char;
        }
        decryptedMessage.push(decryptedWord)
      });
      return decryptedMessage.join(" ");
    };
    }
    catch {
      return false
    }
  };

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
