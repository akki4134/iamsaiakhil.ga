import { useEffect, useState } from 'react';

import Slide from '@material-ui/core/Slide';
import Grid from '@material-ui/core/Grid';

import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';

import jsonData from '../data.json'

// import Card from '@material-ui/core/Card';
// import CardMedia from '@material-ui/core/CardMedia';
// import CardActionArea from '@material-ui/core/CardActionArea';

import { makeStyles } from '@material-ui/core/styles';
import { FaAngleLeft } from 'react-icons/fa'


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
    main: {
        [theme.breakpoints.up('xs')]: {
            marginLeft: '0px'
        },
        [theme.breakpoints.up('sm')]: {
            marginLeft: '0px'
        },
        [theme.breakpoints.up('md')]: {
            marginLeft: '40px'
        },
        [theme.breakpoints.up('lg')]: {
            marginLeft: '40px'
        },
        [theme.breakpoints.up('xl')]: {
            marginLeft: '40px'
        },

    },
    nav: {

    },


    card: {
        [theme.breakpoints.up('xs')]: {
            display: 'flex',
            alignItems: "center",
            justifyContent: "center",
            fontSize: 15,
            fontWeight: 800,
            height: 150,
            width: 150,
            borderRadius: 150,
            margin: 10,
            backdropFilter: 'blur(2rem)',
            background: 'linear-gradient(to right bottom,rgba(255, 255, 255, 0.7),rgba(255, 255, 255, 0.3))',
            '&:hover': {
                background: 'linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%)',
                borderRadius: 150,
                cursor: 'pointer',
                fontWeight: 800,
                fontSize: 20,
                color: '#fff',
                textTransform: 'uppercase',
            }

        },
        [theme.breakpoints.up('sm')]: {
            display: 'flex',
            alignItems: "center",
            justifyContent: "center",
            fontSize: 15,
            fontWeight: 800,
            height: 180,
            width: 180,
            borderRadius: 150,
            margin: 10,
            backdropFilter: 'blur(2rem)',
            background: 'linear-gradient(to right bottom,rgba(255, 255, 255, 0.7),rgba(255, 255, 255, 0.3))',
            '&:hover': {
                background: 'linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%)',
                borderRadius: 150,
                cursor: 'pointer',
                fontWeight: 800,
                fontSize: 25,
                color: '#fff',
                textTransform: 'uppercase',
            }

        },
        [theme.breakpoints.up('md')]: {
            display: 'flex',
            alignItems: "center",
            justifyContent: "center",
            fontSize: 15,
            fontWeight: 800,
            height: 220,
            width: 220,
            borderRadius: 150,
            margin: 10,
            backdropFilter: 'blur(2rem)',
            background: 'linear-gradient(to right bottom,rgba(255, 255, 255, 0.7),rgba(255, 255, 255, 0.3))',
            '&:hover': {
                background: 'linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%)',
                borderRadius: 150,
                cursor: 'pointer',
                fontWeight: 800,
                fontSize: 25,
                color: '#fff',
                textTransform: 'uppercase',
            }

        },
        [theme.breakpoints.up('lg')]: {

            display: 'flex',
            alignItems: "center",
            justifyContent: "center",
            fontSize: 15,
            fontWeight: 800,
            height: 250,
            width: 250,
            borderRadius: 150,
            margin: 10,
            backdropFilter: 'blur(2rem)',
            background: 'linear-gradient(to right bottom,rgba(255, 255, 255, 0.7),rgba(255, 255, 255, 0.3))',
            '&:hover': {
                background: 'linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%)',
                borderRadius: 150,
                cursor: 'pointer',
                fontWeight: 800,
                fontSize: 35,
                color: '#fff',
                textTransform: 'uppercase',
            }

        },
        [theme.breakpoints.up('xl')]: {

            display: 'flex',
            alignItems: "center",
            justifyContent: "center",
            fontSize: 20,
            fontWeight: 800,
            height: 300,
            width: 300,
            borderRadius: 150,
            margin: 10,
            backdropFilter: 'blur(2rem)',
            background: 'linear-gradient(to right bottom,rgba(255, 255, 255, 0.7),rgba(255, 255, 255, 0.3))',
            '&:hover': {
                background: 'linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%)',
                borderRadius: 150,
                cursor: 'pointer',
                fontWeight: 800,
                fontSize: 40,
                color: '#fff',
                textTransform: 'uppercase',
            }

        },

    },


    smallcard: {
        [theme.breakpoints.up('xs')]: {

            display: 'flex',
            alignItems: "center",
            justifyContent: "center",
            fontSize: 10,
            fontWeight: 800,
            height: 40,
            borderRadius: 150,
            margin: 10,
            backdropFilter: 'blur(2rem)',
            background: 'linear-gradient(to right bottom,rgba(255, 255, 255, 0.7),rgba(255, 255, 255, 0.3))',
            '&:hover': {
                background: 'linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%)',
                cursor: 'pointer',
                fontWeight: 800,
                fontSize: 12,
                color: '#fff',
                textTransform: 'uppercase',
            }

        },
        [theme.breakpoints.up('sm')]: {

            display: 'flex',
            alignItems: "center",
            justifyContent: "center",
            fontSize: 10,
            fontWeight: 800,
            height: 40,
            borderRadius: 150,
            margin: 10,
            backdropFilter: 'blur(2rem)',
            background: 'linear-gradient(to right bottom,rgba(255, 255, 255, 0.7),rgba(255, 255, 255, 0.3))',
            '&:hover': {
                background: 'linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%)',
                cursor: 'pointer',
                fontWeight: 800,
                fontSize: 12,
                color: '#fff',
                textTransform: 'uppercase',
            }

        },
        [theme.breakpoints.up('md')]: {

            display: 'flex',
            alignItems: "center",
            justifyContent: "center",
            fontSize: 15,
            fontWeight: 800,
            height: 40,
            borderRadius: 150,
            margin: 10,
            backdropFilter: 'blur(2rem)',
            background: 'linear-gradient(to right bottom,rgba(255, 255, 255, 0.7),rgba(255, 255, 255, 0.3))',
            '&:hover': {
                background: 'linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%)',
                cursor: 'pointer',
                fontWeight: 800,
                fontSize: 20,
                color: '#fff',
                textTransform: 'uppercase',
            }

        },
        [theme.breakpoints.up('lg')]: {

            display: 'flex',
            alignItems: "center",
            justifyContent: "center",
            fontSize: 15,
            fontWeight: 800,
            height: 40,
            width: 250,
            borderRadius: 150,
            margin: 10,
            backdropFilter: 'blur(2rem)',
            background: 'linear-gradient(to right bottom,rgba(255, 255, 255, 0.7),rgba(255, 255, 255, 0.3))',
            '&:hover': {
                background: 'linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%)',
                cursor: 'pointer',
                fontWeight: 800,
                fontSize: 20,
                color: '#fff',
                textTransform: 'uppercase',
            }

        },
        [theme.breakpoints.up('xl')]: {

            display: 'flex',
            alignItems: "center",
            justifyContent: "center",
            fontSize: 15,
            fontWeight: 800,
            height: 40,
            width: 250,
            borderRadius: 150,
            margin: 10,
            backdropFilter: 'blur(2rem)',
            background: 'linear-gradient(to right bottom,rgba(255, 255, 255, 0.7),rgba(255, 255, 255, 0.3))',
            '&:hover': {
                background: 'linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%)',
                cursor: 'pointer',
                fontWeight: 800,
                fontSize: 20,
                color: '#fff',
                textTransform: 'uppercase',
            }

        },

    },
    imgcard: {
        borderRadius: 30,
        '&:hover': {
            cursor: 'pointer',
        }
    },

    services: {
        display: 'flex',
        alignItems: "flex-start",
        justifyContent: "flex-start",
        position: "absolute",
        zIndex: "modal",
        top: '9%',
        left: '0%',

        // [theme.breakpoints.up('xs')]: {
        //     display: 'flex',
        //     alignItems: "flex-start",
        //     justifyContent: "flex-start",
        //     position: "absolute",
        //     zIndex: "modal",
        //     height: '100vh',
        //     width: '100vw',
        //     background: 'linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%)'

        // },
        // [theme.breakpoints.up('sm')]: {
        //     display: 'flex',
        //     alignItems: "flex-start",
        //     justifyContent: "flex-start",
        //     position: "absolute",
        //     zIndex: "modal",
        //     height: '100vh',
        //     width: '100vw',
        //     background: 'linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%)'

        // },
        // [theme.breakpoints.up('md')]: {
        //     display: 'flex',
        //     alignItems: "flex-start",
        //     justifyContent: "flex-start",
        //     position: "absolute",
        //     zIndex: "modal",
        //     height: '100vh',
        //     width: '100vw',
        //     background: 'linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%)'

        // },
        // [theme.breakpoints.up('lg')]: {
        //     display: 'flex',
        //     alignItems: "flex-start",
        //     justifyContent: "flex-start",
        //     position: "absolute",
        //     zIndex: "modal",
        //     height: '100vh',
        //     width: '100vw',
        //     background: 'linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%)'
        // },
        // [theme.breakpoints.up('xl')]: {
        //     display: 'flex',
        //     alignItems: "flex-start",
        //     justifyContent: "flex-start",
        //     position: "absolute",
        //     zIndex: "modal",
        //     height: '100vh',
        //     width: '100vw',
        //     background: 'linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%)'
        // },
    },
    backbutton: {
        [theme.breakpoints.up('xs')]: {
            fontSize: 50,
            '&:hover': {
                color: '#fff',
                cursor: 'pointer',
            }

        },
        [theme.breakpoints.up('sm')]: {
            fontSize: 50,
            '&:hover': {
                color: '#fff',
                cursor: 'pointer',
            }

        },
        [theme.breakpoints.up('md')]: {
            fontSize: 50,
            '&:hover': {
                color: '#fff',
                cursor: 'pointer',
            }

        },
        [theme.breakpoints.up('lg')]: {
            fontSize: 50,
            '&:hover': {
                color: '#fff',
                cursor: 'pointer',
                // '&:after': {
                //     content: '"go Back"',
                //     display: 'block',
                //     height: 30,
                //     marginTop: -30,

                // }
            },

        },

    },
    n1: {

        fontSize: 150,
        fontWeight: 800,
        color: 'rgba(230, 230, 230, 0.5)'
    },
    h2: {
        fontSize: 40,
        fontWeight: 800,
        textTransform: 'uppercase',
        color: '#fff'
    },
    h3: {
        fontSize: 20,
        fontWeight: 800,
        textTransform: 'uppercase',
        color: '#fff'
    },

}));


