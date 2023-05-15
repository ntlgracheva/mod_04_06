'use strict'

const names = ['Noah', 'Liam', 'Mason', 'Jacob', 'Robot', 'William', 'Ethan', 'Michael', 'Alexander'];


const addPrefix = (namesList, prefix = "Mr") => {

    let prefixedArray = [];

    for (let elem of namesList) {
        prefixedArray.push(prefix + " " + elem);
    }


    return prefixedArray
}

const modifiedArray = addPrefix(names);
console.log(`массив с префиксами: ${modifiedArray.join(", ")}`)