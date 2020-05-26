import React, { Component } from 'react';
import RouterCollection from './Router'

// import './App.css';

class Login extends Component{
    constructor(props) {
        super(props);
        this.state={
username:'',
password:''
        }
    }

    componentDidMount=()=>{
      
    }
    // .then(response=> response.json())

    getApi=()=>{
     fetch('/giphy/v1/login/authenticate', {
        method:'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify( {
            "userName":this.state.username,
    "userPassword":this.state.password
          } )}) .then((res)=>{

            return res.text()})
            .then((text)=>{
                console.log(text);
            })
    
    
     
       .catch((err) => {
       console.log ('error')}
       )
    }
    login=(e)=>{
        e.preventDefault()
        this.getApi()

    }

    textChange=(e)=>{
        e.preventDefault()
        if(e.target.name=="username")
        this.setState({username:e.target.value})
        else
        this.setState({password:e.target.value})
    }



render(){
  return (
    <div className="App">
   
   <form style={{border:"1px solid #ccc"}}>
  <div className="container">
    <h1>Sign In</h1>
  
    <hr />

    <label for="email"><b>Email</b></label>
    <input type="text" placeholder="Enter Email" name="username" required onChange={this.textChange}/>

    <label for="psw"><b>Password</b></label>
    <input type="password" placeholder="Enter Password" name="psw" required onChange={this.textChange} />

   
   
    
    {/* <p>By creating an account you agree to our <a href="#" style="color:dodgerblue">Terms & Privacy</a>.</p> */}

    <div className="clearfix">
      {/* <button type="button" class="cancelbtn">Cancel</button> */}
      <button type="submit" className="signupbtn" onClick={this.login}>Sign In</button>
    </div>
  </div>
</form>

      
        {/* <RouterCollection/> */}
     
        

    </div>
  );
}
}


export default Login;