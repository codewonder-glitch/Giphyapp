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
    componentDidMount=()=>{
        this.getApi()
    }

    getApi=async()=> {
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
<div>
    <img src={dt.gifUrl}/>
    <button value={dt.gifID} onClick={this.gifDelete}> Delete</button>
    <button value={dt.gifID} onClick={this.gifUpdate}> Update</button>
    </div>
)
                
  }  )    
  this.setState({htmlArray:htmlArr})
 } ).catch((err) => 
            console.log ('error')
            )
    }

    gifDelete=async(e)=>{
        e.preventDefault()
console.log(e.target.value)
        await fetch('/giphy/v1/gifs/'+e.target.value, {
            method: 'DELETE',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            }
          })
    //       .then( => {
    //    // let updatedEmployees = [...this.state.employees].filter(i => i.id !== id);
    //        // this.setState({employees: updatedEmployees});
    //       });
          this.getApi()

    }
    gifUpdate=(e)=>{
        e.preventDefault()
    }

    render(){

        return(
           <div className="GridContainer">
{this.state.htmlArray}
           </div> 
        )
    }
}