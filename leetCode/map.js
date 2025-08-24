let arr = [10, 20, 30]

// // let fn = function(n, o){
// //     return n + o;
// // }

// // for (let i = 0; i < arr.length; i++) {
// //     console.log(arr[i]);
    
    
// // }

// // console.log(fn(10, 20))


// const map = function(arr, fn){

//     let result = []
//     for (let i = 0; i < arr.length; i++) {
//         result.push(fn(arr[i], i))
        
//     }
// }
    


// let fn = function(arr[i], i){
//         return arr[i] + i;

// }


// console.log(map(arr, fn))


let fn = function(arr, n){
    for(let i = 0; i < arr.length; i++){
        console.log(arr[i] + n);
        
    }
}


const map = function(arr, fn){
    let result = [];
    for (let i = 0; i < arr.length; i++){
        result.push(fn(arr[i], i));
    }
    return result;
}

console.log(map(arr, fn(arr, 2)));





// fn(arr, 2)

// arr.map(function(num){

//     console.log(num + 1);
    

// })

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i] + 1);
    
    
// }