// Largest value in array
let value = [5, 6, 1, 8, 0, 4, 2, 3, 9, 7];
let max = value[0];
for (let i = 0; i <= value.length; i++) {
  if (value[i] > value) {
    value = lar[i];
  }
}

// console.log("Largest Value :", max);

let secondLargest = [5, 4, 3, 8, 1, 7, 0, 9, 2];
let temp = [];
// first we sort an array
for (let i = 0; i <= secondLargest.length; i++) {
  for (let j = i + 1; j <= secondLargest.length; j++) {
    // ascending order
    if (secondLargest[i] > secondLargest[j]) {
      temp = secondLargest[i];
      secondLargest[i] = secondLargest[j];
      secondLargest[j] = temp;
    }
    // descending order
    // if (secondLargest[j] > secondLargest[i]) {
    //   temp = secondLargest[j];
    //   secondLargest[j] = secondLargest[i];
    //   secondLargest[i] = temp;
    // }
  }
}

// console.log("Sorted Array :", secondLargest);
// console.log("Second Largest Value:", secondLargest[secondLargest.length - 2]);

// Reverse an string
let str = "Strings";
let reverseStr = "";
for (let i = str.length - 1; i > 0; i--) {
  reverseStr += str[i];
}

// console.log("Reverse an String :", reverseStr);

// reverse a number

let num = 12345;
let reverseNum = 0;

while (num > 0) {
  let digit = num % 10;
  reverseNum = reverseNum * 10 + digit;
  num = (num - digit) / 10;
  //   console.log(num);
}

// console.log("Reversed Number =>", reverseNum);

//  find is number is arm strong or not
let armStrong = 153;
let NoOfArmStrongDigit = armStrong.toString().length;
// console.log("NoOfArmStrongDigit==>", NoOfArmStrongDigit);
let temp1 = armStrong;
let sum = 0;

while (temp1 > 0) {
  // console.log(temp1);
  let digit = temp1 % 10;
  // console.log(digit);
  //   sum = sum + digit * digit * digit;
  //   sum = sum + digit ** 3;
  sum = sum + digit ** NoOfArmStrongDigit;
  // console.log(sum);
  temp1 = (temp1 - digit) / 10;
  // console.log(temp1);
}

// if (sum === armStrong) {
//   console.log(`${armStrong} is an ArmStrong Number`);
// } else {
//   console.log(`${armStrong} is not an armStrong number`);
// }

// find longest word

let para = "I am learning javascript language";
let longestWord = "";
let currentWord = "";
for (let i = 0; i <= para.length; i++) {
  if (para[i] !== " " && para[i] !== para.length) {
    currentWord = currentWord + para[i];
    // console.log("Curremt Word :", currentWord);
  } else {
    if (currentWord.length > longestWord.length) {
      longestWord = currentWord;
      //   console.log("Longest Word :", longestWord);
    }
    currentWord = "";
  }
}

// console.log("Longest Woord ==>", longestWord);

let arrZero = [1, 0, 2, 0, 3, 0, 4];
let result = [];
let zeroCount = 0;

for (let i = 0; i < arrZero.length; i++) {
  if (arrZero[i] !== 0) {
    result[result.length] = arrZero[i];
  } else {
    zeroCount++;
  }
}

for (let i = 0; i < zeroCount; i++) {
  result[result.length] = 0;
}

// console.log(result);

// String is isPalindrome

let palindromeStr = "level"; // test string
let isPalindrome = true; // assume karte hain string palindrome hai

let len = palindromeStr.length; // string ka length nikalte hain

for (let i = 0; i < len / 2; i++) {
  // sirf half string iterate karni hai
  if (palindromeStr[i] !== palindromeStr[len - 1 - i]) {
    // first aur last character compare karo
    console.log(palindromeStr[len - 1 - i]);
    isPalindrome = false; // agar mismatch → palindrome nahi
    break; // aur loop ko break karo
  }
}

// if (isPalindrome) {
//   console.log(palindromeStr + " is a palindrome");
// } else {
//   console.log(palindromeStr + " is not a palindrome");
// }

//remove duplicate from Array
let arr = [1, 2, 3, 3, 4, 5, 6, 6, 5, 7, 8, 9, 7];
let newArr = []; // yahan unique elements store honge

for (let i = 0; i < arr.length; i++) {
  // outer loop arr pe chale
  let isDuplicate = false;

  for (let j = 0; j < newArr.length; j++) {
    // inner loop newArr me check kare
    if (arr[i] === newArr[j]) {
      isDuplicate = true; // element duplicate hai
      break; // break inner loop
    }
  }

  // agar duplicate nahi hai, to add karo
  if (!isDuplicate) {
    newArr[newArr.length] = arr[i]; // push element manually
  }
}

// console.log("Unique Array =>", newArr);

// concurrence

let concurrence = "constantinapole";
let obj = {};

for (let i = 0; i < value.length; i++) {
  let occ = concurrence[i];
  obj[occ] = (obj[concurrence] || 0) + 1;
}

// console.log(obj);

// pyramid
let rows = 5;
let pyramid = "";

for (let i = 1; i <= rows; i++) {
  for (let j = i; j <= i; j++) {
    pyramid += "*";
  }
  // console.log(pyramid);
}

// Factorial

let facNum = 7;
let fact = 1;
for (facNum; facNum >= 1; facNum--) {
  fact = fact * facNum;

  // console.log(fact);
}

//  fibonacci series

let fiboNum = 5;
let n1 = 0;
let n2 = 1;
let n3;

for (let i = 1; i <= fiboNum; i++) {
  n3 = n1 + n2;
  n1 = n2;
  n2 = n3;
  // console.log(n1);
}
