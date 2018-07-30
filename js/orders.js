function Init(){
    console.log("hello");
    var table = document.getElementById("one");
    var row = table.insertRow(4);

    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    cell1.innerHTML = "NEW CELL1";
    cell2.innerHTML = "NEW CELL2";

    var table = document.getElementById("one");
    var row = table.insertRow(4);

    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    cell1.innerHTML = "NEW CELL1";
    cell2.innerHTML = "NEW CELL2";
    /*var xmlhttp = new XMLHttpRequest();   // new HttpRequest instance 
    xmlhttp.open("GET", "http://localhost:7890/getmyorder",true);
    xmlhttp.setRequestHeader("Content-Type", "application/json");
    xmlhttp.send();
    

    xmlhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){

            var returnText = xmlhttp.responseText;
            var table = document.getElementById("one");
            var row = table.insertRow(0);
            var cell1 = row.insertCell(0);
            var cell2 = row.insertCell(1);
            cell1.innerHTML = "NEW CELL1";
            cell2.innerHTML = "NEW CELL2";


 

        }
    }*/



	
};


window.onload = function(){
	window.Init = new Init();
};