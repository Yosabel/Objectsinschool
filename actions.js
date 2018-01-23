
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

function buildSelection(){
    var html="";
    for(var i=0; allStudents.length;i++0{

        html+="<option value=" + allStudents[i].id
    }

}

