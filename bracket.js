function bracketMatch(str){
    let open = 0;
    let close = 0;
   for(let i=0;i<str.length;i++){
if(str[i] === '('){
    open ++;
} else{
    if(open > 0){
        open --;

    }else{
        close ++;
    }
}
   }
return open + close;
}
let test = bracketMatch("((())(");
console.log(test);