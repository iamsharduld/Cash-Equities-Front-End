function Init(){
    console.log("hello");
    
    var xmlhttp = new XMLHttpRequest();   // new HttpRequest instance 
    xmlhttp.open("GET", "http://localhost:8891/getmyorder/A001",true);
    xmlhttp.setRequestHeader("Content-Type", "application/json");
    xmlhttp.send();
    

    xmlhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){

            var returnText = xmlhttp.responseText;
            returnText = JSON.parse(returnText);
            console.log(returnText.length)
            var cnt=0;
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
                cell1.innerHTML = obj.order_id;
                cell2.innerHTML = obj.isin;
                cell3.innerHTML = obj.company_name;
                cell4.innerHTML = obj.quantity;
                cell5.innerHTML = obj.direction;
                cell6.innerHTML = obj.limit_price;
                cell7.innerHTML = obj.executed;
                cell8.innerHTML = obj.unexexcuted;
                cnt += 1;
            }
            


 


 

        }
    }



	
};


window.onload = function(){
	window.Init = new Init();
};