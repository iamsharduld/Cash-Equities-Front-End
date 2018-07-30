function buysell(jsonObj){
        
 
    //WRITE CONTENT 
    var line1 = document.getElementById('line1');
    var line2 = document.getElementById('line2');
    var line3 = document.getElementById('line3');
    var line4 = document.getElementById('line4');
    line1.innerHTML = "Company : " +  getParameter("company");
    line2.innerHTML = "Sector : " +  getParameter("sector");
    line3.innerHTML = "Symbol : " + getParameter("symbol");
    line4.innerHTML = "ISIN : " + getParameter("isin");
   // document.getElementById("para").innerHTML = "hello";

  
}

function getParameter(theParam){

    var params = window.location.search.substr(1).split('&');
    for(var i=0; i < params.length;i++){
        var p = params[i].split('=');
        
        if(p[0] == theParam)

            return decodeURIComponent(p[1]);
    }

    return false;
}

function getSecurityValue(isin){

    var xmlhttp = new XMLHttpRequest();
        xmlhttp.open("POST", "http://localhost:7890/getsecurityvalue/"+isin,true);
        xmlhttp.setRequestHeader("Content-Type", "application/json");
        xmlhttp.send();  

        xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            jsonarr = JSON.parse(this.responseText);
          //  document.getElementById("demo").innerHTML = myObj.name;
        }
    };
}

window.onload = function(){
    window.buysell = new buysell();
  };