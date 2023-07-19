export  function signIn_validate(values){


    const errors={};

    if (!values.email) {
        errors.email = 'Required';
      }else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
    }

    

    if(!values.password){
        errors.password='Required';
    }else if(values.password.length<8 || values.password.length>20){
        errors.password= 'Must be greater then 8 and less then 20 characters long'
    }else if(values.password.includes(" ")){
        errors.password="Invalid Password"
    }

    return errors;

}


export default function signUp_validate(values){
    const errors={};

    if(!values.userName){
        errors.userName="Required"
    }else if(values.userName.includes(" ")){
        errors.userName="Invalid Username"
    }


    if (!values.email) {
        errors.email = "Required";
      }else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = "Invalid email address";
    }

   

    if(!values.password){
        errors.password="Required";
    }else if(values.password.length<8 || values.password.length>20){
        errors.password= "Must be greater then 8 and less then 20 characters long"
    }else if(values.password.includes(" ")){
        errors.password="Invalid Password"
    }


    return errors;
}