var id=1;
function Student(firstName,lastName,grade) {
    this.id= id++;
    this.firstName = firstName;
    this.lastName = lastName;
    this.grade = grade;


}

function Teacher(firstName,lastName,subject) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.subject = subject;
    this.id= id++;



}

function Section(name,currentSize) {
    this.name=name;
    this.id= id++;
    this.currentSize = currentSize;
    this.students = [];
    this.teacher;
}