import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <h1>
          <span className="text-nowrap">Ilya Zhelyabuzhsky</span>
        </h1>
        <h4>Contacts</h4>
        <ul>
          <li>
            <span className="text-nowrap">
              phone: +7 961 771-5967
            </span>
          </li>
          <li>
            <span className="text-nowrap">
              e-mail: <a href="mailto:zhelyabuzhsky@icloud.com">zhelyabuzhsky@icloud.com</a>
            </span>
          </li>
          <li>
            <span className="text-nowrap">
              facebook: <a href="https://www.facebook.com/zhelyabuzhsky">facebook.com/zhelyabuzhsky</a>
            </span>
          </li>
          <li>
            <span className="text-nowrap">
              twitter: @<a href="https://twitter.com/zhelyabuzhsky">zhelyabuzhsky</a>
            </span>
          </li>
          <li>
            <span className="text-nowrap">
              github: @<a href="https://github.com/zhelyabuzhsky">zhelyabuzhsky</a>
            </span>
          </li>
        </ul>
      </div>
    );
  }
}

export default App;
