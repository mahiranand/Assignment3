const newArr = [];
function flatten( elements ){
    for(let i = 0; i < elements.length; i++){
        if(Array.isArray(elements[i])){
            flatten(elements[i]);
        }
        else{
            newArr.push(elements[i]);
        }
    }
    return newArr;
}
module.exports = flatten;
