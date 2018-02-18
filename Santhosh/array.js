class ArrayCustom {
  constructor() {
    this.array = {};
    this.lastIndex = -1;
  }

  push(element) {
    this.lastIndex++;
    this.array[this.lastIndex] = element;
  };

  pop(element) {
    let popEle = this.array[this.lastIndex];
    delete this.array[this.lastIndex];
    this.lastIndex--;
    return popEle;
  };

  traverse() {
    let outputStr = "";
    for (let index in this.array) {
      outputStr += this.array[index] + " ";
    }
    return outputStr;
  };

  insertAt(element, index) {
    if (this.array.hasOwnProperty(index)) {
      let tempEle = this.array[index];
      this.array[index] = element;
      pushAtIndex(tempEle, index + 1);
    } else {
      this.array[index] = element;
      this.lastIndex = this.lastIndex < index ? index : this.lastIndex;
    }
  };

  delete(index) {
    if (this.array.hasOwnProperty(index)) {
      let tempEle = this.array[index];
      delete this.array[index];
      this.lastIndex = this.lastIndex == index ? this.lastIndex - 1 : this.lastIndex;
    }
  };

  update(element, index) {
    this.array[index] = element;
  };

  get(index) {
    if (this.array.hasOwnProperty(index)) {
      return this.array[index];
    } else {
      return undefined;
    }
  };

  search(element){
      for(let index in this.array){
          if(this.array[index] == element){
            return index;
          }
      }
      return -1;
  }
}
