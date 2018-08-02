var dir_value;
function buysell(jsonObj){
        
    
    //WRITE CONTENT 
    var line1 = document.getElementById('line1');
    var line2 = document.getElementById('line2');
    var line3 = document.getElementById('line3');
    var line4 = document.getElementById('line4');
    var line5 = document.getElementById('line5');
    line1.innerHTML = "Company : " +  getParameter("company");
    line3.innerHTML = "Sector : " +  getParameter("sector");
    line4.innerHTML = "Symbol : " + getParameter("symbol");
    line5.innerHTML = "ISIN : " + getParameter("isin");
   // document.getElementById("para").innerHTML = "hello";
   var value = getSecurityValue(getParameter("isin"));
    //line2.innerHTML = "Market Price : " + getSecurityValue(getParameter("isin"));
  getSecurityOrders();
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
    var jsonObj;
    var xmlhttp = new XMLHttpRequest();
        xmlhttp.open("POST", "http://localhost:8891/getSecurityValue/"+isin,true);
        xmlhttp.setRequestHeader("Content-Type", "application/json");
        xmlhttp.send();  

    
        xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            jsonObj = JSON.parse(this.responseText);
            document.getElementById("line2").innerHTML = "Market Price : "+jsonObj[0].sec_value;
            return jsonObj[0].sec_value;
        }
        else
        document.getElementById("line2").innerHTML = "Market Price : error 404";
    };
    
}

function submitOrder(){

    document.getElementById("para").innerHTML = "hello";

    var id = -1;
    var client_code;
    var isin,trade_time,quantity,limit_price;
     
    isin=getParameter("isin");
    quantity = document.getElementById("qty").value;
    //direction = document.getElementById("buysell").value;
    limit_price = document.getElementById("price").value;
    var date = new Date();
    trade_time = date.getHours() +":"+date.getMinutes();
    client_code = localStorage.getItem("loginDet");
    var jsonobj=[{id:id,client_code:client_code.replace(/"/g,""),isin:isin,
           trade_time:trade_time,quantity:quantity,direction:dir_value,limit_price:limit_price}];
    
    console.log(jsonobj)
    console.log(client_code.replace(/"/g,""))
    document.getElementById("para").innerHTML="h";
    var xmlhttp = new XMLHttpRequest();
        xmlhttp.open("POST", "http://localhost:8891/matchorder",true);
        xmlhttp.setRequestHeader("Content-Type", "application/json");
        xmlhttp.send(JSON.stringify(jsonobj)); 

}

function cancelOrder(){
    window.location.href = "tws.html";
}

function direction(value){
    dir_value = value;
}


function getSecurityOrders(){

    var jsonarr,i=0 ; //read from response
        //connect to server
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.open("POST", "http://localhost:8891/gettoporder/"+getParameter("isin"),true);
        xmlhttp.setRequestHeader("Content-Type", "application/json");
        xmlhttp.send();  

        xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            jsonarr = JSON.parse(this.responseText);
            console.log(jsonarr)
         var max;
		max=Math.max(jsonarr.Sell.length,jsonarr.Buy.length);
          for(i=0; i<max;i++){
	
            addRow(jsonarr.Sell[i],jsonarr.Buy[i]);
            //document.getElementById("para").innerHTML = jsonarr[0][0];
         }
        }
        //else
           // document.getElementById("para").innerHTML = "error";
    };
    
}

function addRow(sell,buy) {
    var table = document.getElementById("qwerty");
    var row= table.insertRow(table.rows.length);
console.log(table.rows.length)
    if(buy!=null){
        row.insertCell(0).innerHTML = buy.quantity;
        row.insertCell(1).innerHTML = buy.price;
    }
	else
	{
row.insertCell(0).innerHTML = "";
        row.insertCell(1).innerHTML = "";

}
    if(sell!=null){
    row.insertCell(2).innerHTML = sell.price;
    row.insertCell(3).innerHTML = sell.quantity;
    }
	else
	{
		row.insertCell(2).innerHTML = "";
        	row.insertCell(3).innerHTML = "";

}

  //  document.getElementById("securities").innerHTML = jsonObj.id;
}
window.onload = function(){
    window.buysell = new buysell();
  };