var student1 = {
    studno: 10101,
    grade: 1,
    name: "학생1"
};

var student2 = {
    studno: 20202,
    grade: 2,
    name: "학생2"
};

var classRoom = {
    student: [student1, student2]
}

console.log(classRoom);

for (var i=0; i<classRoom.student.length; i++) {
    console.log("[%d번째 학생]", i + 1);
    console.log(" >> 학번: %d", classRoom.student[i].studno);
    console.log(" >> 학년: %d", classRoom.student[i].grade);
    console.log(" >> 이름: %s", classRoom.student[i].name);
}