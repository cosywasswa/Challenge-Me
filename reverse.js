//Reverse words in a string and extra spaces


var reverseWords = function(s){
    let result = [];
let str = s.replace(/[^a-zA-Z0-9]/g, ' ').split(' ').filter(word => word!=='');
for(let i=str.length-1;i>=0;i--){
result.push(str[i]);
}

return result.join(' ').trim();
}

const test = reverseWords("example   good a")
console.log(test)