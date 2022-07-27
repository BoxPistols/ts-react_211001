import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import Counter from './components/Counter'
import Vote from './components/Vote'
import App from './App'
import './css/App.css'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <nav>
        <ul>
          <li>
            <Link to='/counter'>Counter</Link>
          </li>
          <li>
            <Link to='/app'>Chara</Link>
          </li>
          <li>
            <Link to='/vote'>Vote</Link>
          </li>
        </ul>
      </nav>

      <p className='tx-c'>Hello TS React</p>

      <Route exact path='/counter'>
        <Counter />
      </Route>

      <Route exact path='/app'>
        <App />
      </Route>

      <Route exact path='/vote'>
        <Vote />
      </Route>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
)
