/*Symetrical array 
Given two arrays, return an array with elements not in both arrays 
in other words return an array that is a symetrical difference of the
two arrays;
example;
input- const array1 = ['f', 'k', 'l', 'n']
const array2 = ['f', 'm', 'n']
output ['k', 'l', 'm']
*/
function compareTwoArrays(array1, array2){
    const result = [];
    for(let i=0;i<array1.length;i++){
        if(!array2.includes(array1[i])){
            result.push(array1[i]);
        }
    }
    for(let i=0;i<array2.length;i++){
        if(!array1.includes(array2[i])){
            result.push(array2[i]);
        }
    }
return result;
}

const array1 = ['f', 'k', 'l', 'n']
const array2 = ['f', 'm', 'n']





console.log(compareTwoArrays(array1, array2))












//array1=>[1,2,5], array2=>[4,1,2,6]
//=>[5,4,6]
//NESTED FOR LOOP array1-array2
//1
//result