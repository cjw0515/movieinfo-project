import React, { Component } from 'react';
import InfoTab from './InfoTab'

class Post extends Component{

  render(){    

    const { title, image, pubDate, director } = this.props;
    console.log("props", this.props);
    return(
      <div>
        <section class="posts">
          <article>
            <header>              
              <h2>{title.replace(/(<([^>]+)>)/gi, "")}</h2><span class="date">{pubDate}|{}</span>
            </header>
            <div className="row">
              <div class="4u 12u$(small)">
                <ul class="actions vertical">
                  <a href="#" class="image fit"><img src={ image } alt="" /></a>
                </ul>
                <ul>
                  액선, 모험|한국|등급R
                </ul>
              </div>
              <div class="8u 12u$(small)">
                <InfoTab/>
              </div>
            </div>            
          </article>
        </section>
      </div>
    )
  }
}

export default Post;
