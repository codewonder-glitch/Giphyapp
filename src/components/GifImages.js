import React, { Component } from 'react';
import axios from 'axios';
import Carousel from 'react-bootstrap/Carousel'
import './styles/Gif.scss'

export default class GifImages extends Component {
    constructor(props) {
        super(props);
        this.state={
src:'',
htmlArray:[]
        }
    }

    componentDidMount() {
        
          this.callApi();
        
        
    }

    async callApi() {
        console.log(process.env.REACT_APP_API_KEY)
        axios.get(`${'https://cors-anywhere.herokuapp.com/'}https://api.giphy.com/v1/gifs/search?api_key=8tuRAlgbK4rykSIbwcmzljWJT1s35yt4&q="cheese"`,{
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
       
      <img src={resObj.images.downsized.url} />
            
      
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

      Save=()=>{
        fetch('/niecey_api/v1/employees/6', {
          method: 'POST',
         //  method:'PUT',
         headers: {
           'Accept': 'application/json',
           'Content-Type': 'application/json'
         },
         body: JSON.stringify({
          "firstName": "visa",
          "lastName": "selvam",
          "email": "ruvayagil@gmail.com"
          
          })
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



