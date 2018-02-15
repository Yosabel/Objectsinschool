var id=1
function Student(firstName,lastName,grade) {
    this.id= id++;
    this.firstName = firstName;
    this.lastName = lastName;
    this.grade = grade;

    /* needs to be implemented
    this.sections = [];
     */
}

function Teacher(firstName,lastName,subject) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.subject = subject;
    this.id= id++;


    /* needs to be implemented
    this.sections = [];
     */
}

function Section(name,currentSize) {
    this.name=name;
    this.id= id++;
    this.currentSize = currentSize;
    this.students = [];
    this.teacher;

    // /* Needs to be implemented

    // this.students = [];
    // this.teacher;
    //
    // this.addTeacher = function(teacher) {
    //     this.teacher = teacher;
    // }
    //
    // this.addStudent = function(student) {
    //     this.students.push(student);
    // }
    //
    // this.removeStudent = function(student) {
    //     //remove student
    // }
    // */
}