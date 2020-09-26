const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(modification = true) {
    this.alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    this.square = [];
    this.modification = modification;
    this.generateSquare();
    this.message = '';
    this.key = '';
  }

  generateSquare() {
    for (let i = 0; i < this.alphabet.length; i++) {
      let row = this.alphabet.slice(i);
      row += this.alphabet.slice(0, i);
      this.square.push(row);
    }
  }
  getSquare() {
    return this.square;
  }

  repeatString(key, message) {
    let resultString = "";
    let repeatKey = key;
    for (let i = 0; i < message.length; i++) {
      if (this.alphabet.indexOf(message[i]) === -1) {
        resultString += message[i];
      } else {
        resultString += repeatKey[0];
        repeatKey = repeatKey.substring(1);
        if (repeatKey.length === 0) {
          repeatKey = key;
        }
      }
    }
    return resultString;
  }

  encrypt(message, key) {
    let encryptMessage = "";
    this.message = message.toUpperCase();
    this.key = key.toUpperCase();
    let newKey = this.repeatString(this.key, this.message);
     for (let it = 0; it < this.message.length; it++) {
      let i = this.alphabet.indexOf(this.message[it]);
      if (i === -1) {
        encryptMessage += this.message[it];
      } else {
        let j = this.alphabet.indexOf(newKey[it]);
        encryptMessage += this.square[i][j];
      }
    }

    return this.reverseMessage(encryptMessage);
  }

  decrypt(message, key) {
    let decryptMessage = "";
    this.message = message.toUpperCase();
    this.key = key.toUpperCase();
    let newKey = this.repeatString(this.key, this.message);
    for (let it = 0; it < this.message.length; it++) {
      let i = this.alphabet.indexOf(newKey[it]);
      if (i === -1) {
        decryptMessage += this.message[it];
      } else {
        let j = this.square[i].indexOf(this.message[it]);
        decryptMessage += this.alphabet[j];
      }

    }
    return this.reverseMessage(decryptMessage);
  }

  reverseMessage(message) {
    if (!this.modification) {
      let array = message.split('');
      array.reverse();
      message =  array.join('');
   }
   return message;
  }

}

module.exports = VigenereCipheringMachine;