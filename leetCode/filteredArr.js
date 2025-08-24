let filter = function(arr, fn){
    let filteredArr = [];

    for (let i = 0; i < arr.length; i++) {
        if (fn(arr[i], i)) {
            filteredArr.push(arr[i])
            
        }
        
    }

    return filteredArr;
}

let myArr = [0, 10, 20, 30]
let fn = function(arr){
    let arry = []
    for(let i = 0; i < arr.length; i++){
        if(arr[i] > 10){
            arry.push(arr[i])
        }
        
    }
    console.log(arry);
    
}

fn(myArr);
