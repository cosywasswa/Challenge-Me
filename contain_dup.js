var containsDuplicate = function(nums) {
    let output = [];
    for(let i=0; i<nums.length; i++){
        if(output.includes(nums[i])){
            return true
        } else {
            output.push(nums[i])
        }
    }
    return false
};