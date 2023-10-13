// for (let i = 5; i >= 1; i--) {
//     let k=""
//     for ( j =1 ; j <=i; j++) {
//         k+="*"

//     }
//     console.log(k);
// }

// let arr=[4,5,67,3,76,3,46,2,6]
// let hard;
// for (let i = 0; i < arr.length; i++) {

//     for (let j=i+1 ; j < arr.length; j++) {
//        if(arr[i]>arr[j]){
//         hard=arr[j]
//         arr[j]=arr[i]
//         arr[i]=hard
//        }

//     }

// }
// console.log(arr);

// let arr=[4,5,67,3,76,3,46,2,6]
// let hard;
// for (let i = 0; i < arr.length; i++) {

//     for (let j=0 ; j < arr.length; j++) {
//        if(arr[i]>arr[j]){
//         hard=arr[j]
//         arr[j]=arr[i]
//         arr[i]=hard
//        }

//     }

// }
// console.log(arr);

// -----------------------------------------

// tapsirig1
// const arr = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10']
// arr.forEach((element) => {
//     if(element%2===0){
//         console.log(element);
//     }
// }
// )

// ---------------------------------------------
// tapsirig2

// ----------------------------------------------

// tapsirig3
// const arr = [1,2,3,4,5,6,7,8,9,10]
// arr.splice(4,6);
// console.log(arr);

// ---------------------------------------------

// tapsirig4
// const arr1=[1,2,3,4,5]
// const arr2=[5,6,7,8,9,0]
// const arrplus= arr1.concat(arr2)
// console.log(arrplus);

// -----------------------------------------------

// tapsirig5
// const arr=[1,2,3,4,5,1,6,7,8,1,9,10]
// const arrchoose= arr.filter((arr)=>arr===1);
// console.log(arrchoose);

// ------------------------------------------------

// tapsirig6
// const arr=[1,2,3,4,5,1,6,7,8,1,9,10]
// const arrchoose= arr.filter((arr)=>arr!==1);
// console.log(arrchoose);

// ----------------------------------------------

// tapsirig7
// const arr1=['salam', 1, 2 ,3]
// const arr2=['Ali']
// const arrplus=arr2.concat(arr1)
// console.log(arrplus);

// ---------------------------------------------

// tapsirig8
// const arr1=['salam', 1, 2 ,3]
// const arr2=['Oz sevimli rengim']
// const arrplus=arr1.concat(arr2)
// console.log(arrplus);

// ----------------------------------------------

// tapsirig9
// const arr1=['salam', 1, 2 ,3]
// arr1.shift(0)
// console.log(arr1);

// ------------------------------------------------

// tapsirig10
// const arr1=['salam', 1, 2 ,3]
// arr1.pop(0)
// console.log(arr1);

// -----------------------------------------------

// tapsirig11
// const arr1=['salam', 1 , 2 , 3]
// arr1.splice(1,1)
// console.log(arr1);

// -----------------------------------------

// tapsirig12
// const arr1=[1,2,3,4]
// const arr2=[222]
// arr1.forEach(element => {
//     arr2.push(element)
// });
// console.log(arr1);


// basga usul


// const arr1=[1,2,3,4]
// const arr2=[...arr1] //split
// const arr3=arr1
// arr1[1]=5
// console.log(arr1,arr2,arr3);