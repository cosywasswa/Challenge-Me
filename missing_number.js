var missingNumber = function(nums) {
    nums.sort((a, b) => a + b);
   let miss = 0;
   for(let i=0; i<nums.length;i++){
       if(nums[i] - nums[i-1] > 1){
         number = nums[i]-1
         miss = number;
       }
   }
    if (miss === 0) {
      miss = nums[nums.length - 1] + 1;
    }
   return miss;
  };