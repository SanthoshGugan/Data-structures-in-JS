class CArray {
    obj = {
        length: 0,
        values: {},
        traverse: this.traverse
    };

    constructor(...rest) {
        this.initializeObj(rest);
        return this.obj;
    }

    private initializeObj(rest) {
        if (!(rest.length <= 0)) {
            this.obj = this.addPassedData(rest);
        }
    }

    private addPassedData(rest) {
        for (let i = 0; i < arguments[0].length; i++) {
            this.obj.values[i] = arguments[0][i];
        }
        this.obj.length = arguments[0].length;
        return this.obj;
    }

    traverse() {
        const array = this;
        let str = '';
        for (let i = 0; i < array.length; i++) {
            str += `${array.values[i]},`;
        }
        return str.slice(0, str.length - 1);
    }


}

var arr = new CArray(9, 10, 89);
console.log(arr);
console.log(arr.length);
console.log(arr.traverse());