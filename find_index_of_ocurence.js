/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    if(haystack === needle ||needle === ''){
        return 0;
    }
    for (let i = 0; i <= haystack.length; i++) {
       let j=0;
       while(j<needle.length && haystack[i+j] === needle[j])
       j++;
       
        if (j === needle.length) {
            return i; //
       
        }
        
   }
   return -1;
};

const example = strStr("microverse", "verse");
   console.log(example);
