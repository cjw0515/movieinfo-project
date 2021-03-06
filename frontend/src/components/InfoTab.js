import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import SwipeableViews from 'react-swipeable-views';
import MovieInfo from './MovieInfo'

const styles = {
  headline: {
    fontSize: 23,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
  slide: {
    padding: 10,
  },
};

export default class InfoTab extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      slideIndex: 0,
    };
  }

  handleChange = (value) => {
    this.setState({
      slideIndex: value,
    });
  };

  render() {
    return (
      <div>
        <Tabs
          onChange={this.handleChange}
          value={this.state.slideIndex}
          tabItemContainerStyle={{background: 'white'}}
        >
          <Tab label="주요정보" value={0} />
          <Tab label="평점" value={1} />
          <Tab label="리뷰" value={2} />
        </Tabs>
        <SwipeableViews
          index={this.state.slideIndex}
          onChangeIndex={this.handleChange}
        >
          <div>
            <MovieInfo/>
          </div>
          <div style={styles.slide}>
            slide n°2
          </div>
          <div style={styles.slide}>
            slide n°3
          </div>
        </SwipeableViews>
      </div>
    );
  }
}
