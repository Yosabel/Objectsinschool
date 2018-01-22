function listTeachers() {
var html="<table border>";
for(var i=0;i<allTeachers.length;i++){

   html+="<td>" + allTeachers[i].firstName + "</td>";
    html+="<td>" + allTeachers[i].lastName + "</td>";
    html+="<td>" + allTeachers[i].subject + "</td>";
    html+="</tr>";
}
html+="</table>";
    document.getElementById("List").value=html;
}

function listStudents() {
    var html="<table border>";
    for(var i=0;i<allStudents.length;i++){

        html+="<td>" + allStudents[i].firstName + "</td>";
        html+="<td>" + allStudents[i].lastName + "</td>";
        html+="<td>" + allStudents[i].subject + "</td>";
        html+="</tr>";
    }
    html+="</table>";
    document.getElementById("List").value=html;
}


function listSections() {
    var html="<table border>";
    for(var i=0;i<allSections.length;i++){


        html+="<td>" + allSections[i].subject + "</td>";
        html+="</tr>";
    }
    html+="</table>";
    document.getElementById("List").value=html;
}

function determineList(listType){
    if(listType===0){
        listStudents();
    }
    console.log(listType);
    if(listType===1){
        listTeachers();
    }
    if(listType===2){
        listSections();
    }

}

