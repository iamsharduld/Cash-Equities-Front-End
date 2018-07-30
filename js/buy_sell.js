
var jsonarr =
[
    [
        {
            "price": 43636,
            "quantity": 4574,
            "client_order": "24345325",
            "isin": "4",
            "direction": "B"
        },
        {
            "price": 3252,
            "quantity": 3252,
            "client_order": "2432",
            "isin": "4",
            "direction": "B"
        }
    ],
    [
        {
            "price": 2,
            "quantity": 3,
            "client_order": null,
            "isin": "4",
            "direction": "1"
        },
        {
            "price": 436,
            "quantity": 45,
            "client_order": "24325",
            "isin": "4",
            "direction": "S"
        }
    ]
]
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
    line2.innerHTML = "Market Price : " + value;
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
        xmlhttp.open("POST", "http://localhost:7890/getsecurityvalue",true);
        xmlhttp.setRequestHeader("Content-Type", "application/json");
        xmlhttp.send(JSON.stringify({isin:isin}));  

        xmlhttp.open("POST","http://localhost:7890/getsecurityvalue",true);
        xmlhttp.setRequestHeader("Content-Type", "application/json");
        xmlhttp.send();
        xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            jsonObj = JSON.parse(this.responseText);
          //  document.getElementById("demo").innerHTML = myObj.name;
            return jsonObj[0].sec_value;
        }
    };
    
}

function submitOrder(){

    document.getElementById("para").innerHTML = "hello";

    var id = -1;
    var client_code = "2";
    var isin,trade_time,quantity,limit_price;
     
    isin=getParameter("isin");
    quantity = document.getElementById("qty").value;
    //direction = document.getElementById("buysell").value;
    limit_price = document.getElementById("price").value;
    var date = new Date();
    trade_time = date.getHours() +":"+date.getMinutes();
    var xmlhttp = new XMLHttpRequest();
        xmlhttp.open("POST", "http://localhost:7890/matchorder",true);
        xmlhttp.setRequestHeader("Content-Type", "application/json");
        xmlhttp.send(JSON.stringify({id:id,client_code:client_code,isin:isin,
                trade_time:trade_time,quantity:quantity,direction:dir_value,limit_price:limit_price})); 

    //document.getElementById("para").innerHTML = id + client_code+isin+trade_time+quantity+dir_value+limit_price;
       /* xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var jsonObj = JSON.parse(this.responseText);
          //  document.getElementById("demo").innerHTML = myObj.name;
        }
    };*/
}

function cancelOrder(){
    window.location.href = "tws.html";
}

function direction(value){
    dir_value = value;
}


function getSecurityOrders(){

    var jsonar,i=0 ; //read from response
        //connect to server
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.open("GET", "http://localhost:7890/getoporder",true);
        xmlhttp.setRequestHeader("Content-Type", "application/json");
        xmlhttp.send();  

        xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            jsonarr = JSON.parse(this.responseText);
          //  document.getElementById("demo").innerHTML = myObj.name;
          for(i=0; i<jsonarr[0].length;i++){
            addRow(jsonarr[i]);
            document.getElementById("para").innerHTML = jsonarr.price;
         }
        }
    };

    for(i=0; i<2;i++){
       // addRow(jsonarr[i]);
        document.getElementById("para").innerHTML = i+" "+jsonarr[1][i].price;
     }
}

window.onload = function(){
    window.buysell = new buysell();
  };