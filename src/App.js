import React from 'react';
import './App.css';
import Particles from 'react-particles-js';
import Header from './Header/Header.js';
import SearchBox from './SearchBox/SearchBox.js';

const particlesOptions = {
  particles: {
    number: {
      value: 100,
      density: {
        enable: true,
        value_area: 800
      }
    }
  }
}

class App extends React.Component{
  render(){
    return(
      <div className= 'tc'>
        <Particles className="particles" 
          params={particlesOptions}
        />
        <Header/>
        <SearchBox/>

      </div>
    )
  }
}
  


  

export default App;
