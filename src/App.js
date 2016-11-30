import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <h1>
          <span className="nowrap">Ilya Zhelyabuzhsky</span>
        </h1>
        <nav>
          <h2>Contacts</h2>
          <ul>
              <li>
                  <span className="nowrap">
                      phone: +7 961 771-5967
                  </span>
              </li>
              <li>
                  <span className="nowrap">
                      e-mail: <a href="mailto:zhelyabuzhsky@icloud.com">zhelyabuzhsky@icloud.com</a>
                  </span>
              </li>
              <li>
                  <span className="nowrap">
                      facebook: <a href="https://www.facebook.com/zhelyabuzhsky">facebook.com/zhelyabuzhsky</a>
                  </span>
              </li>
              <li>
                  <span className="nowrap">
                      twitter: @<a href="https://twitter.com/zhelyabuzhsky">zhelyabuzhsky</a>
                  </span>
              </li>
              <li>
                  <span className="nowrap">
                      github: @<a href="https://github.com/zhelyabuzhsky">zhelyabuzhsky</a>
                  </span>
              </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default App;
