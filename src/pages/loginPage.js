import React from "react";


function LoginPage() {
  const [user, setUser] = React.useState('');
  const [password, setPassword] = React.useState('');

  const submit = () => {
    if(user=='test' && password=='test1234'){
      console.log('Success')
    }else{
      console.log('Try Again')
    }
  };

  return (
    <div style={{'display': 'inline-grid','padding': '18em 35em;','border': '2px white solid','height': '300px','width': '300px', 'backgroundColor': '#85C9E9'}}>
      <table style={{'display': 'grid', 'margin': 'auto','border': '2px black solid','padding': '5px 5px', 'backgroundColor': 'white'}}>
      
        <tr style={{'height': '30px','margin': 'auto', 'padding': '5px', 'fontSize':'18px'}}>
          <td><label >Username</label></td>
          <td><input onBlur={(e)=> setUser(e.target.value)} type="text" id="user"/></td>
        </tr>
        <tr style={{'height': '30px', 'margin': 'auto'}}>
          <td><label >Password</label></td>
          <td><input onBlur={(e)=> setPassword(e.target.value)} type="password" id="pwd"/></td>
        </tr>
        <button onClick={()=>submit()} style={{'margin': '5px 40% 0px', 'backgroundColor': '#85C9E9','color':'white'}}>Login</button>
      </table>
    </div>
  );
}

export default LoginPage;