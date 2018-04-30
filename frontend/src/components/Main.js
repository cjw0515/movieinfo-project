import React, { Component } from 'react';
import Post from './Post'
import Footer from './Footer'
import { useMovieInfo } from '../contexts/movieInfoContext'

class Main extends Component{

  render(){
    
    const movies = this.props.state.movies;
    console.log("movies:", movies);
    const postList = movies.map( (movie, index) => (
      <Post
        key={ index }
        image={ movie.image }        
        title={ movie.title }
        pubDate={ movie.pubDate }
        director={ movie.director }
      />
    ));

    return(
      <div id="main">
          {/* <article class="post featured">
            <header class="major">
              <span class="date">April 25, 2017</span>
              <h3><a href="#">And this is a<br />
              massive headline</a></h3>
              <p>Aenean ornare velit lacus varius enim ullamcorper proin aliquam<br />
              facilisis ante sed etiam magna interdum congue. Lorem ipsum dolor<br />
              amet nullam sed etiam veroeros.</p>
            </header>
            <a href="#" class="image main"><img src="images/pic01.jpg" alt="" /></a>
            <ul class="actions">
              <li><button class="button big">더보기</button></li>
            </ul>
          </article> */}
        {postList}
        <Footer/>
      </div>
    )
  }
}

export default useMovieInfo(Main);
