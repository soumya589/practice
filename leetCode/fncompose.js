const one = function (x){
    return x + 1
}

const two = function(x){
    return x * x
}

const three = function(x){
    return 2 * x
}

let fnArray = [one, two, three]

let x = 4

// const compose = function(fn){
//     // compose(x) = three(two(one(x)))
//     let result = x

//     for (let i = fn.length - 1; i >= 0; i--) {

//         result =  fn[i](result);

//         // console.log(result);
//     }
//     console.log(result);
    
// }
        
// compose(fnArray)

// function t(x){
//     console.log(x);
    
// }

// function tx(){
//     return function(x){
//         console.log(x + 1);
        
//     }
// }

function compose(fn){
    return function(x){
        
        let result = x

        for (let i = fn.length - 1; i >= 0; i--){

            result = fn[i](result)
        }
        return result
    }
}
            
           
        
// t(x)
// tx()(x)

compose(fnArray)
            
            
        
        
        
