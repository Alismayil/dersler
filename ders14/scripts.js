// let words="Salam   necesiz?   Ne   var   ne    yox"

// let newword='';
// for (let i = 0; i < words.length; i++) {
//    if (words[i] !==' ') {
//     newword += words[i]

//    }

// }    
// console.log(newword);

// tapsirig1    
// let a=prompt(" A daxil et")
// let b=prompt("B daxil et")
// let c=prompt("C daxil et ")
// if(a<=0 || b<=0 || c<=0){
//     console.log("Ucbucaq 0 ola bilmez");
// }
// else if(a+b>a || a+c>b || c+b>a){
//     console.log("Dogrudur");
// }
// else{
//     console.log("Yanlisdir");
// }

// --------------------------------------------------

// tapsirig2
// let a=prompt(" A daxil et")
// let b=prompt("B daxil et")
// let c=prompt("C daxil et ")
// if (a===b && c===a && c===b) {
//     console.log("Beraber terefli ucbucaq");

// }
// else{
//     console.log("Beraber terefli deil");
// }

// --------------------------------------------------

// tapsirig3
// let a = prompt("A daxil et")
// let b = prompt("B daxil et")
// let c = prompt("C daxil et ")
// if (a === b && a === c && b === c) {
//     console.log("beraber terefli");

// }
// else if (a === b || a === c || c === b) {
//     console.log("beraber yanli ");

// }
// else {
//     console.log("beraber yanli deyil");

// }

// ----------------------------------------

// tapsirig4
// let a = prompt("A daxil et")
// let b = prompt("B daxil et")
// let c = prompt("C daxil et ")
// if ( (a**2+b**2===c**2)||(a**2+c**2===b**2)||(c**2+b**2===a**2) ){
//     console.log("Duzbucaqlidir");

// }
// else{
//     console.log("Deyil");
// }

// -------------------------------------------

// tapsirig5
// let i
// let x=3
// for (let i = 0; i < 100; i++) {
//     if (i%10===x){
//         console.log(i);
//     }   
// }

// -------------------------------------------

// tapsirig6
// let i
// for (let i = 0; i < 100; i++) {
//     if (i%6===0){
//         console.log(i);
//     }
// }

// -------------------------------------------

// tapsirig7
// let i
// for (let i = 0; i < 100; i++) {
//     if (i%11===0){
//         console.log(i);
//     }
// }

// --------------------------------------------

// tapsirig8
// let i
// for (let i = 0; i < 100; i++) {
//     if (i%11!==0){
//         console.log(i);
//     }
// }

// ---------------------------------------------

// tapsirig9
// for (let x = 1; x <=10; x++) {
//     for (let y = 1; y <= 10; y++) {
//       console.log(x*y);

//     }

// }

// ---------------------------------------------
// tapsirig10
// let num = 4
// let result = 1
// for (let x = 1; x <= 4; x++) {    
//         result *= x
//     //1 = 1 * 1
//     //1 = 1 * 2
//     //2 = 2 * 3
//     //6 = 6 * 4
//     //24
//     }
//     console.log(result);

// tapsirig11
// sual

// -------------------------------------------

// tapsirig12
// let index="2345689"
// for (let i = 0; i < index.length; i++) {
//     console.log(index[i]);

// }

// --------------------------------------------

// tapsirig13
// let word="126345"
// let bigest=0
// for (let i = 0; i < word.length; i++) {
//    if ( +word[i]>bigest) {
//    bigest=+word[i]

//    }   
// }
// console.log(bigest);

// -------------------------------------------

// tapsirig14
// let word="123456789"
// let smaller=10
// for (let i = 0; i < word.length; i++) {
//    if ( +word[i]<smaller) {
//    smaller=+word[i]

//    }   
// }
// console.log(smaller);

// ------------------------------------------

// tapsirig15
// let a =prompt("eded daxil edin")
// let cem=0
// let hasil=1
// let ededorta=0
// for (let i = 0; i < a.length; i++) {
//     cem= cem + +a[i]
//     hasil= hasil * +a[i]
//     ededorta= cem/a.length

// }
// console.log(cem);
// console.log(hasil);
// console.log(ededorta);

// ------------------------------------------

// tapsirig16
// let a=parseFloat(prompt("eded daxil et"))
// let i=0
// while (i<a){
//     i++
//     if(a%i===0){
//         console.log(i);
//     }
// }

// -------------------------------------------

// tapsirig17
// let a=parseFloat(prompt("eded daxil et"))
// let i=0
// let say=0
// while (i<a){
//     i++
//     if(a%i===0){
//         say++

//     }
// }
//  console.log(say);

// -------------------------------------------

// tapsirig18
// let a=parseFloat(prompt("eded daxil et"))
// let i=0
// let cem=0
// let hasil=1
// while (i<a){
//     i++
//     if(a%i===0){
//       cem+= i
//       hasil*=i
//     }
// }
//  console.log(cem);
//  console.log(hasil);

// ---------------------------------------------

// tapsirig19
// sual

// ----------------------------------------

// tapsirig20
// let a=20
// let bolundumu = true
// if (a==1) {
//     console.log("hecbiri");

// }
// else{
// for (let i = 2; i < a; i++) {
//     if (a%i===0) {
//         console.log("murekkeb");
//         bolundumu= false
//         break;   
//     }    
// }
// if (bolundumu){
//     console.log("sadedir");

// }
// }

// -------------------------------------------

// tapsirig21
let a = 20
let bolundumu = true
if (let a = 0; a < 100; a++) {
    if (a == 1) {
        console.log("hecbiri");

    }
    else {
        for (let i = 2; i < a; i++) {
            if (a % i === 0) {
                console.log("murekkeb");
                bolundumu = false
                break;
            }
        }
        if (bolundumu) {
            console.log("sadedir");

        }
    }
}
