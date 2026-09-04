const http = require('node:http');
const fs = require('node:fs');

const app = http.createServer((request, response) => {
  response.statusCode = 200;
  response.setHeader('Content-Type', 'text/plain');
  if (request.url === '/') {
    response.end('Hello Holberton School!');
  }
  if (request.url === '/students') {
    const file = process.argv[2];

    const listofStudents = new Promise((resolve, reject) => {
      fs.readFile(`${file}`, 'utf8', (err, data) => {
        if (err) {
          reject(new Error('Cannot load the database'));
          return;
        }
        const cs = [];
        const swe = [];
        const lines = data.split('\n').filter((line) => line.trim() !== '');
        const students = lines.slice(1);
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
        const string = `This is the list of our students
Number of students: ${students.length}
Number of students in CS: ${cs.length}. List: ${cs.join(', ')}
Number of students in SWE: ${swe.length}. List: ${swe.join(', ')}`;
        resolve(string);
      });
    });

    listofStudents.then((value) => { response.end(value); });
  }
});

app.listen(1245);

module.exports = app;
