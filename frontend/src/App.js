import React, { Component } from 'react';
import Intro from './components/Intro'
import Header from './components/Header'
import Nav from './components/Nav'
import Main from './components/Main'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { MovieInfoProvider } from './contexts/movieInfoContext';

const AppProvider = ({ contexts, children }) => contexts.reduce(
  (prev, context) => React.createElement(context, {
    children: prev
  }), 
  children
);

class App extends Component {
  render() {
    return (
      <div>
        <MuiThemeProvider>
          <AppProvider
           contexts={ [MovieInfoProvider] }
          >
           <Intro/>
            <Header/>
            <Nav/>
            <Main/>
          </AppProvider> 
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
