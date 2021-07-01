import { useState } from 'react';

import Slide from '@material-ui/core/Slide';
import Paper from '@material-ui/core/Paper';

// import Card from '@material-ui/core/Card';
// import CardMedia from '@material-ui/core/CardMedia';
// import CardActionArea from '@material-ui/core/CardActionArea';

import { makeStyles } from '@material-ui/core/styles';
import { FaBackward } from 'react-icons/fa'

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        height: '90vh',
        width: '100vw',
        alignItems: "center",
        justifyContent: "center",
        background: 'linear-gradient(to right top, #65dfc9, #6cdbeb)',
    },

    card: {
        [theme.breakpoints.down('xs')]: {

        },
        [theme.breakpoints.down('sm')]: {

        },
        [theme.breakpoints.up('md')]: {

        },
        [theme.breakpoints.up('lg')]: {
            
            display: 'flex',
            alignItems: "center",
            justifyContent: "center",
            fontSize: 15,
            fontWeight: 800,
            height: 250,
            width: 250,
            borderRadius: 30,
            margin: 10,
            backdropFilter: 'blur(2rem)',
            background: 'linear-gradient(to right bottom,rgba(255, 255, 255, 0.7),rgba(255, 255, 255, 0.3))',
            '&:hover': {
                background: 'linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%)',
                borderRadius: 150,
                cursor: 'pointer',
                fontWeight: 800,
                fontSize: 35,
                color:'#000',
                textTransform: 'uppercase',
            }

        },
    },

    project: {
        [theme.breakpoints.down('xs')]: {

        },
        [theme.breakpoints.down('sm')]: {

        },
        [theme.breakpoints.up('md')]: {

        },
        [theme.breakpoints.up('lg')]: {
            display: 'flex',
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
            zIndex: "modal",
            height: '90vh',
            width: '100vw',
            background: 'linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%)'
        },
    },

}));

const Projects = () => {

    const [mainState, setmainState] = useState(true)

    const [profState, setprofState] = useState(false)
    const [persState, setpersState] = useState(false)
    const [tempState, settempState] = useState(false)
    const [compState, setcompState] = useState(false)

    const classes = useStyles()

    function Slidestate(val) {

        switch (val) {
            case "prof":
                setmainState(false)
                setpersState(false)
                settempState(false)
                setcompState(false)

                setTimeout(
                    function () {
                        setprofState(true)
                    }, 1000);
                break;

            case "pers":
                setmainState(false)
                setprofState(false)
                settempState(false)
                setcompState(false)

                setTimeout(
                    function () {
                        setpersState(true)
                    }, 1000);
                break;

            case "temp":
                setmainState(false)
                setprofState(false)
                setpersState(false)
                setcompState(false)

                setTimeout(
                    function () {
                        settempState(true)
                    }, 1000);
                break;

            case "comp":
                setmainState(false)
                setprofState(false)
                setpersState(false)
                settempState(false)


                setTimeout(
                    function () {
                        setcompState(true)

                    }, 1000);
                break;

            default:
                alert("error")
        }
    }

    return (
        <div className={classes.root}>
            <div style={{ display: 'flex', flexDirection: 'row', }}>
                <Slide className={classes.card} direction="down" timeout={100} in={mainState}>
                    <div onClick={() => Slidestate('prof')} >
                        Professinal
                    </div>
                </Slide>
                <Slide className={classes.card} direction="down" timeout={500} in={mainState}>
                    <div onClick={() => Slidestate('pers')} >
                        Personal
                    </div>
                </Slide>
                <Slide className={classes.card} direction="down" timeout={800} in={mainState}>
                    <div onClick={() => Slidestate('temp')} >
                        Templates
                    </div>
                </Slide>
                <Slide className={classes.card} direction="down" timeout={1000} in={mainState}>
                    <div onClick={() => Slidestate('comp')} >
                        Components
                    </div>
                </Slide>
            </div>

            <Slide direction="right" timeout={1000} in={profState}>

                <Paper className={classes.project} elevation={0}>
                    <FaBackward />
                    Professinal
                </Paper>
            </Slide>


            <Slide direction="right" timeout={1000} in={persState}>

                <Paper className={classes.project} elevation={0}>
                    <FaBackward />
                    Personal
                </Paper>
            </Slide>

            <Slide direction="right" timeout={1000} in={tempState}>

                <Paper className={classes.project} elevation={0}>
                    <FaBackward />
                    custom Templates
                </Paper>
            </Slide>

            <Slide direction="right" timeout={1000} in={compState}>

                <Paper className={classes.project} elevation={0}>
                    <FaBackward />
                    custom Components
                </Paper>
            </Slide>

        </div >
    )
}

export default Projects
