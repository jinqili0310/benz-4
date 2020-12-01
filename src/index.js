/*
 * @Author: Jinqi Li
 * @Date: 2020-08-13 04:39:53
 * @LastEditors: Jinqi Li
 * @LastEditTime: 2020-10-04 22:33:40
 * @FilePath: /benz-clone/src/index.js
 */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <App />,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
