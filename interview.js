// Find the largest value from an array
let array = [2, 1, 6, 8, 9, 7, 3, 5, 6, 4, 1, 28, 0, 8, 10, 12, 19, 15];
let max = array[0];
for (let i = 0; i < array.length; i++) {
  if (array[i] > max) {
    max = array[i];
  }
}

// console.log("Largest value from an array==>", max);

// Sort an array
let temp = [];
for (let i = 0; i < array.length; i++) {
  for (let j = i + 1; j < array.length; j++) {
    if (array[i] > array[j]) {
      temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
  }
}

// console.log("Sorted Array :", array);
// Second largest value
// console.log("Second largest value :", array[array.length - 2]);

// print pyramid
let rows = 5;
let pyramid = "";
for (let i = 1; i <= rows; i++) {
  for (let j = i; j <= i; j++) {
    pyramid += "*";
  }
  //   console.log(pyramid);
}

// Reverse a string
let str = "Strings";
let newStr = "";
for (let i = str.length - 1; i >= 0; i--) {
  newStr += str[i];
}
// console.log(newStr);

//  Reverse a number
let num = 12345;
let reverseNum = 0;

while (num > 0) {
  let digit = num % 10;
  reverseNum = reverseNum * 10 + digit;
  num = (num - digit) / 10;
}

// console.log(reverseNum);

// Remove Duplicate Value from an array
let newArr = [];
for (let i = 0; i < array.length; i++) {
  let isDuplicate = false;
  for (let j = 0; j < newArr.length; j++) {
    if (array[i] === array[j]) {
      isDuplicate = true;
      break;
    }
  }
  if (!isDuplicate) {
    newArr.push(array[i]);
  }
}

// console.log("Duplicate Value removed :", newArr);

// count duplicate value from an array or find concurrency same kaam string ke lia bi hoga srf array ki jaga string use karo
let dublicateCount = {};

for (let i = 0; i < array.length; i++) {
  let count = 0;

  for (let j = 0; j < array.length; j++) {
    if (array[i] === array[j]) {
      count++;
    }
  }

  dublicateCount[array[i]] = count;
}

// console.log("Concurreny of String or an Array :",dublicateCount);

// Find if String is Palindrome or not

let palindromStr = "madam";
let reverseStr = "";
for (let i = palindromStr.length - 1; i >= 0; i--) {
  reverseStr += palindromStr[i];
}
if (palindromStr === reverseStr) {
  console.log(`The ${palindromStr} is not palindrome`);
} else {
  console.log(`${palindromStr} is not palindrome`);
}
