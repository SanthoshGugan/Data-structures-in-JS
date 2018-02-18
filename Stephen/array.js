var CArray = (function () {
    function CArray() {
        var rest = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            rest[_i - 0] = arguments[_i];
        }
        this.obj = {
            length: 0,
            values: {},
            traverse: this.traverse
        };
        this.initializeObj(rest);
        return this.obj;
    }
    CArray.prototype.initializeObj = function (rest) {
        if (!(rest.length <= 0)) {
            this.obj = this.addPassedData(rest);
        }
    };
    CArray.prototype.addPassedData = function (rest) {
        for (var i = 0; i < arguments[0].length; i++) {
            this.obj.values[i] = arguments[0][i];
        }
        this.obj.length = arguments[0].length;
        return this.obj;
    };
    CArray.prototype.traverse = function () {
        var array = this;
        var str = '';
        for (var i = 0; i < array.length; i++) {
            str += array.values[i] + ",";
        }
        return str.slice(0, str.length - 1);
    };
    return CArray;
})();
var arr = new CArray(9, 10, 89);
console.log(arr);
console.log(arr.length);
console.log(arr.traverse());
