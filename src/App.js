import React,{Component} from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageSearchUrl from './components/ImageSearchUrl/ImageSearchUrl';
import Rank from './components/Rank/Rank';
import Signin from './components/Signin/Signin';
import Particles from 'react-particles-js';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import Register from './components/Register/Register';



const particleOptions={
  particles: {
    number : {
      value: 100,
      density :{
        enable : true,
        value_area : 400
      }
    }
  }
};

const initialState={
  input:'',
  imageUrl : '',
  box : {},
  route : 'signin',
  isSignedIn : false,
  user : {
    id : '',
    name : '',
    email : '',
    entries : 0,
    join : new Date()
  }
}

class App extends Component{
  constructor(){
    super();
    this.state=initialState
  }
  

  loadUser= (user) => {
    this.setState({user:{
      id : user.id,
      name : user.name,
      email : user.email,
      entries : user.entries,
      join : user.join
      }
    })
  }

  calculateFaceLocation = (data) => {
    // for(var i=0;i<data.length;i++){
    //   console.log(data[i].region_info.bounding_box);
    // }
    data=data[0].region_info.bounding_box;
    var image=document.getElementById('image');
    var width=Number(image.width);
    var height=Number(image.height);
    this.displayFaceBox({
      top : height * data.top_row,
      right : width - (width * data.right_col),
      bottom : height - (height * data.bottom_row),
      left : width * data.left_col
    });
  }

  displayFaceBox = (box) => {
    this.setState({box: box});
  }

  onInputChange = (event) => {
    this.setState({input : event.target.value});
  } 

  onRouteChange = (route) => {
    if(route === 'signin'){
      this.setState(initialState);
    } else if(route === 'home'){
      this.setState({isSignedIn : true});
    }
    this.setState({route : route});
  }

  onSubmitClick = () => {
    this.setState({imageUrl : this.state.input});
    var proxyUrl = 'https://cors-anywhere.herokuapp.com/'
      fetch(proxyUrl+'https://face-detect1.herokuapp.com/apicall', {
            method : 'POST',
            headers : {'content-type' : 'application/json'},
            body : JSON.stringify({
                input : this.state.input,
            })
        })
      .then(response => response.json())
      .then((response) => {
        if(response.outputs){
          response = response.outputs[0].data.regions;
          this.calculateFaceLocation(response);
          
          fetch(proxyUrl+'https://face-detect1.herokuapp.com/image', {
            method : 'PUT',
            headers : {'content-type' : 'application/json'},
            body : JSON.stringify({
                name : this.state.user.name,
                id : this.state.user.id
            })
          })
          .then(output=>output.json())
          .then(count => {
            this.setState(Object.assign(this.state.user, {
              entries : count
            }));
          })
          .catch(console.log);
        }
      })
      .catch(err=>console.log(err));
  }

  render(){
    const {imageUrl, box, route, isSignedIn} = this.state;
    return (
      <div className="App">
        <Particles className="particles" params={particleOptions}></Particles>
        <Navigation isSignedIn={isSignedIn} onRouteChange={this.onRouteChange} />
        <Logo />
        {
          (route==='signin')
          ? <Signin loadUser={this.loadUser} onRouteChange={this.onRouteChange} />
          : route==='register'
            ? <Register loadUser={this.loadUser} onRouteChange={this.onRouteChange} />
            :<div>
              <Rank name={this.state.user.name} entries={this.state.user.entries}/>
              <ImageSearchUrl onInputChange={this.onInputChange} onSubmitClick={this.onSubmitClick}/>
              <FaceRecognition box={box} imageUrl={imageUrl}/>
              <script type="text/javascript" src="https://sdk.clarifai.com/js/clarifai-latest.js"></script>
            </div>  
        }
      </div>
    );
  }
}

export default App;


// face model a403429f2ddf4b49b307e318f00e528b
// celebrity e466caa0619f444ab97497640cefc4dc