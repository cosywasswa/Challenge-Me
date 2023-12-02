var isAnagram = function(s, t) {
    let inputStr = s.split('').map((char) => char.replace(/[^a-z0-9]/g,' ' )).sort().join();
     let str = t.split('').map((char) => char.replace(/[^a-z0-9]/g,' ' )).sort().join();
     if(inputStr === str){
         return true
     } 
     else{
         return false;
     }
};