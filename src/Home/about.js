import { useState } from 'react';

import Box from '@material-ui/core/Box';
import Slide from '@material-ui/core/Slide';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { createMuiTheme, makeStyles, responsiveFontSizes, ThemeProvider } from '@material-ui/core/styles';

import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import EqualizerIcon from '@material-ui/icons/Equalizer';
import Icon from '@material-ui/core/Icon';

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

theme.typography.h1 = {
    [theme.breakpoints.up('xs')]: {
        fontSize: '2rem',
    },
    [theme.breakpoints.up('sm')]: {
        fontSize: '3rem',
    },
    [theme.breakpoints.up('md')]: {
        fontSize: '3.5rem',
    },
    [theme.breakpoints.up('lg')]: {
        fontSize: '4em',
        fontWeight: 800,
        fontFamily: ['Teko', 'sans-serif'],
    },
};
theme.typography.h2 = {
    [theme.breakpoints.up('xs')]: {
        fontSize: '3rem',
    },
    [theme.breakpoints.up('sm')]: {
        fontSize: '4rem',
    },
    [theme.breakpoints.up('md')]: {
        fontSize: '5rem',
    },
    [theme.breakpoints.up('lg')]: {
        fontSize: '5rem',
    },
    [theme.breakpoints.up('xl')]: {
        fontSize: '5rem',
    },
};
theme.typography.h3 = {
    [theme.breakpoints.up('xs')]: {
        fontSize: '0.8rem',
    },
    [theme.breakpoints.up('sm')]: {
        fontSize: '1rem',
    },
    [theme.breakpoints.up('md')]: {
        fontSize: '1.5rem',
    },
    [theme.breakpoints.up('lg')]: {
        fontSize: '2rem',
    },
    [theme.breakpoints.up('xl')]: {
        fontSize: '2rem',
    },
};
theme.typography.h4 = {
    [theme.breakpoints.up('xs')]: {
        fontSize: '0.6rem',
    },
    [theme.breakpoints.up('sm')]: {
        fontSize: '0.8rem',
    },
    [theme.breakpoints.up('md')]: {
        fontSize: '1.2rem',
    },
    [theme.breakpoints.up('lg')]: {
        fontSize: '1.5rem',
    },
    [theme.breakpoints.up('xl')]: {
        fontSize: '1.5rem',
    },
};
theme.typography.h5 = {
    [theme.breakpoints.up('xs')]: {
        fontSize: '0.5rem',
    },
    [theme.breakpoints.up('sm')]: {
        fontSize: '0.7rem',
    },
    [theme.breakpoints.up('md')]: {
        fontSize: '0.9rem',
    },
    [theme.breakpoints.up('lg')]: {
        fontSize: '1rem',

    },
    [theme.breakpoints.up('xl')]: {
        fontSize: '1.5rem',
    },
};

