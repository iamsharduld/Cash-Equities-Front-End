
var jsonarr= [
    {
      "company" : "TITAN COMPANY LTD",
    "sector": "FMCG",
    "symbol": "TITAN",
    "ISIN": "INE280A01028"
    },
    {
      "company" : "EICHER MOTORS LTD",
    "sector": "AUTO",
    "symbol": "EICHERMOT",
    "ISIN": "INE066A01013"
    },
    {
      "company" : "BHARTI AIRTEL LTD",
    "sector": "TELECOM",
    "symbol": "BHARATIARTL",
    "ISIN": "INE397D01024"
    },
    {
      "company" : "MARUTI UDYOG LTD",
    "sector": "FMCG",
    "symbol": "TITAN",
    "ISIN": "INE280A01028"
    },
    {
      "company" : "CIPLA LTD",
    "sector": "FMCG",
    "symbol": "TITAN",
    "ISIN": "INE280A01028"
    }
    ]
    function addRow(jsonObj) {
        var table = document.getElementById("securities");
        var row = table.insertRow(1);
        //row.addEventListener("click",function() {document.getElementById("para").innerHTML = jsonObj.display});
        row.addEventListener("click",function() {popup(jsonObj)});
        row.insertCell(0).innerHTML = jsonObj.company;
        row.insertCell(1).innerHTML = jsonObj.sector;
        row.insertCell(2).innerHTML = jsonObj.symbol;
        row.insertCell(3).innerHTML = jsonObj.ISIN;
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

    function popup(jsonObj){
        
        var modal = document.getElementById('myModal');
        // When the user clicks the row, open the modal 
        modal.style.display = "block";
        
        //WRITE CONTENT 
        var line1 = document.getElementById('line1');
        var line2 = document.getElementById('line2');
        var line3 = document.getElementById('line3');
        var line4 = document.getElementById('line4');
        line1.innerHTML = "Company : " +  jsonObj.company;
        line2.innerHTML = "Sector : " +  jsonObj.sector;
        line3.innerHTML = "Symbol : " + jsonObj.symbol;
        line4.innerHTML = "ISIN : " + jsonObj.ISIN;
        
        
        // When the user clicks anywhere outside of the modal, close it
        window.onclick = function(event) {
         if (event.target == modal) {
           modal.style.display = "none";
        }
        // Get the <span> element that closes the modal
        var span = document.getElementsByClassName("close")[0];
        // When the user clicks on <span> (x), close the modal
        span.onclick = function() {
            modal.style.display = "none";
        }
    }
    }