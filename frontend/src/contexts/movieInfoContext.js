import React, { Component, createContext } from 'react';
import axios from 'axios';

const Context = createContext(); 
const { Provider, Consumer: MovieInfoConsumer } = Context; 

class MovieInfoProvider extends Component {

  componentDidMount(){
    this.actions.getMovies('강');
  }

  state = {
    movies:[]
  }

  actions = {
    setValue: (value) => {
      this.setState({value});
    },
    getMovies: (query) => {
      axios.get('/api/movie/?query='+query)
      .then(
        response => {
          const movies = response.data.items;
          // console.log(movies)
          this.setState({
            movies: movies
          })
        }
      )
    }
  }


  render() {
    const { state, actions } = this;
    const value = { state, actions };
    return (
      <Provider value={value}>
        {this.props.children}
      </Provider>
    )
  }
}

function useMovieInfo(WrappedComponent) {
  return function UseMovieInfo(props) {
    return (
      <MovieInfoConsumer>
        {
          ({ state, actions }) => {
            return (
              <WrappedComponent
                state={state}
                actions={actions}
              />
            )
          }
        }
      </MovieInfoConsumer>
    )
  }
}
// 내보내줍니다.
export {
  MovieInfoProvider,
  MovieInfoConsumer,
  useMovieInfo
};
