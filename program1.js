function smallestMissingPositiveInteger(nums) {

  if (nums.length === 0){
    return undefined
  }

  nums.sort((a , b) => a - b)

   let smallestNum = 1
   for(const num of nums){
    if(num === smallestNum){
      smallestNum++
    }
    else if (num > smallestNum) {
      return smallestNum
    }
   }
   return smallestNum
  }

  function runTestCases() {
    const results = [];

    // Test case 1
    const result1 = smallestMissingPositiveInteger([3, 4, -1, 1]);
    results.push(result1 === 2);

    // Test case 2
    const result2 = smallestMissingPositiveInteger([1, 2, 0]);
    results.push(result2 === 3);

    // Test case 3
    const result3 = smallestMissingPositiveInteger([-1, -3, 4, 2]);
    results.push(result3 === 1);

    // Output results
    console.log("Test case 1:", result1 === 2 ? "Passed" : "Failed");
    console.log("Test case 2:", result2 === 3 ? "Passed" : "Failed");
    console.log("Test case 3:", result3 === 1 ? "Passed" : "Failed");

    // Check if all tests passed
    const allPassed = results.every(result => result);
    console.log("All tests passed:", allPassed ? "Yes" : "No")
  
  module.exports = smallestMissingPositiveInteger;

