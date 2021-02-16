// Document is ready 
$(document).ready(function () { 

    // Clear all error messages 

    clearAllMessages();

    // Validating f,m,l name on each keypress

    for(let name of [{id:'fname',name:'First Name'},{id:'mname',name:'Middle Name'},{id:'lname',name:'Last Name'}]){
        $('#'+name.id).keyup(()=>{
            validateName(name);
        })
    }

    //  Validating Email on each keypress

    $('#email').keyup(()=>{
        validateEmail();
    })


    // Validating Password on each keypress

    $('#password').keyup(() => { 
        validatePassword(); 
    }); 

    // Validating Mobile On each keypress

    $('#mobile').keyup(() => { 
        validateMobile(); 
    }); 

    // Validating  pincode On each keypress

    $('#pincode').keyup(() => { 
        validatepincode(); 
    }); 




    // This function validate the name
    function validateName(obj){
        let id=obj.id;
        let name = $('#'+id).val().trim();

        let regex = /^[a-zA-Z]+$/; 
        // remove the Extra spaces
        name=name.trim();
        
        console.log(name.split(' ').length);

        if(name.length==''){
            $('#error_'+id).html('**'+obj["name"]+' can\'t be  Empty')
            $('#error_'+id).show();
            $('#'+id).addClass('border');
            return false;
        }
        else if(!regex.test(name)){
            $('#error_'+id).html('**'+obj["name"]+' can\'t contain numbers or special character');
            $('#error_'+id).show();
            $('#'+id).addClass('border');
            return false;
        }
        else if(name.split(' ').length>1){
            $('#error_'+id).html('**'+obj["name"]+' should be one word Only')
            $('#error_'+id).show();
            $('#'+id).addClass('border');
            return false;  
        }
        else{
           $('#error_'+id).hide(); 
           $('#'+id).removeClass('border');
           $('#'+id).addClass('correct');
           return false;
        }
    }


    //This function validate Email

    function validateEmail(){
        let email=$('#email');
        let regex = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/; 
        let s = email.val().trim(); 
        if(!regex.test(s)){ 
            $('#error_email').html('**Enter Correct Email');
            $('#error_email').show();
           email.addClass('border');
           return false; 
         } 
         else{ 
            $('#error_email').hide(); 
            $('#email').removeClass('border');
            $('#email').addClass('correct');
             return true; 
         } 
    }

    // Validate for Password
    function validatePassword() { 
        let passwrdValue = $('#password').val().trim(); 
        if (passwrdValue.length == '') {
            $('#password').addClass('border'); 
            $('#error_password').show(); 
            $('#error_password').html ("**length of your password must be between 3 and 15"); 
            return false; 
        }  
        if ((passwrdValue.length < 3)||(passwrdValue.length > 15)) {
            $('#password').addClass('border'); 
            $('#error_password').show(); 
            $('#error_password').html ("**length of your password must be between 3 and 15"); 
            return false; 
        } else { 
            $('#error_password').hide(); 
            $('#password').removeClass('border');
            $('#password').addClass('correct');
            return true;
        } 
    } 



    // Validate for Mobile

    function validateMobile() {

        let mobile=$('#mobile');
        let regex = /^[0]?[456789]\d{9}$/; 
        
        let mobileValue = mobile.val().trim(); 

        console.log("Regex result " +regex.test(mobileValue));

        if (mobileValue.length == '') { 
            $('#error_mobile').show();
            $('#mobile').addClass('border'); 
            $('#error_mobile').html("**Mobile Number can be Empty"); 
            return false; 
        }  
        else if (!(regex.test(mobileValue))) { 
            $('#error_mobile').show();
            $('#mobile').addClass('border'); 
            $('#error_mobile').html("**Enter Correct Mobile Number"); 
            return false; 
        } else { 
            $('#error_mobile').hide(); 
            $('#mobile').removeClass('border');
            $('#mobile').addClass('correct');
            return true;
        } 
    }


        // Validate for pincode

        function validatepincode() {

            console.log('pincode called');

            let pincode=$('#pincode');
            let regex = /^\d{6}(?:[-\s]\d{4})?$/; 
            
            let pincodeValue = pincode.val().trim(); 

            if (!(regex.test(pincodeValue))) { 
                $('#error_pincode').show(); 
                $('#pincode').addClass('border');
                $('#error_pincode').html("**Enter Correct pincode Number"); 
                return false; 
            } else { 
                $('#error_pincode').hide(); 
                $('#pincode').removeClass('border');
                $('#pincode').addClass('correct');
                return true;
            } 

        }


}); 
    

function clearAllMessages(){
    let allids=['fname','mname','lname','mobile','email','password','pincode','gender','country','subject'];
    for(let id of allids){
        $('#error_'+id).hide();
    }
}
