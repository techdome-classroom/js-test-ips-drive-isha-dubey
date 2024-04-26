// function smallestMissingPositiveInteger(nums) {
//   if (nums.length === 0) {
//       return undefined;
//   }

//   const sortedNums = nums.filter(num => num > 0).sort((a, b) => a - b);

//   let smallestNum = 1;
//   for (const num of sortedNums) {
//       if (num === smallestNum) {
//           smallestNum++;
//       } else if (num > smallestNum) {
//           return smallestNum;
//       }
//   }
//   return smallestNum;
// }

// const result1 = smallestMissingPositiveInteger([3, 4, -1, 1]);
// console.log("Test case 1:", result1 === 2 ? "Passed" : "Failed");

// const result2 = smallestMissingPositiveInteger([1, 2, 0]);
// console.log("Test case 2:", result2 === 3 ? "Passed" : "Failed");

// const result3 = smallestMissingPositiveInteger([-1, -3, 4, 2]);
// console.log("Test case 3:", result3 === 1 ? "Passed" : "Failed");

// const allPassed = [result1, result2, result3].every(result => result === true);
// console.log("All tests passed:", allPassed ? "Yes" : "No");

// module.exports = smallestMissingPositiveInteger;


