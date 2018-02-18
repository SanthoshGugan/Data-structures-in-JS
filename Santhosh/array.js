export class ArrayCustom {
  constructor() {
    this.array = {};
    this.lastIndex = -1;
  }

  push = function(element) {
    this.lastIndex++;
    this.array[this.lastIndex] = element;
  };

  pop = function(element) {
    let popEle = this.array[this.lastIndex];
    delete this.array[this.lastIndex];
    this.lastIndex--;
    return popEle;
  };

  traverse = function() {
    let outputStr = "";
    for (let index in this.array) {
      outputStr += this.array[index] + " ";
    }
    return outputStr;
  };

  insertAt = function(element, index) {
    if (this.array.hasOwnProperty(index)) {
      let tempEle = this.array[index];
      this.array[index] = element;
      pushAtIndex(tempEle, index + 1);
    } else {
      this.array[index] = element;
    }
  };

  delete = function(index) {
    if (this.array.hasOwnProperty(index)) {
      let tempEle = this.array[index];
      delete this.array[index];
    }
  };

  update = function(element, index) {
    this.array[index] = element;
  };

  get = function(index) {
    if (this.array.hasOwnProperty(index)) {
      return this.array[index];
    } else {
      return undefined;
    }
  };

  search = function(element){
      for(let index in this.array){
          if(this.array[index] == element){
            return index;
          }
      }
      return -1;
  }
}
