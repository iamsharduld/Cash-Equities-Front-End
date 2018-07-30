
(function ($) {
    "use strict";


    /*==================================================================
    [ Validate ]*/
    var input = $('.validate-input .input100');

    $('.validate-form').on('submit',function(){
        var check = true;

        for(var i=0; i<input.length; i++) {
            if(validate(input[i]) == false){
                showValidate(input[i]);
                check=false;
            }
        }

        return check;
    });


    $('.validate-form .input100').each(function(){
        $(this).focus(function(){
           hideValidate(this);
        });
    });

    function validate (input) {
        if($(input).attr('type') == 'email' || $(input).attr('name') == 'email') {
            if($(input).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
                return false;
            }
        }
        else {
            if($(input).val().trim() == ''){
                return false;
            }
        }
    }

    /*function showValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).addClass('alert-validate');
    }

    function hideValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).removeClass('alert-validate');
    }*/
    
    

})(jQuery);


// My Code

function Init(){
	var loginbtn = document.getElementById("submitBtn");
	loginbtn.addEventListener('click',this.login.bind(this));
};

Init.prototype.login = function(){

    console.log("hello");


    var userId1 = document.getElementById("userId").value;
    var passwd1 = document.getElementById("passwd").value;
    console.log(userId1,passwd1);
    //document.location.replace("tws.html");
    
    var xmlhttp = new XMLHttpRequest();   // new HttpRequest instance 
    xmlhttp.open("POST", "http://localhost:7890/validateuser",true);
    xmlhttp.setRequestHeader("Content-Type", "application/json");
    xmlhttp.send(JSON.stringify({client_code:userId1, password:passwd1}));
    
    xmlhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){

            console.log(xmlhttp.responseText);
            var returnText = xmlhttp.responseText;
            if(returnText=="success"){
                document.location.replace("tws.html");
                console.log("login success"); 
            }
            else{
                window.alert("Incorrect credentials");
                console.log("login failure");
            }
 

        }
    }
	
	
};



window.onload = function(){
	window.Init = new Init();
};