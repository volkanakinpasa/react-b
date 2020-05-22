import React from 'react';
import './sub1.css';

class Sub1 extends React.PureComponent {
  render() {
    const { history } = this.props;

    return (
      <div className="p-2 md:p-6">
        <h1>Sub Page 1</h1>
        <p className="sub1-p">
          <button onClick={() => history.push('/')}>
            Go back to Home page
          </button>
        </p>
      </div>
    );
  }
}

export default Sub1;
