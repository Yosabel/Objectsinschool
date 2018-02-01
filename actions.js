
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
}
function buildSelection() {
    var html = "";
    var teach = "";
    var sec = "";
    for (var i = 0; i < allSections.length; i++) {
       sec += "<option value='" + allSections[i].id + "'>" + allSections[i].name + "</option>"
    }

    document.getElementById("sectionList").innerHTML += sec;

    for (var i = 0; i < allStudents.length; i++) {
        html += "<option value='" + allStudents[i].id + "'>" + allStudents[i].firstName + " " + allStudents[i].lastName + "</option>"
    }

    document.getElementById("studentList").innerHTML += html;

    for (var i = 0; i < allTeachers.length; i++) {
        teach += "<option value='" + allTeachers[i].id + "'>" + allTeachers[i].firstName + " " + allTeachers[i].lastName + "</option>"
    }

    document.getElementById("teacherList").innerHTML += teach;
}

function addItems(){

}
function addStudent(){
var firstName=document.getElementById("studentfirst").value;
var lastName=document.getElementById("studentlast").value;
var grade=document.getElementById("studentgrade").value;
allStudents.push(new Student(firstName,lastName,grade));
document.getElementById("added").innerHTML= firstName +" has been added";
    clear();
}

function addTeacher(){
    var firstName=document.getElementById("teacherfirst").value;
    var lastName=document.getElementById("teacherlast").value;
    var subject=document.getElementById("teachersubject").value;
    allTeachers.push(new Student(firstName,lastName,subject));
    document.getElementById("added").innerHTML= firstName +" has been added";
    clear();
}

function addSection(){
    var name=document.getElementById("sectionname").value;
    var count=document.getElementById("sectioncount").value;
    allSections.push(new Section(name,count));
    document.getElementById("added").innerHTML= name +" has been added";
clear();
}

function clear(){
        var input = document.getElementsByTagName("input");
        for (var i=0; i<input.length; i++) {
            if (input[i].type == "text") {
                input[i].value = "";
            }
        }
    }

function removeItems(){


    }