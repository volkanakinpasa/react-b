import React, { Component } from 'react';
import LoadingBar from 'react-top-loading-bar';

class Loading extends Component {
  state = {
    loadingBarProgress: 0,
  };
  add = (value) => {
    this.setState({
      loadingBarProgress: this.state.loadingBarProgress + value,
    });
  };

  complete = () => {
    this.setState({ loadingBarProgress: 100 });
  };

  onLoaderFinished = () => {
    this.setState({ loadingBarProgress: 0 });
  };

  componentDidMount() {
    this.LoadingBar.continuousStart();
  }

  render() {
    return (
      <div>
        <LoadingBar
          progress={this.state.loadingBarProgress}
          height={3}
          color="red"
          onLoaderFinished={() => this.onLoaderFinished()}
          onRef={(ref) => (this.LoadingBar = ref)}
        />
      </div>
    );
  }
}

export default Loading;
