import React from 'react';
// import css from '../styles/index.css';
import Appcopy from './App-copy';
import Appcopy2 from './App-copy-2';
import Appcopy3 from './App-copy-3';
class App extends React.PureComponent {
  render() {
    return (
      <div>
        <Appcopy />
        <Appcopy2 />
        <Appcopy3 />
      </div>
    );
  }
}

export default App;