const useStyles = makeStyles((theme) => ({
    background: {
        background: 'linear-gradient(45deg, #93a5cf 0%, #e4efe9 100%)',
        maxHeight: '90vh',


    },
    box: {
        [theme.breakpoints.down('xs')]: {
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            m: 1,
            p: 1
        },
        [theme.breakpoints.down('sm')]: {
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            m: 1,
            p: 1

        },
        [theme.breakpoints.up('md')]: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            m: 1,
            p: 1

        },
        [theme.breakpoints.up('lg')]: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            m: 1,
            p: 1
        },
    },
    slidebox1: {
        [theme.breakpoints.down('xs')]: {
            maxHeight: "400px",
            maxWidth: "350px",
            alignItems: "center",
            background: 'linear-gradient(to top, #fad0c4 0%, #ffd1ff 100%)',
            justifyContent: "center",
            m: 1,
            p: 1

        },
        [theme.breakpoints.down('sm')]: {
            maxHeight: "400px",
            maxWidth: "350px",
            alignItems: "center",
            justifyContent: "center",
            m: 1,
            p: 1
        },
        [theme.breakpoints.up('md')]: {

        },
        [theme.breakpoints.up('lg')]: {
            position: "absolute",
            top: "35%",
            left: "2%",
            zIndex: "modal",
            maxHeight: "400px",
            maxWidth: "450px",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 10,
            m: 1,
            p: 1
        },
    },
    slidebox2: {
        [theme.breakpoints.down('xs')]: {
            maxHeight: "400px",
            maxWidth: "350px",
            margin: 5,
            alignItems: "center",
            justifyContent: "center",
            m: 1,
            p: 1


        },
        [theme.breakpoints.down('sm')]: {
            maxHeight: "400px",
            maxWidth: "350px",
            margin: 5,
            alignItems: "center",
            justifyContent: "center",
            m: 1,
            p: 1

        },
        [theme.breakpoints.up('md')]: {

        },
        [theme.breakpoints.up('lg')]: {
            position: "absolute",
            top: "35%",
            right: "4%",
            zIndex: "modal",
            maxHeight: "400px",
            maxWidth: "450px",
            alignItems: "center",
            justifyContent: "center",
            m: 1,
            p: 1
        },
    },
    bgslidebox1: {
        [theme.breakpoints.down('xs')]: {
            position: "relative",
            zIndex: "modal",
            fontSize: 50,
            fontWeight: 800,
            color: '#ffb',
            alignItems: "center",
            justifyContent: "center",

        },
        [theme.breakpoints.down('sm')]: {

        },
        [theme.breakpoints.up('md')]: {

        },
        [theme.breakpoints.up('lg')]: {
            position: "absolute",
            bottom: "5%",
            left: "2%",
            zIndex: "modal",
            fontSize: 100,
            fontWeight: 800,
            color: '#ffb',
            alignItems: "center",
            justifyContent: "center",

        },
    },

    bgslidebox2: {
        [theme.breakpoints.down('xs')]: {
            position: "relative",
            zIndex: "modal",
            fontSize: 50,
            fontWeight: 800,
            color: '#ffb',
            alignItems: "center",
            justifyContent: "center",

        },
        [theme.breakpoints.down('sm')]: {

        },
        [theme.breakpoints.up('md')]: {

        },
        [theme.breakpoints.up('lg')]: {
            position: "absolute",
            bottom: "5%",
            right: "5%",
            zIndex: "modal",
            fontSize: 100,
            fontWeight: 800,
            color: '#ffb',
            alignItems: "center",
            justifyContent: "center",

        },
    },
    bgicon: {
        [theme.breakpoints.down('xs')]: {
        },
        [theme.breakpoints.down('sm')]: {

        },
        [theme.breakpoints.up('md')]: {
            position: "absolute",
            bottom: "0%",
            left: "50%",
            zIndex: "modal",
            color: '#ffb',
            alignItems: "center",
            justifyContent: "center",

        },
        [theme.breakpoints.up('lg')]: {
            position: "absolute",
            bottom: "10%",
            maxHeight: 80,
            left: "46%",
            zIndex: "modal",
            color: '#ffb',
            alignItems: "center",
            justifyContent: "center",
        },
    },
    bottom: {
        [theme.breakpoints.down('xs')]: {
            background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
            borderRadius: 3,
            boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
            color: 'white',
            margin: 2,
        },
        [theme.breakpoints.down('sm')]: {

        },
        [theme.breakpoints.up('md')]: {

        },
        [theme.breakpoints.up('lg')]: {
            background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
            borderRadius: 3,
            boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
            color: 'white',
            height: 40,
            width: 100,
            margin: 10,
        },

    },
}));


