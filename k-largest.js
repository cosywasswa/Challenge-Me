//Given an array and integer k, find the kth largest element in the array
//example
//input[5,6,2,8,9] k= 3
//output=6


var kthLargestElement = function(arr, k){
 let sorted = arr.sort((a,b) => b-a);
 for(let i=0;i<sorted.length;i++){
    if(i === (k-1)){
        return sorted[i];
    }
 }
}

let test = kthLargestElement([1,3,2,5,6,7,8,5,9], 2);
console.log(test);