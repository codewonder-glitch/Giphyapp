import React, { Component } from 'react';
import axios from 'axios';

import Bookmarks from'./Bookmarks'
import './styles/Gif.scss'

export default class GifImages extends Component {
    constructor(props) {
        super(props);
        this.state={
src:'',
htmlArray:[],
searchKey:''
        }
    }

    componentDidMount() {
    
     
       if(this.props.searchKey!=undefined)
     this.callApi();   
        
    }

    componentDidUpdate(prevProps) {
      console.log(this.props.searchKey)
      if (this.props.searchKey!=prevProps.searchKey)
       {
         
         console.log(this.props.searchKey)
           this.callApi()
       }
           }
    
    

    async callApi() {
      // this.setState({searchKey:this.props.searchKey})
      var searchKey=this.props.searchKey
      var apikey=process.env.REACT_APP_API_KEY
        console.log(process.env.REACT_APP_API_KEY)
        axios.get(`${'https://cors-anywhere.herokuapp.com/'}https://api.giphy.com/v1/gifs/search?api_key=`+apikey+`&q=`+searchKey,{
        // axios.get(`${'https://cors-anywhere.herokuapp.com/'}https://api.giphy.com/v1/stickers/trending?api_key=8tuRAlgbK4rykSIbwcmzljWJT1s35yt4`, {
           
       
        
        })
        .then((res) => {
          console.log(res.data)
          // this.setState({htmlArray:res.data.data});
            console.log(res.data.data[0].images.downsized.url)
            console.log(this.state.htmlArray)
            // this.setState({img:res.data.data[0].images.downsized.url})
       
      //       let src;
        let htmlArray = res.data.data.map(resObj => 
          <div>
       <button value={resObj.images.downsized.url} onClick={this.saveImage} >"Bookmark"</button>
      <img src={resObj.images.downsized.url} />
      </div>
      
        );
        this.setState({htmlArray:htmlArray})
         
         {/* <Link to="/Reviews" onClick={() => this.props.capture(<Restaurant imgclicked={resObj} location={resObj.location.display_address} />,resObj.alias)} >
            <Restaurant imgclicked={resObj} location={resObj.location.display_address} />
             </Link> */}
        //this.setState({resHTML:elements});
        //this.img_onclick(1);
        //console.log(this.state.data[0].location.display_address);
        })
        .catch((err) => {
        console.log ('error');
        })
        
      }

      

      saveImage=(e)=>{
        console.log(this.props.searchKey)
        var gifObj={ }
         gifObj={
          GifName: this.props.searchKey,
          GifCategory: this.props.searchKey,
          GifUrl: e.target.value

        }
        console.log(gifObj["GifName"])
        fetch('/giphy/v1/gifs', {
          method: 'POST',
         //  method:'PUT',
         headers: {
           'Accept': 'application/json',
           'Content-Type': 'application/json'
         },
         body: JSON.stringify( gifObj )
       });
      }
render(){

  return (
  
    <React.Fragment>
  
  {this.state.htmlArray}
       {/* <div style={{ margin: "100px" , 'display' : 'flex', justifyContent: "center"}}>
       <Carousel className="carousel-container" style={{'height':"500px", 'width' : "700px" , 
                            }} >
    { this.state.htmlArray.map(resObj =>{
      return(
       <Carousel.Item className="carousel-item">
                        <img style={{'height':"500px" , 'width': "570px", 'padding' : '40px', 'marginLeft' : '65px'}} 
                        
                        src={resObj.images.downsized.url}
                        alt="First slide"  
                        />  </Carousel.Item  > 
      
       ) }              
      )
       }
     
      
     </Carousel>
    </div>  */}
    </React.Fragment> 
  )
}

}



