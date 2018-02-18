let array1 = new ArrayCustom();
array1.push(2, 3, 5, 67, 89);
array1.insertAt(5,2);
console.log(array1.traverse());
array1.pop();
console.log(array1.traverse());
array1.insertAt(3,100);
console.log(array1.length());