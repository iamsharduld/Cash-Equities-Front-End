

var jsonarr;
/*=

[
    {
      "company_name" : "TITAN COMPANY LTD",
    "sector": "FMCG",
    "symbol": "TITAN",
    "isin": "INE280A01028"
    },
    {
      "company_name" : "EICHER MOTORS LTD",
    "sector": "AUTO",
    "symbol": "EICHERMOT",
    "isin": "INE066A01013"
    },
    {
      "company_name" : "BHARTI AIRTEL LTD",
    "sector": "TELECOM",
    "symbol": "BHARATIARTL",
    "isin": "INE397D01024"
    },
    {
      "company_name" : "MARUTI UDYOG LTD",
    "sector": "FMCG",
    "symbol": "TITAN",
    "isin": "INE280A01028"
    },
    {
      "company_name" : "CIPLA LTD",
    "sector": "FMCG",
    "symbol": "TITAN",
    "isin": "INE280A01028"
    }
    ]

    */
    function addRow(jsonObj,index) {
        var table = document.getElementById("securities");
        var row = table.insertRow(1);
       
        row.addEventListener("click",function() {
          window.location.href = "buy_sell.html?&company="+jsonObj.company_name+"&sector="+jsonObj.sector+"&symbol="+jsonObj.symbol+"&isin="+jsonObj.isin});
        row.insertCell(0).innerHTML = index;
        row.insertCell(1).innerHTML = jsonObj.company_name;
        row.insertCell(2).innerHTML = jsonObj.sector;
        row.insertCell(3).innerHTML = jsonObj.symbol;
        row.insertCell(4).innerHTML = jsonObj.isin;
      //  document.getElementById("securities").innerHTML = jsonObj.id;
    }
    
    function getData(){
    
        var i ; //read from response
        //connect to server
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.open("GET", "http://localhost:8891/getsecurity",true);
        xmlhttp.setRequestHeader("Content-Type", "application/json");
        xmlhttp.send();  

        xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            jsonarr = JSON.parse(this.responseText);
          //  document.getElementById("demo").innerHTML = myObj.name;
          for(i=0; i<jsonarr.length;i++){
            addRow(jsonarr[i],jsonarr.length-i);
     
         }
        }
    };
    /*
    for(i=0; i<jsonarr.length;i++){
      addRow(jsonarr[i],jsonarr.length-i);
    }*/
  }
  
    function search(){
      var input, filter, table, tr, td, i;
      input = document.getElementById("myInput");
      filter = input.value.toUpperCase();
      //document.getElementById("para").innerHTML=filter;
      table = document.getElementById("securities");
      tr = table.getElementsByTagName("tr");
      for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[1];
        if (td) {
          if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
            tr[i].style.display = "";
          } else {
            tr[i].style.display = "none";
          }
        }       
      }

    }

    window.onload = function(){
      window.getData = new getData();
    };