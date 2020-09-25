const CustomError = require("../extensions/custom-error");

let chainMaker = {
  'chain': [],
  'link': '~~',

  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    this.chain.push(`( ${(value === null) ? value : value.toString()} )`);
    return this;
  },
  removeLink(position) {

    let index = +position - 1;
    if (index > -1 && index < this.getLength()) {
      this.chain.splice(index, 1);
    } else {
       try {
        if (this.chain.indexOf(position) === -1) {
          this.chain = [];
          throw Error;     
        }
        this.chain.splice(this.chain.indexOf(position), 1);
      } catch (error) {

        this.chain = [];
        throw Error;
      }
    }
    return this;
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    const result = this.chain.join(this.link);
    this.chain = [];
    return result;
  }
};

module.exports = chainMaker;