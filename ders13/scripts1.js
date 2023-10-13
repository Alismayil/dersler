function isPalindrome(str) { 
	var rev=""; 
	for(var i=str.length-1; i>=0; i--){ 
		rev+= str[i]; 
	} 
	if(rev==str){ 
		return true
	} else{ 
		return false; 
	} 
} 

var str1 = "amma"; 
var str2 = "nssssssssssn"; 
var str3 = "123321"; 
var str4 = "dsfghjklkljhgf"; 
var str5 = "qwertytreww"; 

console.log(isPalindrome(str1)); 
console.log(isPalindrome(str2)); 
console.log(isPalindrome(str3));
console.log(isPalindrome(str4));
console.log(isPalindrome(str5));


// program to generate fibonacci series up to n terms

// take input from the user
// const number = parseInt(prompt('Enter the number of terms: '));
// let n1 = 0, n2 = 1, nextTerm;

// console.log('Fibonacci Series:');

// for (let i = 1; i <= number; i++) {
//     console.log(n1);
//     nextTerm = n1 + n2;
//     n1 = n2;
//     n2 = nextTerm;
// }