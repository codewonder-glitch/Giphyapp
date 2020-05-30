import React, { Component } from 'react';
import axios from 'axios';
import Bookmarks from './Bookmarks'
import {  BrowserRouter as Router, Route, Link ,Switch} from "react-router-dom";
import GifImages from './GifImages'
import './styles/Gif.scss'

export default class RouterCollection extends Component {
    constructor(props) {
        super(props);
        this.state={
        searchKey:'',
        srch:'',
        count:''
        }
    }
   

    componentDidMount() {
        this.getApi();
    }


    getApi=async()=> {
        var htmlArr=[]
        await fetch(`${'https://cors-anywhere.herokuapp.com/'}https://glacial-woodland-21756.herokuapp.com/giphy/v1/visitor/count`, {
            method:'GET',
           headers: {
             'Accept': 'application/json',
             'Content-Type': 'application/json'
           }
           }) .then((res) =>{return res.json()})
           .then((data)=>{
               console.log(data)
            this.setState({count:data.count})
           }).catch((err) => 
           console.log (err)
           )
   }
    handleChange=(e)=>{
        e.preventDefault()
        this.setState({srch:e.target.value})
    }

    render(){

        return(
           <div>

<React.Fragment>
     <div className="container">
 
      <Router>
     
         <div className="route">
        <div className="flex">
        
            <h1>Giphy</h1>
    <Link className="link" to="/" > Reactions</Link>
  <Link className="link" to="/Sports">Sports</Link>
   <Link className="link" to="/Fun">Fun</Link>
   <Link className="link" to="/Artists">Artists</Link>
   <Link className="link" to="/Bookmarks">Bookmarks</Link>
   <h1 className="visitcount">Visit#:{this.state.count}</h1>
   <h1 className="username">{this.props.username}</h1>
   </div>
   
   <div className="searchdiv">
       <input type="text" placeholder='Search' onChange={this.handleChange}></input>
   <Link to="/Search" >  <button type="submit" onClick={(e)=>this.setState({searchKey:this.state.srch})}>Search</button ></Link>
  
   </div>
   </div>
    <Switch>
    <Route exact path="/Search" ><GifImages searchKey={this.state.searchKey} /> </Route> 
    <Route exact path="/" ><GifImages searchKey="Reactions" /> </Route>  
    <Route exact path="/Sports"><GifImages searchKey="Sports" /> </Route> 
    <Route exact path="/Fun" ><GifImages searchKey="fun" /></Route>  
    <Route exact path="/Artists"><GifImages searchKey="Artists" /> </Route> 
        <Route exact path="/Bookmarks"><Bookmarks /></Route>  
    </Switch>
    </Router> 
  </div>  
           
   
     </React.Fragment> 
            </div>
        )
    }
}


    
    