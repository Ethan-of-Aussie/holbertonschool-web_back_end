const fs = require('node:fs');

function countStudents(file) {
  /* use process.argv, */
  const cs = [];
  const swe = [];

  return new Promise((resolve, reject) => {
    fs.readFile(`${file}`, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }
      const lines = data.split('\n').filter((line) => line.trim() !== '');
      const students = lines.slice(1);
      console.log(`Number of students: ${students.length}`);
      for (const student of students) {
        const parts = student.split(',');
        const firstname = parts[0];
        const field = parts[3];

        if (field === 'CS') {
          cs.push(firstname);
        }
        if (field === 'SWE') {
          swe.push(firstname);
        }
      }
      console.log(`Number of students in CS: ${cs.length}. List: ${cs.join(', ')}
Number of students in SWE: ${swe.length}. List: ${swe.join(', ')}`);
      resolve();
    });
  });
}
module.exports = countStudents;
