import React from 'react';
import './home.scss';

class Home extends React.PureComponent {
  render() {
    const { history } = this.props;
    return (
      <div className="p-2 md:p-6">
        <h1>Home Page</h1>
        <p className="home-p">
          <button onClick={() => history.push('/sub1')}>
            Go to Sub page 1
          </button>
        </p>
      </div>
    );
  }
}

export default Home;
