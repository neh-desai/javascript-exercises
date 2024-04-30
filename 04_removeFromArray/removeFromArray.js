const removeFromArray = function(arr, ...items) {
    let arrCopy = Array.from(arr);
    // console.log(arrCopy);
    // console.log(items);

    for (let i = 0; i<items.length; i++){
        for (let j = 0; j<arr.length; j++){
            //console.log(`Comparing ${items[i]} with ${arr[j]}`); 
            if (items[i] === arr[j]){
                console.log("GOT HERE")
                arrCopy = arr.splice(j,1);
                j -=1;
            }
        }
    }
    // console.log(arr)
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
