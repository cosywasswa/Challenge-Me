var kthLargestElement = function(arr, k){
//  function max(arr){
//     let max = 0
//     for(let i=0;i<arr.length;i++){
//         if(arr[i] > max){
//             max = arr[i];
//         }
//     }
//     return max;
//  }

//  let maxVal = max(arr);
 let sorted = arr.sort((a,b) => b-a);
 for(let i=0;i<sorted.length;i++){
    if(i === (k-1)){
        return sorted[i];
    }
 }
}

let test = kthLargestElement([1,3,2,5,6,7,8,5,9], 2);
console.log(test);