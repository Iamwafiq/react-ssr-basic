import React from "react";
import withStyles from 'isomorphic-style-loader/withStyles'

import s from './style.css'

function LoginPage() {
  const [user, setUser] = React.useState('');
  const [password, setPassword] = React.useState('');

  const submit = () => {
    if(user=='test' && password=='test1234'){
      console.log('Success')
    }else if(user=='test' && password!=='test1234'){
      console.log('Password Incorrect')
    }else{
      console.log('Try Again')
    }
  };

  return (
    <div class="login">
        <input onBlur={(e)=> setUser(e.target.value)} type="text" placeholder="Username" id="username" />  
        <input onBlur={(e)=> setPassword(e.target.value)} type="password" placeholder="password" id="password"/>  
        <input onClick={()=>submit()} type="submit" value="Sign In"/>
    </div>
  );
}

export default withStyles(s)(LoginPage);



