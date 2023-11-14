function map( elements , cb ){

    const newArr = [];

    for(let i = 0; i < elements.length; i++){

        newArr.push(cb(elements[i]));
    }
    return newArr;
}

module.exports = map;