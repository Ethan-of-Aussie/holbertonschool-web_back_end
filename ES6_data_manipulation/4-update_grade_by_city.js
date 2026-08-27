export default function updateStudentGradeByCity(students, city, newGrades){
 return students.filter(c => c.location === city).map(c => ({
    ...c,
    grade: newGrades.find(g => g.studentId === c.id) ?.grade || 'N/A',
 }))
}