import React, { Component, createContext } from 'react';
import axios from 'axios';

const Context = createContext(); 
const { Provider, Consumer: MovieInfoConsumer } = Context; 

class MovieInfoProvider extends Component {

  componentDidMount(){
    this.actions.getMovies();
  }

  state = {
    movies:[]
  }

  actions = {
    setValue: (value) => {
      this.setState({value});
    },
    getMovies: (query) => {
      axios.get('/api/movie/')
      .then(
        response => {
          console.log(response.data);
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
                value={state.value}
                setValue={actions.setValue}
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
