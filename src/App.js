import './App.css';

import {
  BrowserRouter as Router,
} from 'react-router-dom';

import Routes from './Routes'
import NavigationBar from './Components/NavigationBar'

const App = () => {
  return (
    <>
      <div className='body'>
        <Router>
          <NavigationBar />
          <Routes />
        </Router>
      </div>

    </>
  )
}

export default App

