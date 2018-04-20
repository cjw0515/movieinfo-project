import React, { Component } from 'react';

class Intro extends Component{

  render(){
    return(
      <div id="intro">
        <h1>Movie<br />
        Info</h1>
      <p>welcome to MOVIEINFO</p>
        <ul class="actions">
          <li><a href="#header" class="button icon solo fa-arrow-down scrolly">Continue</a></li>
        </ul>
      </div>
    )
  }
}

export default Intro;
