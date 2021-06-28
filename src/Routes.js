
import { 
    Switch,
    Route,
  } from 'react-router-dom';

  
import HomeScreen from './Home/root'
import AboutScreen from './Home/about'

const Routes = () => {
    return (
        <Switch>
            <Route path='/' exact component={HomeScreen} />
            <Route path='/about' component={AboutScreen} />
        </Switch>
    )
}

export default Routes
