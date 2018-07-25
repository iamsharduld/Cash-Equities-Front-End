
var jsonarr= [
    {
      "id" : 1,
    "display": "HTML Tutorial",
    "url": "https://www.w3schools.com/html/default.asp"
    },
    {
      "id" : 1,
    "display": "CSS Tutorial",
    "url": "https://www.w3schools.com/css/default.asp"
    },
    {
      "id" : 1,
    "display": "JavaScript Tutorial",
    "url": "https://www.w3schools.com/js/default.asp"
    },
    {
      "id" : 1,
    "display": "SQL Tutorial",
    "url": "https://www.w3schools.com/sql/default.asp"
    },
    {
      "id" : 1,
    "display": "PHP Tutorial",
    "url": "https://www.w3schools.com/php/default.asp"
    },
    {
      "id" : 1,
    "display": "XML Tutorial",
    "url": "https://www.w3schools.com/xml/default.asp"
    }
    ]
    function addRow(jsonObj) {
        var table = document.getElementById("securities");
        var row = table.insertRow(1);
    
        row.insertCell(0).innerHTML = jsonObj.id;
        row.insertCell(1).innerHTML = jsonObj.display;
        row.insertCell(2).innerHTML = jsonObj.url;
      //  document.getElementById("securities").innerHTML = jsonObj.id;
    }
    
    function getData(){
    
        var jsonObj,i ; //read from response
        /*var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var myObj = JSON.parse(this.responseText);
          //  document.getElementById("demo").innerHTML = myObj.name;
        }
    };*/
        for(i=0; i<jsonarr.length;i++){
           addRow(jsonarr[i]);
    
        }
    }

    function search(){
        var x = document.getElementById("mySearch").placeholder;
        //document.getElementById("demo").innerHTML = x;
    }