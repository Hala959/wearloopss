import React, { Component } from 'react';

class Signup extends Component {
    render() {
        return (
            <div>
                 <form action="#" className="formSignup">
       
       <label for="user">اسم المستخدم</label>
       <input type="text" name="" id="user"/>
       <label for="email">الايميل</label>
       <input type="email" name="" id="email"/>
       <label for="pass">كلمة السر</label>
       <input type="password" name="" id="pass"/>
       <label for="phone">رقم الجوال</label>
       <input type="text" name="" id="phone"/>
   
       <p id="newAccount1" className="newAccount" > <a href="#"></a>تسجيل الدخول</p>
       
       <a href="#" ClassName ="Signupa">
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

export default Signup;