export default function About() {
    const [aboutState, setaboutState] = useState(true)
    const [skillsState, setskillsState] = useState(false)
    const [expState, setexpState] = useState(false)
    const [projectState, setprojectState] = useState(false)

    const classes = useStyles()

    function Slidestate(val) {

        switch (val) {
            case "about":
                setexpState(false)
                setskillsState(false)
                setprojectState(false)
                setTimeout(
                    function () {
                        setaboutState(true)
                    }, 1000);
                break;

            case "skills":
                setaboutState(false)
                setexpState(false)
                setprojectState(false)

                setTimeout(
                    function () {
                        setskillsState(true)
                    }, 1000);
                break;

            case "experiance":

                setaboutState(false)
                setskillsState(false)
                setprojectState(false)

                setTimeout(
                    function () {
                        setexpState(true)
                    }, 1000);
                break

            case "projects":

                setaboutState(false)
                setexpState(false)
                setskillsState(false)

                setTimeout(
                    function () {
                        setprojectState(true)
                    }, 1000);
                break;

            default:
                alert("error")
        }

    }

    return (
        <div>
            <ThemeProvider theme={theme}>
                <Box className={classes.background}>
                    <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" m={1} p={1}>
                        <Typography variant="h1">Know About Me</Typography>
                        <Typography variant="h3">Full Stack Developer</Typography>
                    </Box>
                    <Box className={classes.box} >
                        <Box  >
                            <Button className={classes.bottom} value='about' onClick={() => Slidestate('about')}  > About</Button>
                        </Box>
                        <Box>
                            <Button value='skills' onClick={() => Slidestate('skills')}  > Skills </Button>
                        </Box>
                        {/* <Box>
                            <Button className={classes.bottom} value='experiance' onClick={() => Slidestate('experiance')}  > Experiance </Button>
                        </Box>
                        <Box>
                            <Button className={classes.bottom} value='projects' onClick={() => Slidestate('projects')}  > Projects </Button>
                        </Box> */}

                    </Box>



                    <Box>
                        <Slide direction="right" timeout={1000} in={aboutState}>
                            <Box className={classes.bgslidebox1} >
                                About Me
                            </Box>
                        </Slide>
                        <Slide direction="up" timeout={800} in={aboutState}>
                            <Box className={classes.bgicon} >
                                <AccountCircleOutlinedIcon fontSize="large" style={{ fontSize: 100, }} />
                            </Box>
                        </Slide>


                        <Slide direction="down" timeout={1000} in={aboutState} mountOnEnter unmountOnExit>
                            <Box className={classes.slidebox1} >
                                <Typography style={{ margin: '5px' }} variant="h3"> M.E.R.N Stack Developer</Typography>
                                <Typography style={{ margin: '15px' }} variant="h5">
                                    I'm Sai Akhil, a 26-year-old Indian  Full Stack developer.
                                    I'm a weird guy who likes making weird things with web technologies.
                                </Typography>
                                <Typography style={{ margin: '15px' }} variant="h5">
                                    I like to resolve design problems, create smart user interface and imagine useful interaction, developing rich web experiences & web applications.
                                    When not working or futzing around with code.
                                </Typography>

                            </Box>
                        </Slide>
                        <Slide direction="left" timeout={1000} in={aboutState}>
                            <Box className={classes.bgslidebox2} >
                                Contact
                            </Box>
                        </Slide>
                        <Slide direction="up" timeout={1000} in={aboutState} mountOnEnter unmountOnExit>
                            <Box className={classes.slidebox2} >
                                <Typography style={{ margin: '5px' }} variant="h3"> Personal Details </Typography>
                                <Typography style={{ margin: '15px' }} variant="h5">Freelancing : Available </Typography>
                                <Typography style={{ margin: '15px' }} variant="h5">Phone       : 8801007460 </Typography>
                                <Typography style={{ margin: '15px' }} variant="h5">Website     : www.iamsaiakhil.ga </Typography>
                                <Typography style={{ margin: '15px' }} variant="h5">Email       : yellagandulasaiakhil@gmail.com </Typography>
                                <Typography style={{ margin: '15px' }} variant="h5">Location    : Hyderabad, Telangana, India. 500091 </Typography>
                            </Box>
                        </Slide>
                    </Box>

{/* 
                    <Box>
                        <Slide direction="right" timeout={1000} in={skillsState}>
                            <Box className={classes.bgslidebox1} >
                                Techno-
                            </Box>
                        </Slide>
                        <Slide direction="up" timeout={800} in={skillsState}>
                            <Box className={classes.bgicon} >
                                <EqualizerIcon fontSize="large" style={{ fontSize: 100, }} />
                            </Box>
                        </Slide>


                        <Slide direction="down" timeout={1000} in={skillsState} mountOnEnter unmountOnExit>
                            <Box className={classes.slidebox1} >
                                <Typography style={{ margin: '5px' }} variant="h3"> Development </Typography>
                                <Typography style={{ margin: '15px' }} variant="h5">
                                    I'm Sai Akhil, a 26-year-old Indian  Full Stack developer.
                                    I'm a weird guy who likes making weird things with web technologies.
                                </Typography>
                                <Typography style={{ margin: '15px' }} variant="h5">
                                    I like to resolve design problems, create smart user interface and imagine useful interaction, developing rich web experiences & web applications.
                                    When not working or futzing around with code.
                                </Typography>
                                <Icon className="fa fa-css3" fontSize="large" style={{ fontSize: 100, }} /> 

                            </Box>
                        </Slide>
                        <Slide direction="left" timeout={1000} in={skillsState}>
                            <Box className={classes.bgslidebox2} >
                                Skills-
                            </Box>
                        </Slide>
                        <Slide direction="up" timeout={1000} in={skillsState} mountOnEnter unmountOnExit>
                            <Box className={classes.slidebox2} >
                                <Typography style={{ margin: '5px' }} variant="h3"> Deployment </Typography>
                                <Typography style={{ margin: '15px' }} variant="h5">Freelancing : Available </Typography>
                                <Typography style={{ margin: '15px' }} variant="h5">Phone       : 8801007460 </Typography>
                                <Typography style={{ margin: '15px' }} variant="h5">Website     : www.iamsaiakhil.ga </Typography>
                                <Typography style={{ margin: '15px' }} variant="h5">Email       : yellagandulasaiakhil@gmail.com </Typography>
                                <Typography style={{ margin: '15px' }} variant="h5">Location    : Hyderabad, Telangana, India. 500091 </Typography>
                            </Box>
                        </Slide>
                    </Box> */}



{/* 
                    <Box>
                        <Slide direction="right" timeout={1000} in={expState}>
                            <Box className={classes.bgslidebox1} >
                                Clorder
                            </Box>
                        </Slide>
                        <Slide direction="up" timeout={800} in={expState}>
                            <Box className={classes.bgicon} >
                                <EqualizerIcon fontSize="large" style={{ fontSize: 100, }} />
                            </Box>
                        </Slide>


                        <Slide direction="down" timeout={1000} in={expState} mountOnEnter unmountOnExit>
                            <Box className={classes.slidebox1} >
                                <Typography style={{ margin: '5px' }} variant="h3"> Development </Typography>
                                <Typography style={{ margin: '15px' }} variant="h5">
                                    I'm Sai Akhil, a 26-year-old Indian  Full Stack developer.
                                    I'm a weird guy who likes making weird things with web technologies.
                                </Typography>
                                <Typography style={{ margin: '15px' }} variant="h5">
                                    I like to resolve design problems, create smart user interface and imagine useful interaction, developing rich web experiences & web applications.
                                    When not working or futzing around with code.
                                </Typography>
                            </Box>
                        </Slide>
                        <Slide direction="left" timeout={1000} in={expState}>
                            <Box className={classes.bgslidebox2} >
                                HYQ
                            </Box>
                        </Slide>
                        <Slide direction="up" timeout={1000} in={expState} mountOnEnter unmountOnExit>
                            <Box className={classes.slidebox2} >
                                <Typography style={{ margin: '5px' }} variant="h3"> Deployment </Typography>
                                <Typography style={{ margin: '15px' }} variant="h5">Freelancing : Available </Typography>
                                <Typography style={{ margin: '15px' }} variant="h5">Phone       : 8801007460 </Typography>
                                <Typography style={{ margin: '15px' }} variant="h5">Website     : www.iamsaiakhil.ga </Typography>
                                <Typography style={{ margin: '15px' }} variant="h5">Email       : yellagandulasaiakhil@gmail.com </Typography>
                                <Typography style={{ margin: '15px' }} variant="h5">Location    : Hyderabad, Telangana, India. 500091 </Typography>
                            </Box>
                        </Slide>
                    </Box> */}


{/* 


                    <Box>
                        <Slide direction="right" timeout={1000} in={projectState}>
                            <Box className={classes.bgslidebox1} >
                                Official
                            </Box>
                        </Slide>
                        <Slide direction="up" timeout={800} in={projectState}>
                            <Box className={classes.bgicon} >
                                <EqualizerIcon fontSize="large" style={{ fontSize: 100, }} />
                            </Box>
                        </Slide>


                        <Slide direction="down" timeout={1000} in={projectState} mountOnEnter unmountOnExit>
                            <Box className={classes.slidebox1} >
                                <Typography style={{ margin: '5px' }} variant="h3"> Development </Typography>
                                <Typography style={{ margin: '15px' }} variant="h5">
                                    I'm Sai Akhil, a 26-year-old Indian  Full Stack developer.
                                    I'm a weird guy who likes making weird things with web technologies.
                                </Typography>
                                <Typography style={{ margin: '15px' }} variant="h5">
                                    I like to resolve design problems, create smart user interface and imagine useful interaction, developing rich web experiences & web applications.
                                    When not working or futzing around with code.
                                </Typography>

                            </Box>
                        </Slide>
                        <Slide direction="left" timeout={1000} in={projectState}>
                            <Box className={classes.bgslidebox2} >
                                Personal
                            </Box>
                        </Slide>
                        <Slide direction="up" timeout={1000} in={projectState} mountOnEnter unmountOnExit>
                            <Box className={classes.slidebox2} >
                                <Typography style={{ margin: '5px' }} variant="h3"> Deployment </Typography>
                                <Typography style={{ margin: '15px' }} variant="h5">Freelancing : Available </Typography>
                                <Typography style={{ margin: '15px' }} variant="h5">Phone       : 8801007460 </Typography>
                                <Typography style={{ margin: '15px' }} variant="h5">Website     : www.iamsaiakhil.ga </Typography>
                                <Typography style={{ margin: '15px' }} variant="h5">Email       : yellagandulasaiakhil@gmail.com </Typography>
                                <Typography style={{ margin: '15px' }} variant="h5">Location    : Hyderabad, Telangana, India. 500091 </Typography>
                            </Box>
                        </Slide>
                    </Box> */}



                </Box>
            </ThemeProvider>
        </div >
    );
}

