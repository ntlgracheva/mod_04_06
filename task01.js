'use strict'

const allStudents = ['Иванов', 'Петров', 'Сидоров', 'Кузнецов', 'Смирнов', 'Попов', 'Соколов'];
const failedStudents = ['Сидоров', 'Смирнов', 'Попов'];

const filter = (arrayAll, arrayFailed) => {

    let arrayPassed = [];

    for (let elem of arrayAll) {
        if (!arrayFailed.includes(elem)) { arrayPassed.push(elem); }
    }

    return arrayPassed
}

const passedStudents = filter(allStudents, failedStudents);
console.log(`Cтуденты, сдавшие экзамен: ${passedStudents.join(", ")}`)