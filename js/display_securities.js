

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
       // row.addEventListener("click",function() {
        //  window.location.href = "buy_sell.html?&json="+jsonObj});
        row.addEventListener("click",function() {
          window.location.href = "buy_sell.html?&company="+jsonObj.company+"&sector="+jsonObj.sector+"&symbol="+jsonObj.symbol+"&isin="+jsonObj.ISIN});
        row.insertCell(0).innerHTML = jsonObj.company;
        row.insertCell(1).innerHTML = jsonObj.sector;
        row.insertCell(2).innerHTML = jsonObj.symbol;
        row.insertCell(3).innerHTML = jsonObj.ISIN;
      //  document.getElementById("securities").innerHTML = jsonObj.id;
    }
    
    function getData(){
    
        var jsonObj,i ; //read from response
        //connect to server
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.open("GET", "http://localhost:7890/getsecurity",true);
        xmlhttp.setRequestHeader("Content-Type", "application/json");
        xmlhttp.send();  

        xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            jsonarr = JSON.parse(this.responseText);
          //  document.getElementById("demo").innerHTML = myObj.name;
        }
    };
        for(i=0; i<jsonarr.length;i++){
           addRow(jsonarr[i]);
    
        }
    }

    function search(){
        var x = document.getElementById("mySearch").placeholder;
        //document.getElementById("demo").innerHTML = x;

    }

    window.onload = function(){
      window.getData = new getData();
    };