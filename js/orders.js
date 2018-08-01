function Init(){
    console.log("hello");
    

    //TEST CODE START
    /*
    var tmp = [{
        order_id:1,
        isin:2,
        company_name:3,
        quantity:4,
        direction:5,
        limit_price:6,
        unexexcuted:7,
        executed:[
                    {
                        price:1,
                        quantity:2
                    },
                    {
                        price:3,
                        quantity:4
                    },
                    {
                        price:0,
                        quantity:3
                    }

                
            ]
        
    },
    {
        order_id:1,
        isin:2,
        company_name:3,
        quantity:4,
        direction:5,
        limit_price:6,
        unexexcuted:7,
        executed:[
                    {
                        price:1,
                        quantity:2
                    },
                    {
                        price:3,
                        quantity:4
                    },
                    {
                        price:4,
                        quantity:5
                    },
                    {
                        price:6,
                        quantity:7
                    }
                    
                
            ]
        
    }]

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
        cell7.innerHTML = obj.unexexcuted;
        for(var j=0; j< obj.executed.length;j++){
            obj1 = obj.executed[j];
            console.log(obj1)

            if(j==0){
                cell8.innerHTML = obj1.quantity;
                cell9.innerHTML = obj1.price;
                continue;
            }
            
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
            

            cell8.innerHTML = obj1.quantity;
            cell9.innerHTML = obj1.price;

            //cnt+=1;



        }
        //cnt += 1;
    }
    */

    //TEST CODE END



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
                cell7.innerHTML = obj.unexexcuted;
                for(var j=0; j< obj.executed.length;j++){
                    obj1 = obj.executed[j];
                    console.log(obj1)

                    if(j==0){
                        cell8.innerHTML = obj1.quantity;
                        cell9.innerHTML = obj1.price;
                        continue;
                    }
                    
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
                    

                    cell8.innerHTML = obj1.quantity;
                    cell9.innerHTML = obj1.price;

                    //cnt+=1;



                }
                //cnt += 1;
            }

            


 


 

        }
    }



	
};


window.onload = function(){
	window.Init = new Init();
};