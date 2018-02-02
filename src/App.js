import React, { Component } from 'react';

import classNames from 'classnames/bind';
import styles from './App.scss';


class App extends Component {
  render() {
    const cx = classNames.bind(styles);

    return (
      <div className={cx('box', 'blue')}>
        <div className="test">
          global variables test
        </div>
      </div>
    );
  }
}

export default App;