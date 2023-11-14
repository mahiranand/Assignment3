function reduce(elements , cb , startingValue = elements[0]){
    let index = 0;
    if(startingValue === elements[0]){
        index++
    }

    for(index; index < elements.length; index++){
        startingValue = cb(elements[index] , startingValue);
    }
    return startingValue;
}

module.exports = reduce;