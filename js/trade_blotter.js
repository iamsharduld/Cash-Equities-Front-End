function Init(){
    console.log("hello");
    
    var cnt=0;
    //TEST CODE START
    /*
    var tmp = [
        {
            "isin": "INE397D01024",
            "direction": "B",
            "company_name": "BHARTI AIRTEL LTD",
            "quantity": 500,
            "order_id": 3,
            "executed": 0,
            "unexecuted": 500,
            "limit_price": 347.25,
            "lpair": []
        },
        {
            "isin": "INE397D01024",
            "direction": "S",
            "company_name": "BHARTI AIRTEL LTD",
            "quantity": 400,
            "order_id": 4,
            "executed": 0,
            "unexecuted": 400,
            "limit_price": 353.75,
            "lpair": []
        },
        {
            "isin": "INE059A01026",
            "direction": "B",
            "company_name": "CIPLA LTD",
            "quantity": 95,
            "order_id": 5,
            "executed": 95,
            "unexecuted": 0,
            "limit_price": 625,
            "lpair": [
                {
                    "key": 95,
                    "value": 625
                }
            ]
        },
        {
            "isin": "INE397D01026",
            "direction": "S",
            "company_name": null,
            "quantity": 400,
            "order_id": 16,
            "executed": 0,
            "unexecuted": 400,
            "limit_price": 350.5,
            "lpair": []
        },
        {
            "isin": "INE059A01026",
            "direction": "s",
            "company_name": "CIPLA LTD",
            "quantity": 555,
            "order_id": 20,
            "executed": 455,
            "unexecuted": 100,
            "limit_price": 624.75,
            "lpair": [
                {
                    "key": 355,
                    "value": 624.25
                },
                {
                    "key": 100,
                    "value": 625.5
                }
            ]
        },
        {
            "isin": "INE059A01026",
            "direction": "B",
            "company_name": "CIPLA LTD",
            "quantity": 100,
            "order_id": 35,
            "executed": 100,
            "unexecuted": 0,
            "limit_price": 2190,
            "lpair": [
                {
                    "key": 100,
                    "value": 2190
                }
            ]
        },
        {
            "isin": "INE059A01026",
            "direction": "B",
            "company_name": "CIPLA LTD",
            "quantity": 120,
            "order_id": 40,
            "executed": 120,
            "unexecuted": 0,
            "limit_price": 2191.35,
            "lpair": [
                {
                    "key": 120,
                    "value": 2191.5
                },
                {
                    "key": 121,
                    "value": 2191.0
                },
                {
                    "key": 122,
                    "value": 2191.999
                }
            ]
        }
    ]

    var returnText = tmp;
    var cnt=0;
    console.log(returnText.length)
    for(var i =0; i<returnText.length;i++){
        var obj = returnText[i];
        console.log(obj)
        var table = document.getElementById("one");
        var row = table.insertRow(cnt+1);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);
        var cell5 = row.insertCell(4);
        var cell6 = row.insertCell(5);
        var cell7 = row.insertCell(6);
        var cell8 = row.insertCell(7);
        var cell9 = row.insertCell(8);
        cell1.innerHTML = obj.order_id;
        cell2.innerHTML = obj.isin;
        cell3.innerHTML = obj.company_name;
        cell4.innerHTML = obj.quantity;
        cell5.innerHTML = obj.direction;
        cell6.innerHTML = obj.limit_price;
        cell7.innerHTML = obj.unexecuted;
        if(obj.lpair.length==0){
        
            cell8.innerHTML = '0';
            cell9.innerHTML = '0';
            cnt+=1;
        }
  
        for(var j=0; j< obj.lpair.length;j++){
            obj1 = obj.lpair[j];
            //console.log(obj1)

            if(j==0){
                console.log("here")
                //var cell8 = row.insertCell(7);
                ///var cell9 = row.insertCell(8);
                //console.log(obj1.quantity,obj1.price)
                cell8.innerHTML = obj1.key;
                cell9.innerHTML = obj1.value;
                
                
            }
            else{
                console.log(cnt,j)
            
                var row = table.insertRow(cnt+j+1);
                row.insertCell(0)
                row.insertCell(1)
                row.insertCell(2)
                row.insertCell(3)
                row.insertCell(4)
                row.insertCell(5)
                row.insertCell(6)
                
                var cell8 = row.insertCell(7);
                var cell9 = row.insertCell(8);
                
                console.log(obj1)
                console.log(obj1.key,obj1.value)
                cell8.innerHTML = obj1.key;
                cell9.innerHTML = obj1.value;
    
                //cnt+=1;
    
            }
            //cnt += 1;
            


        }
        cnt += j;
    }
    

    */
    //TEST CODE END


    
    var clientCode = localStorage.getItem("loginDet");
    console.log("clientcode",typeof(clientCode));
    var tmp = "http://localhost:8891/tradeblotter/";
    var fin = (tmp+(clientCode).replace(/"/g,""));
    console.log("done11")

    var xmlhttp = new XMLHttpRequest();   // new HttpRequest instance 
    xmlhttp.open("GET", fin,true);
    xmlhttp.setRequestHeader("Content-Type", "application/json");
    xmlhttp.send();
    

    xmlhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){

            var returnText = xmlhttp.responseText;
            returnText = JSON.parse(returnText);
            console.log(returnText.length)

            for(var i =0; i<returnText.length;i++){
                var obj = returnText[i];
                console.log(obj)
                var table = document.getElementById("one");
                var row = table.insertRow(cnt+1);
                var cell1 = row.insertCell(0);
                var cell2 = row.insertCell(1);
                var cell3 = row.insertCell(2);
                var cell4 = row.insertCell(3);
                var cell5 = row.insertCell(4);
                var cell6 = row.insertCell(5);
                var cell7 = row.insertCell(6);
                
                cell1.innerHTML = obj.id;
                cell2.innerHTML = obj.isin;
                cell3.innerHTML = obj.company_name;
                cell4.innerHTML = obj.quantity;
                cell5.innerHTML = obj.direction;
                cell6.innerHTML = obj.limit_price;
                cell7.innerHTML = obj.lpair[0].value;
                cnt+=1;
                
          
                
            }

        }
    }




	
};


window.onload = function(){
	window.Init = new Init();
};