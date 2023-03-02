let myArray = [1, 2, 8, 6, 9];

let maxNumber = myArray[0];
let minNumber = myArray[0];

for (let i = 0; i <= myArray.length; i++){
    if (myArray[i] > maxNumber) {
        maxNumber = myArray[i];
    }

    if (myArray[i] < minNumber) {
        minNumber = myArray[i];
    }
}

console.log(`Số lớn nhất trong mảng là: ${maxNumber}`);
console.log(`Số nhỏ nhất trong mảng là: ${minNumber}`);
