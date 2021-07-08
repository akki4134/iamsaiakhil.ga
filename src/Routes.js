
import { 
    Switch,
    Route,
  } from 'react-router-dom';
 
import HomeScreen from './Home/root'
import AboutScreen from './Home/about'
import LoginScreen from './Home/login'
import ProjectScreen from './Home/projects'
import ErrorScreen from './Home/error'

const Routes = () => {
    return (
        <Switch>
            <Route path='/' exact component={HomeScreen} />
            <Route path='/login' component={AboutScreen} />
            <Route path='/about' component={AboutScreen} />
            <Route path='/projects' component={ProjectScreen} />
            <Route path='/error' component={ErrorScreen} />
        </Switch>
    )
}

export default Routes
