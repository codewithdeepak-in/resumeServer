const Resume = require('../model/index');

async function generateUniqueId() {
    let uniqueId = genId();
    const idExists = await Resume.exists(uniqueId);
    if (idExists) {
        return generateUniqueId();
    }
    return uniqueId;
}


function genId() {
    const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

    let uniqueId = "";
    for (let i = 0; i < 8; i++) {
        uniqueId = uniqueId + array[Math.floor(Math.random() * array.length)];
    }
    return uniqueId;
}


module.exports = generateUniqueId;