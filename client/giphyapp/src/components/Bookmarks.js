import React, { Component } from 'react';
import axios from 'axios';
import {  BrowserRouter as Router, Route, Link ,Switch} from "react-router-dom";
// import $ from 'jquery';


import './styles/Gif.scss'

export default class Bookmarks extends Component {
    constructor(props) {
        super(props);
        this.state={
src:'',
filePath:'',
htmlArray:[],
urlChange:''
        }
    }
    componentDidMount=()=>{
        this.getApi()
    }

    getApi=async()=> {
        var htmlArr=[]
        await fetch(`${'https://cors-anywhere.herokuapp.com/'}https://glacial-woodland-21756.herokuapp.com/giphy/v1/gifs`, {
            method:'GET',
           headers: {
             'Accept': 'application/json',
             'Content-Type': 'application/json'
           }
           }).then(response=> response.json()) .then(data=>{
           
            console.log(data)
            htmlArr= data.map(dt=>{
return(
<div className="imageContainer">
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
        await fetch(`${'https://cors-anywhere.herokuapp.com/'}https://glacial-woodland-21756.herokuapp.com/giphy/v1/gifs/`+e.target.value, {
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
         document.getElementsByClassName('modal')[0].style.display='flex'
         this.setState({urlChange:e.target.value})
    }
    handleImageChange=(e)=>{
      e.preventDefault()
      this.setState({filePath:e.target.value})

      // let reader = new FileReader();
      // let file = e.target.files[0];
  
      // reader.onloadend = () => {
      //   this.setState({
      //     file: file,
         
      //   });
      // }
  
      // reader.readAsDataURL(file)

    }
    handleSubmit=(e)=>{
      e.preventDefault()
console.log(this.state.urlChange)
this.updateDb()
document.getElementsByClassName('modal')[0].style.display='none'
alert("Image Uploaded")
    }

    updateDb=async()=>{
      await fetch(`${'https://cors-anywhere.herokuapp.com/'}https://glacial-woodland-21756.herokuapp.com/giphy/v1/gifs/`+this.state.urlChange, {
        method: 'PUT',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body:JSON.stringify({gifUrl:this.state.filePath})


        }  )
        this.getApi()
    
  }
  //https://coursework.vschool.io/deploying-with-surge/
  closeModal=(e)=>{
    e.preventDefault()
    document.getElementsByClassName('modal')[0].style.display='none';
  }

    render(){

        return(
          <div className="Container">
           <div className="GridContainer">

{this.state.htmlArray}
           </div> 
           <div className="modal">
           <form onSubmit={this._handleSubmit}>
             <h1>Please select file to update image</h1>
                     <input id="url" type="text" onChange={this.handleImageChange} />
                     <button className="modalbtn" type="submit" onClick={this.handleSubmit}>Upload Image</button>
                     <button className="closebtn" type="submit" onClick={this.closeModal}>X</button>
                   </form>
                   </div>
                   </div>
        )
    }
}