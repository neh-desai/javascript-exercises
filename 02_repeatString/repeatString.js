const repeatString = function(word, times) {
    let final = '';
    if (times <0){
        return "ERROR";
    }
    else{
        for (let i = 1; i<= times; i++){
            final += word;
        }
        return final;
    }
};

// Do not edit below this line
module.exports = repeatString;
