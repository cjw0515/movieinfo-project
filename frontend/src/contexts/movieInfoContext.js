import React, { Component, createContext } from 'react';

const Context = createContext(); 
const { Provider, Consumer: MovieInfoConsumer } = Context; 

class MovieInfoProvider extends Component {
  state = {
    value: '기본값입니다'
  }

  actions = {
    setValue: (value) => {
      this.setState({value});
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
