export default function getStudentsByLocation(studentList, city){
    const res = studentList.filter((a)=> a.location === city)
    return res
}