
function determineList(Type){
    if(Type==1){
        listStudents();
    }
   if(Type==2){
        listTeachers();
        console.log(Type);
    }
   if(Type==3){
        listSections();
       console.log(Type);
    }

}
function listTeachers() {
    var html="<table border='1'>";
    for(var i=0;i<allTeachers.length;i++){
        html+="<tr>";
        html+="<td>" + allTeachers[i].firstName + "</td>";
        html+="<td>" + allTeachers[i].lastName + "</td>";
        html+="<td>" + allTeachers[i].subject + "</td>";
        html+="</tr>";
    }
    html+="</table>";
    document.getElementById("OutputList").innerHTML=html;
}

function listStudents() {
    var html="<table border='1'>";
    for(var i=0;i<allStudents.length;i++){

        html+="<td>" + allStudents[i].firstName + "</td>";
        html+="<td>" + allStudents[i].lastName + "</td>";
        html+="<td>" + allStudents[i].grade + "</td>";
        html+="</tr>";
    }
    html+="</table>";
    document.getElementById("OutputList").innerHTML=html;
}


function listSections() {
    var html="<table border='1'>";
    for(var i=0;i<allSections.length;i++){

        html+="<tr>";
        html+="<td>" + allSections[i].name + "</td>";
        html+="<td>" + allSections[i].currentSize + "</td>";
        html+="</tr>";
    }
    html+="</table>";
    document.getElementById("OutputList").innerHTML=html;

}
function setUp(){
    buildSelection();
    buildList()
}
function buildSelection() {
    document.getElementById("studentList").innerHTML="";
    document.getElementById("sectionList").innerHTML="";
    document.getElementById("teacherList").innerHTML="";
    document.getElementById("Listsection").innerHTML="";
    var html = "<option>Choose Student</option>";
    var teach = "<option>Choose Teacher</option>";
    var sec = "<option>Choose Section</option>";

    for (var i = 0; i < allSections.length; i++) {
       sec += "<option value='" + allSections[i].id + "'>" + allSections[i].name + "</option>"
    }

    document.getElementById("sectionList").innerHTML += sec;
    document.getElementById("Listsection").innerHTML += sec;

console.log(sec);
    for (var i = 0; i < allStudents.length; i++) {
        html += "<option value='" + allStudents[i].id + "'>" + allStudents[i].firstName + " " + allStudents[i].lastName + "</option>"

    }
    document.getElementById("studentList").innerHTML += html;

    for (var i = 0; i < allTeachers.length; i++) {
        teach += "<option value='" + allTeachers[i].id + "'>" + allTeachers[i].firstName + " " + allTeachers[i].lastName + "</option>"
    }

    document.getElementById("teacherList").innerHTML += teach;

}


function addStudent(){
var firstName=document.getElementById("studentfirst").value;
var lastName=document.getElementById("studentlast").value;
var grade=document.getElementById("studentgrade").value;
allStudents.push(new Student(firstName,lastName,grade));
document.getElementById("added").innerHTML= firstName +" has been added";
    clear();
    buildSelection();
}

function addTeacher(){
    var firstName=document.getElementById("teacherfirst").value;
    var lastName=document.getElementById("teacherlast").value;
    var subject=document.getElementById("teachersubject").value;
    allTeachers.push(new Student(firstName,lastName,subject));
    document.getElementById("added").innerHTML= firstName +" has been added";
    clear();
    buildSelection();
}

function addSection(){
    var name=document.getElementById("sectionname").value;
    var count=document.getElementById("sectioncount").value;
    allSections.push(new Section(name,count));
    document.getElementById("added").innerHTML= name +" has been added";
clear();
buildSelection();
}

function clear(){
        var input = document.getElementsByTagName("input");
        for (var i=0; i<input.length; i++) {
            if (input[i].type == "text") {
                input[i].value = "";
            }
        }
    }
function getSectionById(section){
    for(var i=0;i<allSections.length;i++){
        if(allSections[i].id== section){
            return allSections[i];
        }
    }
}
function getStudentById(student){
    for(var i=0;i<allStudents.length;i++){
        if(allStudents[i].id==student){
            return allStudents[i];
        }
    }
}
function getTeacherById(teacher){
    for(var i=0;i<allTeachers.length;i++){
        if(allTeachers[i].id==teacher){
            return allTeachers[i];
        }
    }
}


function removeStudentFromSection(){
    var studObject=getStudentById(document.getElementById("studentList").value);
    var sectionObject=getSectionById(document.getElementById("sectionList").value);

    for(var i = 0; i < sectionObject.students.length; i++) {
        if(studObject.id == sectionObject.students[i].id) {
            sectionObject.students.splice(i);
            break;
        }

    }

    document.getElementById("removeStudentsFromSection").innerHTML= studObject.firstName +" has been removed from " + sectionObject.name;

}
//
// function removeTeacherFromSection(){
//     var teachObject=getTeacherById(document.getElementById("teacherList").value);
//     var sectionObject=getSectionById(document.getElementById("sectionList").value);
//
//     for(var i = 0; i < sectionObject.teacher.length; i++) {
//         if(teachObject.id == sectionObject.teacher[i].id) {
//             sectionObject.teacher.splice(i);
//             break;
//         }
//
//     }
//     document.getElementById("removeTeachersFromSection").innerHTML= teachObject.firstName +" has been removed from " + sectionObject.name;
//     console.log(teachObject);
//     console.log(sectionObject)
// }
function addStudentToSection(){
var studObject=getStudentById(document.getElementById("studentList").value);
var sectionObject=getSectionById(document.getElementById("sectionList").value);
sectionObject.students.push(studObject);
document.getElementById("addStudentsToSection").innerHTML= studObject.firstName +" has been added to " + sectionObject.name;
console.log(studObject);

}

function addTeacherToSection(){
    var teachObject=getTeacherById(document.getElementById("teacherList").value);
    var sectionObject=getSectionById(document.getElementById("Listsection").value);
    sectionObject.teacher=teachObject;
    console.log(teachObject);
    document.getElementById("addTeacherToSection").innerHTML= teachObject.firstName +" has been added to " + sectionObject.name;

}
function buildList(){
    document.getElementById("itemsList").innerHTML="";
    var sec = "<option>Choose Section</option>";

    for (var i = 0; i < allSections.length; i++) {
        sec += "<option value='" + allSections[i].id + "'>" + allSections[i].name + "</option>"
    }

    document.getElementById("itemsList").innerHTML += sec;

}
function listSection(){
    var html="<table border='1'>";
    for(var i=0;i<allStudents.length;i++){

        html+="<td>" + allStudents[i].firstName + "</td>";
        html+="<td>" + allStudents[i].lastName + "</td>";
        html+="<td>" + allStudents[i].grade + "</td>";
        html+="</tr>";
    }
    html+="</table>";
    document.getElementById("OutputList").innerHTML=html;

}

