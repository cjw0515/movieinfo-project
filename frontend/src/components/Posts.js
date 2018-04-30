import React, { Component } from 'react';
import InfoTab from './InfoTab'
import { useMovieInfo } from '../contexts/movieInfoContext';

class Posts extends Component{

  render(){
    console.log(this.props);
    return(
      <div>
        <section class="posts">
          <article>
            <header>
              <h2><a href="#">신세계</a></h2><span class="date">April 24, 2017</span>
            </header>
            <div className="row">
              <div class="4u 12u$(small)">
                <ul class="actions vertical">
                  <a href="#" class="image fit"><img src="images/램페이지.jpg" alt="" /></a>
                </ul>
                <ul>
                  액선, 모험|한국|등급R                  
                </ul>
              </div>
              <div class="8u 12u$(small)">
                <InfoTab/>
              </div>
            </div>
            <p>Donec eget ex magna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque venenatis dolor imperdiet dolor mattis sagittis magna etiam.</p>
            <ul class="actions">
              <li><a href="#" class="button">Full Story</a></li>
            </ul>
          </article>
        </section>
      </div>
    )
  }
}

export default useMovieInfo(Posts);
