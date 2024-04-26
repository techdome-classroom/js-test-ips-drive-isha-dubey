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
    else if (num > smallest) {
      return smallestNum
    }
   }
   return smallestNum
  }
  
  module.exports = smallestMissingPositiveInteger;

