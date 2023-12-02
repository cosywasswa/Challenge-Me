var firstLast = (arr, target) =>{
    let output = [];
for(let i=0;i<arr.length;i++){
    let start = i;
    let end = arr.length-1;
    while(start < end){
        if(arr[start] === target && arr[end] === target){
            output.push(start, end);
        }
    end --;
    }
}
if(output){
    return output;
}else{
    return [-1, -1]
}
}

let test = firstLast([1,3,2,5,6,7,8,5,9], 5);
console.log(test);