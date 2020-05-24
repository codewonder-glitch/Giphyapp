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

    componentDidMount() {
    }

    render(){

        return(
           <div>

           </div> 
        )
    }
}