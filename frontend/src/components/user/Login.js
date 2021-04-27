import React, { Component } from 'react';


class Login extends Component {
    render() {

        return (
            <div>
                <form id="myform" action="#" className="formLogin">
     
     <label for="email">الايميل</label>
     <input type="email" name="" id="email"/>
    
     <label for="pass">كلمة السر</label>
     <input type="password" name="" id="pass"/>
     
     
     <p id="newAccount1" className="newAccount" >انشاء حساب</p>
     
     <a href="#">
         <span></span>
         <span></span>
         <span></span>
         <span></span>
         تسجيل الدخول
       </a>
     
            
       
      
 </form>
 
            </div>
        );
    }
}

export default Login;