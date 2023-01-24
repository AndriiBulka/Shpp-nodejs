    const Validator =  {
      validateEmail: (email) => /^[a-zA-Z\d][-.+a-zA-Z\d]{1,19}@[a-zA-Z\d.!$%&’*+/=?^_-]{1,15}\.[a-z]{1,5}\b$/.test(email),
      validatePhone: (phone) => phone.length < 25 ? /^((\+[\s-]*?3[\s-]*?8[\s-]*?)|[\s-]*?)(\(?0\d[\s-]?\d[\s-]?\)?)[\s-]*?(\d[\s-]*?){7}$/.test(phone): false,
      validatePassword: (password) => /^(?=\w*?[A-Z])(?=\w*?[a-z])(?=\w*?[0-9])\w{8,}$/.test(password),
      }

    const emails =["fi@secondpart.end","first-part@.se=cond%p.art.end","first.part@se=cond%part.r", //valid

                "f@secondart.end","first-part@.se=cond@part.end","-firstpart@.se=cond%.enddeded",  //invalid
                "firs_tpart@.se.en","firstpart@.se.enddeded"]; //invalid

    const phones = ["+38 (099) 567 8901","+38 099 5 6 7 8 9  01","(09-9) 567-890-1","--  (099) 567 890-1", //valid

                    "+38 (099) 567 8901 0","+38 099 a0000000","+38 (0989) 567 8901","+48 (0989) 567 8901"]; //invalid

    const passwords = ["C00l_Pass","SupperPas1", //valid
    
                        "Cool_pass","C00l"];//invalid


     validationLog(emails,"email");
     validationLog(phones,"phone"); 
     validationLog(passwords,"password");
     

    function validationLog(array,key){
        console.log("\n");
        switch(key){
            case "email": array.map(element => console.log(`${element} - ${Validator.validateEmail(element) === true ? "valid" : "invalid"}`));
               break  ;        
            case "phone": array.map(element => console.log(`${element} - ${Validator.validatePhone(element) === true ? "valid" : "invalid"}`));     
            break;
         case "password": array.map(element => console.log(`${element} - ${Validator.validatePassword(element) === true ? "valid" : "invalid"}`)); 
         break;
         default: console.log("No such vaildation"); 
        };
           
        
     }