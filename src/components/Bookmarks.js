import React, { Component } from 'react';
import axios from 'axios';
import {  BrowserRouter as Router, Route, Link ,Switch} from "react-router-dom";

import './styles/Gif.scss'

export default class Bookmarks extends Component {
    constructor(props) {
        super(props);
        this.state={
src:'',
htmlArray:[]
        }
    }

    componentDidMount=async()=> {
        var htmlArr=[]
        await fetch('/giphy/v1/gifs', {
            method:'GET',
           headers: {
             'Accept': 'application/json',
             'Content-Type': 'application/json'
           }
           
         }).then(response=> response.json()) .then(data=>{
           
            console.log(data)
            htmlArr= data.map(dt=>{
return(

    <img src={dt.gifUrl}/>
)
                
  }  )    
  this.setState({htmlArray:htmlArr})
 } ).catch((err) => 
            console.log ('error')
            )
    }

    render(){

        return(
           <div>
{this.state.htmlArray}
           </div> 
        )
    }
}