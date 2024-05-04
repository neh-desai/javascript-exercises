const sumAll = function(start, end) {
    let sum = 0; 
    let temp = start;
    if (start > end){
        start = end
        end = temp;
    }
    else if (start<0 || end<0){
        return "ERROR";
    }
    else if (typeof arguments[0]!== "number" || typeof arguments[1]!== "number"){
        return "ERROR"
    }
    
    for (let i = start; i<=end; i++){
        sum += i;
    }
    return sum; 
};
// Do not edit below this line
module.exports = sumAll;
