
import {
    Switch,
    Route,
} from 'react-router-dom';

import LoginScreen from './Home/login'

import HomeScreen from './Home/root'
import AboutScreen from './Home/about'
import ProjectScreen from './Home/projects'
import ErrorScreen from './Home/error'

import BlogHomeScreen from './Home/Blog/BlogHome'

const Routes = () => {
    return (
        <Switch>
            <Route path='/' exact component={HomeScreen} />
            <Route path='/login' component={LoginScreen} />
            <Route path='/about' component={AboutScreen} />
            <Route path='/projects' component={ProjectScreen} />
            <Route path='/error' component={ErrorScreen} />

            <Route path='/bloghome' component={BlogHomeScreen} />
        </Switch>
    )
}

export default Routes
