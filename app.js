

// 18-masala

// let str = "Hello World";
// function countCase(str) {
//     const uppercaseCount = str.split('').filter(char => char >= 'A' && char <= 'Z').length;
//     const lowercaseCount = str.split('').filter(char => char >= 'a' && char <= 'z').length;
//
//     return { uppercase: uppercaseCount, lowercase: lowercaseCount };
// }
//
// console.log(countCase(str)); // {uppercase: 2, lowercase: 8}



// 19-masala

// let number = [1, 2, 3, 4, 5, 6];
// function evenOddIndexSums(n) {
//     let evenSum = 0;
//     let oddSum = 0;
//     n.forEach((item, index) => {
//         if (index % 2 === 0) {
//             evenSum += item;
//         } else {
//             oddSum += item;
//         }
//     });
//     return { evenSum, oddSum };
// }
//
// console.log(evenOddIndexSums(number));


// 20-masala

// let obj = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
// let obj2 = [];
// for (let i = 0; i < obj.length; i++) {
//     let res = [];
//     for (let j = 0; j < obj.length; j++) {
//         res.push(obj[j][i]);
//     }
//     obj2.push(res);
// }
// console.log(obj2);


// 21-masala

// let str2 = "Hello World! How are you?";
// console.log(str2.split(' ').join(''))







// 22-masala
// function Anagrams(str1,str2){
//     if(str1.length !== str2.length){
//         return false;
//     }
//     let sort = (str) => str.split('').sort().join('');
//     return sort(str1) === sort(str2);
// }
//
// console.log(Anagrams("listen", "silent"));
// console.log(Anagrams("hello", "world"))











// 23-masala

// function mostFrequentElement(arr) {
//     let obj = {};
//     arr.forEach(item => {
//         obj[item] = (obj[item] || 0) + 1;
//     });
//     return arr.filter((item,index) => obj[item] > 1 && arr.indexOf((item) === index))
// }
//
//
// console.log(mostFrequentElement([1, 3, 2, 1, 4, 1, 3, 1, 5, 1])); // 1



// 24-masala
// function sumOfDigits(str) {
//     let sum = 0;
//     for (let char of str) {
//         if (!isNaN(parseInt(char))) {
//             sum += parseInt(char);
//         }
//     }
//     return sum;
// }
//
// console.log(sumOfDigits("abc123def45"));

// 25-masala

// function letterFrequency(str) {
//   let obj = {};
//   for(let item of str) {
//       if(item !== ' '){
//           obj[item] = (obj[item] || 0) + 1;
//       }
//   }
//   return obj;
// }
//
// console.log(letterFrequency("hello world"));
