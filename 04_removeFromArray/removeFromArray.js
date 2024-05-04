const removeFromArray = function(arr, ...items) {
    let arrCopy = Array.from(arr);
    
    for (let i = 0; i<items.length; i++){
        for (let j = 0; j<arr.length; j++){
            if (items[i] === arr[j]){
                arrCopy = arr.splice(j,1);
                j -=1;
            }
        }
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
