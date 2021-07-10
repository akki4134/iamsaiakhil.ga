import { makeStyles } from '@material-ui/core/styles';

import './Styles/login.css'

const useStyles = makeStyles((theme) => ({
    test: {
        [theme.breakpoints.down('xs')]: {

        },
        [theme.breakpoints.down('sm')]: {

        },
        [theme.breakpoints.down('md')]: {

        },
        [theme.breakpoints.down('lg')]: {

        },
        [theme.breakpoints.down('xl')]: {

        },
    },
    root: {
        flexGrow: 1,
        height: '100vh',
        display: 'flex',
        alignItems: "center",
        justify: "center",
        background: 'linear-gradient(to right top, #65dfc9, #6cdbeb)',

    },

}))

const Login = () => {

    const classes = useStyles()

    return (
        <div className={classes.root}>
            <div className="wrapper fadeInDown">
                <div id="formContent">
                    {/* <div className="fadeIn first">
                        <img src="https://cdn1.vectorstock.com/i/1000x1000/48/55/logo-letter-a-glitch-distortion-diagonal-vector-22854855.jpg" id="icon" height="50px" width="10px" alt="User Icon" />
                    </div> */}
                    <form>
                        <input type="text" id="login" className="fadeIn second" name="login" placeholder="username" />
                        <input type="text" id="password" className="fadeIn third" name="login" placeholder="password" />
                        <input type="submit" className="fadeIn fourth" value="Log In" />
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login
