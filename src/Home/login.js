import { useState } from 'react';

import Base_URL from '../Helpers/statics';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
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

    const [usernamestate, setusername] = useState()
    const [passwordstate, setpassword] = useState()

    let history = useHistory();

    const signin = async () => {

        // console.log(username, password)
        // let result = await fetch("http://localhost:8080/api/user/login", {
        //     method: 'POST',
        //     header: {
        //         "Content-Type": "application/json",
        //         "Accept": "application/json"
        //     },
        //     body: JSON.stringify(username, password)
        // })
        // result = await result.json()


        const result = axios.post(`$(Base_URL) $(/login)`, {
            username: usernamestate,
            password: passwordstate,
        })
            .then(function (response) {
                console.log(response)
                history.push('/bloghome')
            })
            .catch(function (error) {
                console.log(error)
            });

        // localStorage.setItem("user-info", JSON.stringify(result))
         
    }


    const classes = useStyles()

    return (
        <div className={classes.root}>
            <div className="wrapper fadeInDown">
                <div id="formContent">
                    {/* <div className="fadeIn first">
                        <img src="https://cdn1.vectorstock.com/i/1000x1000/48/55/logo-letter-a-glitch-distortion-diagonal-vector-22854855.jpg" id="icon" height="50px" width="10px" alt="User Icon" />
                    </div> */}
                    <form>
                        <input type="text" onChange={(e) => setusername(e.target.value)} id="login" className="fadeIn second" name="login" placeholder="username" />
                        <input type="password" onChange={(e) => setpassword(e.target.value)} id="password" autoComplete="on" className="fadeIn third" name="password" placeholder="password" />
                        <input type="button" onClick={() => signin()} className="fadeIn fourth" value="Log In" />
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login
