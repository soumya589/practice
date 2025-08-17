
let nums = [1,2,3,4]
let fn = function(a , b){
        return a + b;
        
}

let init = 100

const reduce  = function (nums, fn, init){

    let val = init;

    for (let i = 0; i < nums.length; i++){
        val = fn(val, nums[i])
    }

    console.log(val);
    

    return val

}

reduce(nums, fn, init)



        
    
    

