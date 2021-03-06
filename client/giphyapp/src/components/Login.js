import React, { Component } from 'react';
import RouterCollection from './Router'

// import './App.css';

class Login extends Component{
    constructor(props) {
        super(props);
        this.state={
username:'',
password:'',
gotopage:false
        }
    }

    componentDidMount=()=>{
      
    }
    // .then(response=> response.json())

    getApi=()=>{
     fetch(`${'https://cors-anywhere.herokuapp.com/'}https://glacial-woodland-21756.herokuapp.com/giphy/v1/login/authenticate`, {
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
                var arr =  text.split(':')
            console.log(arr[1])
if(arr[1]=="true}"){
this.setState({gotopage:true})
// document.getElementsByClassName("App")[0].style.display="none"
}
else
alert("login failed")

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
      <React.Fragment>
              <div className="App">
    { this.state.gotopage ==false &&
        
   
   <form style={{border:"4px solid purple"}}>
  <div className="container">
    <h1>Sign In</h1>
  
    <hr />

    <label for="email"><b>UserName</b></label>
    <input type="text" placeholder="Enter Email" name="username" required onChange={this.textChange}/>

    <label for="psw"><b>Password</b></label>
    <input type="password" placeholder="Enter Password" name="psw" required onChange={this.textChange} />

   
   
    
    {/* <p>By creating an account you agree to our <a href="#" style="color:dodgerblue">Terms & Privacy</a>.</p> */}

    <div className="clearfix">
      {/* <button type="button" class="cancelbtn">Cancel</button> */}
      <button type="submit" className="signinbtn" onClick={this.login}>Sign In</button>
    </div>
  </div>
</form>}

      {this.state.gotopage==true &&
        <RouterCollection username={this.state.username}/>}
     
        

    </div>
    </React.Fragment>

  );
}
}


export default Login;