const Projects = () => {

    const [mainState, setmainState] = useState(true)
    const [profState, setprofState] = useState(false)
    const [persState, setpersState] = useState(false)
    const [tempState, settempState] = useState(false)
    const [compState, setcompState] = useState(false)

    var [selectedProjectState, setselectedProjectState] = useState()

    const [snumber, setsnumber] = useState()
    const [position, setposition] = useState()
    const [projectName, setprojectName] = useState()
    const [projectImages, setprojectImages] = useState()
    const [projectSize, setprojectSize] = useState()
    const [projectDetails, setprojectDetails] = useState()
    const [projectDescripition, setprojectDescripition] = useState()

 
        // useEffect((selectedProjectState) => {
            
        //     setsnumber(jsonData[0].sno)
           
            
            
        // }, [])

       

  

    const classes = useStyles()

    const selectedProject = (data) => {
        setsnumber(data.sno)
        setposition(data.position)
        setprojectDetails(data.details)
        setprojectImages(data.imageUrl)
        setprojectSize(data.projectsize)
        setprojectName(data.projectname)
        setprojectDescripition(data.description)
    }
    const Backbutton = () => {


        setprofState(false)
        setpersState(false)
        settempState(false)
        setcompState(false)
        setTimeout(() => {
            setmainState(true)
        }, 1200);

    }

    function Slidestate(val) {

        switch (val) {
            case "professinal":
                setmainState(false)
                setpersState(false)
                settempState(false)
                setcompState(false)

                setTimeout(
                    function () {
                        setprofState(true)
                        setselectedProjectState(val)
                    }, 1000);
                break;

            case "personal":
                setmainState(false)
                setprofState(false)
                settempState(false)
                setcompState(false)

                setTimeout(
                    function () {
                        setpersState(true)
                        setselectedProjectState(val)
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
                        setselectedProjectState(val)
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
                        setselectedProjectState(val)
                    }, 1000);
                break;
            default:
                alert("error")
        }
    }

    return (
        <div className={classes.root}>

            <Grid className={classes.main} container>

                <Grid item lg={3} md={3} sm={3} xs={6}>
                    <Slide className={classes.card} direction="down" timeout={100} in={mainState}>
                        <div onClick={() => Slidestate('professinal')} >
                            Professinal
                        </div>
                    </Slide>

                </Grid>
                <Grid item lg={3} md={3} sm={3} xs={6}>
                    <Slide className={classes.card} direction="down" timeout={500} in={mainState}>
                        <div onClick={() => Slidestate('personal')} >
                            Personal
                        </div>
                    </Slide>

                </Grid>
                <Grid item lg={3} md={3} sm={3} xs={6}>
                    <Slide className={classes.card} direction="down" timeout={800} in={mainState}>
                        <div onClick={() => Slidestate('temp')} >
                            Templates
                        </div>
                    </Slide>
                </Grid>
                <Grid item lg={3} md={3} sm={3} xs={6}>
                    <Slide className={classes.card} direction="down" timeout={1000} in={mainState}>
                        <div onClick={() => Slidestate('comp')} >
                            Components
                        </div>
                    </Slide>
                </Grid>


                <Slide direction="right" timeout={1000} in={profState}>
                    <Grid container className={classes.services} >

                        <Grid container direction="row" >
                            <Grid item lg={2} xs={2}>
                                <FaAngleLeft onClick={() => Backbutton()} className={classes.backbutton} />
                            </Grid>
                            <Grid item lg={10} md={10} sm={10} xs={10}>
                                <div className={classes.h2}>
                                    Projects
                                </div>
                            </Grid>
                        </Grid>

                        <Grid container direction="row" >
                            {jsonData.professinal.map(content => {
                                return (
                                    <Grid className={classes.smallcard} item >
                                        <div styles={{ display: 'flex' }} onClick={() => selectedProject(content)} >
                                            {content.projectname}
                                        </div>
                                    </Grid>
                                )
                            })}
                        </Grid>

                        <Slide direction="right" timeout={2000} in={true}>
                            <Grid container >

                                <Grid className={classes.n1} item lg={2} md={2} sm={2} xs={2}>
                                    {snumber}
                                </Grid>

                                <Grid item lg={5} md={6} sm={6} xs={6}>
                                    <div className={classes.h2} >{projectName}</div>
                                    <div className={classes.h3} >Team Size - {projectSize} members</div>
                                    <div className={classes.h3} >{projectDescripition}</div>
                                </Grid>
                                <Grid item lg={5} md={4} sm={4} xs={4}>
                                    <Splide
                                        options={{
                                            type: 'loop',
                                            gap: '2rem',
                                            focus: 'center',
                                            perPage: 3,
                                            perMove: 1,
                                            autoplay: true,
                                            arrows: 'slider',
                                            fixedWidth: '9rem',
                                            height: '10rem',
                                            cover: true,
                                        }}
                                    >


                                        < SplideSlide className={classes.imgcard} >
                                            <img src={projectImages} alt={projectDescripition} />
                                        </SplideSlide>

                                    </Splide>


                                </Grid>

                                <Grid className={classes.h3} item>
                                    {position}
                                </Grid>
                                <Grid className={classes.h3} item>
                                    {projectDetails}
                                </Grid>
                            </Grid>

                        </Slide>


                    </Grid>
                </Slide>

                <Slide direction="right" timeout={1000} in={persState}>

                    <Grid className={classes.services} >

                        <FaAngleLeft onClick={() => Backbutton()} className={classes.backbutton} />
                        custom Templates

                    </Grid>
                </Slide>

                <Slide direction="right" timeout={1000} in={tempState}>
                    <Grid className={classes.services} >

                        <FaAngleLeft onClick={() => Backbutton()} className={classes.backbutton} />
                        custom Templates

                    </Grid>
                </Slide>

                <Slide direction="right" timeout={1000} in={compState}>

                    <Grid className={classes.services} >

                        <FaAngleLeft onClick={() => Backbutton()} className={classes.backbutton} />
                        custom Templates

                    </Grid>
                </Slide>


            </Grid>
        </div >
    )
}

export default Projects
