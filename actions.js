function listItems(){
    var selection = document.getElementById("List").value;
    // var teacher=allTeachers[selection];
    // var students=allStudents[selection];
    // var subject=allSections[selection];
   var items= totalItems[selection];
    var result="";
        for(key in items[i]){
            items += items[i] +  " ";
   items+="<br>";
    }
    document.getElementById("OuptutList").innerHtml = items;
}



