var decrypt = function(str){
    let codes = [];
    for(let i=0;i<str.length;i++){
        let char = str.charCodeAt(i)
        codes.push(char);
    }
    console.log(`values after of codes:${codes}`)
let first = codes[0]+1;
let second = [];
let third = []
second.push(first);
third.push(first);
for(let i=1;i<codes.length;i++){
    second.push(codes[i]);
}
console.log(`values after changin first:${second}`)
for(let i=1;i<second.length;i++){
    let prev = second[i-1];
    let current = second[i];
    let total = prev+current;
    third.push(total);

}
console.log(`values after changin all:${third}`)
let final = [];
for(let i=0;i<third.length;i++){
    let num = third[i]
    while( num > 122 ){
        num = num-26;
       
    }
    while (num < 97) {
        num = num + 26;
    }
    final.push(num);
}
console.log(`values of final array:${final}`)
let result = "";
for(let i=0;i<final.length;i++){
    let letter = String.fromCharCode(final[i]);
    result += letter;

}
return result;
}

let test = decrypt("flgxswdliefy");
console.log(test);