var removeElement = function(nums, val) {
    let k = 0;
    for(let i=0; i<nums.length; i++){
        if(nums[i] !== val){
         
            nums[k++] = nums[i];
        }
    }
    return k;
   };

   const example = removeElement([1,2,3,4,5], 2);
   console.log(example);