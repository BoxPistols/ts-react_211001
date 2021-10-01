import React from 'react'
import logo from './logo.svg'
import './App.css'

function App() {
	const items = [ 1, 2, 3 ]

	return (
		<React.Fragment>
			<div className='App'>
				<header className='App-header'>
					<img src={logo} className='App-logo' alt='logo' />
					{/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
					<div>
						<ul>{items.map((item) => <li>No.{item}</li>)}</ul>
					</div>
				</header>
			</div>
		</React.Fragment>
	)
}

export default App
