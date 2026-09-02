function countStudents(file){
    /*use process.argv, */
    const cs = [];
    const swe = [];
    const fs = require('node:fs');
    fs.readFile(`${file}`, 'utf8', (err, data) => {
        if (err){
            throw new Error('Cannot load the database');
        }
        const lines = data.split('\n').filter((line) => line.trim() !== '');
        const students = lines.slice(1);
        console.log(`Number of students: ${students.length}`);
        for (const student of students) {
            const [firstname, lastname, age, field] = student.split(',');
            if (field === "CS") {
                cs.push(firstname)
            }
            if (field === "SWE") {
                swe.push(firstname)
            }

}
            console.log(`Number of students in CS: ${cs.length}. List: ${cs.join(', ')}
Number of students in SWE: ${swe.length}. List: ${swe.join(', ')}`);});

}
module.exports = countStudents;