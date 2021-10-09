import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Test from './components/Test';
import App from './App';
import './css/App.css';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <nav>
        <ul>
          <li>
            <Link to="/test">test</Link>
          </li>
          <li>
            <Link to="/app">app</Link>
          </li>
        </ul>
      </nav>

      <p className="tx-c">Hello TS React</p>

      <Route exact path="/test">
        <Test />
      </Route>

      <Route exact path="/app">
        <App />
      </Route>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);
