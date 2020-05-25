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
        srch:''
        }
    }
   

    componentDidMount() {
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
     <div>
       <input type="text" onChange={this.handleChange}></input>
      <Router>
         <div className="Route">
         <Link to="/Search" >  <button type="submit" onClick={(e)=>this.setState({searchKey:this.state.srch})}>Submit</button ></Link>
    <Link to="/Reactions" > Reactions</Link>
  <Link to="/Sports">Sports</Link>
   <Link to="/Entertainment">Entertainment</Link>
   <Link to="/Artists">Artists</Link>
   <Link to="/Bookmarks">Bookmarks</Link>
   </div>
    <Switch>
    <Route exact path="/Search" ><GifImages searchKey={this.state.searchKey} /> </Route> 
    <Route exact path="/Reactions" ><GifImages searchKey="Reactions" /> </Route>  
    <Route exact path="/Sports"><GifImages searchKey="Sports" /> </Route> 
    <Route exact path="/Entertainment" ><GifImages searchKey="Entertainment" /></Route>  
    <Route exact path="/Artists"><GifImages searchKey="Artists" /> </Route> 
        <Route exact path="/Bookmarks"><Bookmarks /></Route>  
    </Switch>
    </Router> 
  </div>  

     </div>
     </React.Fragment> 
           </div> 
        )
    }
}

// const Entertainment=(props)=>{
//     // switch (props.name){
//     // case Entertainment:
    
    
//     return(
//     <div>
//       {props.data}
//     </div>
    
//     )
    
    
//     }
    
    