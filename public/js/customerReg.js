function customerValidation(){
    var firstName = document.customer.firstName;
    var lastName = document.customer.lastName;
    var dob = document.customer.dob;
    var contact = document.customer.contact;
    var nationality = document.customer.nationality;
    var nin = document.customer.nin;
    var maritalStatus = document.customer.maritalStatus;
    var single = document.customer.single;
    var married = document.customer.married;
    var stageName = document.customer.stageName;
    var lc1 = document.customer.lc1;
    var lc3 = document.customer.lc3;
    var oYes = document.getElementById('yes');
    var oNo = document.getElementById('no');
    var otherLoans = document.customer.otherLoans;
    var refereeName = document.customer.refereeName;
    var refereeDob = document.customer.refereeDob;
    var refereeOccupation = document.customer.refereeOccupation;
    var vehicleType = document.customer.vehicleType;
    var downPayment = document.customer.downPayment;
    var todayDate = document.customer.todayDate;
    
    
    if(validatefirstName(firstName)){
        if(validatelastName(lastName)){
            if(validateDob(dob)){
                if(validateContact(contact)){
                    if(validateNationality(nationality)){
                        if(validateNin(nin)){                                                         
                                if(validateStageName(stageName)){
                                        if(validateMaritalStatus(lc1,lc3)){
                                           if(validateMaritalStatus(oYes,oNo)){
                                                if(validateRefereeName(refereeName)){
                                                    if(validateRefereeDob(refereeDob)){
                                                        if(validateRefereeOccupation(refereeOccupation)){
                                                            if(validateVehicle(vehicleType)){
                                                                if(validateDownPayment(downPayment)){
                                                                    if(validateTodayDate(todayDate)){
                                                                        form.submit();            
                                                                      }
                                                                    
                                                                }
                                                            }
                                                        }
                                                    }
                                                    
                                                }
                                                

                                            }
                                            
                                           
  
                                        }
                                    }                         
                            
                        }
                    }
                }
            }
        }
    }
    
    
    return false;
  } 
  
  //Validate first name
  function validatefirstName(name){
    var letters = /^[A-Za-z]+$/;
    if(name.value.match(letters)){
        return true;
    }
    else {
        firstName.style.border = "2px solid red";
        document.getElementById('firstName_div').style.color = "red";
        firstName_error.textContent = "first name is required";
        firstName.focus();
        firstName.addEventListener('blur', () =>{
            document.getElementById('firstName_div').style.color = "";
            firstName_error.textContent = "";
            firstName.style.border = "";
           
        })
      
        return false;
    }   
  }
  
  //Validate last name
  function validatelastName(name){
    var letters = /^[A-Za-z]+$/;
    if(name.value.match(letters)){
        return true;
    }
    else {
        lastName.style.border = "2px solid red";
        document.getElementById('lastName_div').style.color = "red";
        lastName_error.textContent = "last name is required";
        lastName.focus();
        lastName.addEventListener('blur', () =>{
          document.getElementById('lastName_div').style.color = "";
          lastName_error.textContent = "";
          lastName.style.border = "";
         
      })
    
        return false;
    }   
  }
  
  //Validate Date of Birth
  function validateDob(date){
    if(date.value != ""){
      return true;
    }
    else {
        dob.style.border = "2px solid red";
        document.getElementById('dob_div').style.color = "red";
        dob_error.textContent = "Date of birth is required";
        dob.focus();
        dob.addEventListener('blur', () =>{
          document.getElementById('dob_div').style.color = "";
          dob_error.textContent = "";
          dob.style.border = "";
         
      })
    
        return false;
  
    }
  }
  
  //Validate phone contact
  function validateContact(a){
    var numbers = /^[0-9]+$/;
    if(a.value.match(numbers)){
        return true;
    }
    else {
      contact.style.border = "2px solid red";
      document.getElementById('contact_div').style.color = "red";
      contact_error.textContent = "Contact is required";
      contact.focus();
      contact.addEventListener('blur', () =>{
          document.getElementById('contact_div').style.color = "";
          contact_error.textContent = "";
          contact.style.border = "";
         
      })
    
      return false;
    }
  }

  //Validate Nationality
  function validateNationality(name){
    var letters = /^[A-Za-z]+$/;
    if(name.value.match(letters)){
        return true;
    }
    else {
        nationality.style.border = "2px solid red";
        document.getElementById('nationality_div').style.color = "red";
        nationality_error.textContent = "Nationality is required";
        nationality.focus();
        nationality.addEventListener('blur', () =>{
          document.getElementById('nationality_div').style.color = "";
          nationality_error.textContent = "";
          nationality.style.border = "";
         
      })
    
        return false;
    }   
  }

   //Validate NIN
   function validateNin(uid){
    var uid_len = uid.value.length;
    var letters = /^[A-Za-z]{3}[a-zA-Z0-9]/;
    if ( uid.value.match(letters)==null || uid_len !== 13){
        nin.style.border = "2px solid red";
        document.getElementById('nin_div').style.color = "red";
        nin_error.textContent = "NIN must have 13 characters starting with 3 letters";
        nin.focus();
        nin.addEventListener('blur', () =>{
            document.getElementById('nin_div').style.color = "";
            nin_error.textContent = "";
            nin.style.border = "";
           
        })
      
        
        return false;
   
    }
    return true;
}


  //Validate marital status
  function validateMaritalStatus(single,married){
    x=0;
    if(single.checked){
        x++;
    }
    if(married.checked){
        x++; 
    }
    if(x==0){
        alert('Select Single/Married');
        single.focus();
        return false;
    }
    
    return true;
    
}

 //Validate Stage name
 function validateStageName(name){
    var letters = /^[A-Za-z]+$/;
    if(name.value.match(letters)){
        return true;
    }
    else {
        stageName.style.border = "2px solid red";
        document.getElementById('stageName_div').style.color = "red";
        stageName_error.textContent = "Stage name is required";
        stageName.focus();
        stageName.addEventListener('blur', () =>{
            document.getElementById('stageName_div').style.color = "";
            stageName_error.textContent = "";
            stageName.style.border = "";
           
        })
      
      
        return false;
    }   
}

 //Validate Referee name
 function validateRefereeName(refereeName){
    var letters = /^[A-Za-z]+$/;
    if(refereeName.value.match(letters)){
        return true;
    }
    else {
        refereeName.style.border = "2px solid red";
        document.getElementById('refereeName_div').style.color = "red";
        refereeName_error.textContent = "Referee name is required";
        refereeName.focus();
        refereeName.addEventListener('blur', () =>{
            document.getElementById('refereeName_div').style.color = "";
            refereeName_error.textContent = "";
            refereeName.style.border = "";
           
        })
      
        return false;
    }   
  }
   //Validate Referee Date of Birth
   function validateRefereeDob(refereeDob){
    if(refereeDob.value != ""){
       return true;
    }
    else {
        
        refereeDob.style.border = "2px solid red";
        document.getElementById('refereeDob_div').style.color = "red";
        refereeDob_error.textContent = " Referee Date of birth is required";
        refereeDob.focus();
        refereeDob.addEventListener('blur', () =>{
            document.getElementById('refereeDob_div').style.color = "";
            refereeDob_error.textContent = "";
            refereeDob.style.border = "";
           
        })
      
        return false;
  
    }
}  

 //Validate Referee Occupation
 function validateRefereeOccupation(refereeOccupation){
    var letters = /^[A-Za-z]+$/;
    if(refereeOccupation.value.match(letters)){
        return true;
    }
    else {
        refereeOccupation.style.border = "2px solid red";
        document.getElementById('refereeOccupation_div').style.color = "red";
        refereeOccupation_error.textContent = "Referee occupation is required";
        refereeOccupation.focus();
        refereeOccupation.addEventListener('blur', () =>{
            document.getElementById('refereeOccupation_div').style.color = "";
            refereeOccupation_error.textContent = "";
            refereeOccupation.style.border = "";
           
        })
      
        return false;
    }   
  }

  //Validate vehicle
  function validateVehicle(vehicleType){
    if(vehicleType.value == ""){
        alert('Select your vehicle from the list');
        vehicleType.focus();
        return false;
    }
    else {
        return true;
    }
}
  
  //Validate down payment
  function validateDownPayment(downPayment){
      var mailformat = /^[0-9a-zA-Z]+$/;
      if(downPayment.value.match(mailformat)){
          return true;
      } 
      else {
      downPayment.style.border = "2px solid red";
      document.getElementById('downPayment_div').style.color = "red";
      downPayment_error.textContent = "Enter valid figure";
      downPayment.focus();
      downPayment.addEventListener('blur', () =>{
          document.getElementById('downPayment_div').style.color = "";
          downPayment_error.textContent = "";
          downPayment.style.border = "";
         
      })
    
      return false;
      }
  }
  
  //Validate current date
  function validateTodayDate(todayDate){
      if(todayDate.value != ""){
          alert('Form Succesfully Submitted');
          return true;
      }
      else {
          
          todayDate.style.border = "2px solid red";
          document.getElementById('todayDate_div').style.color = "red";
          todayDate_error.textContent = "Date of birth is required";
          todayDate.focus();
          todayDate.addEventListener('blur', () =>{
              document.getElementById('todayDate_div').style.color = "";
              todayDate_error.textContent = "";
              todayDate.style.border = "";
             
          })
        
          return false;
    
      }
  }  
    
  