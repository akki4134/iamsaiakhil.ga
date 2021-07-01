import React, { useState, useEffect } from 'react';

import { withStyles, makeStyles, createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Slide from '@material-ui/core/Slide';



import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardActionArea from '@material-ui/core/CardActionArea';

import './Styles/slider.css'
import Blocks from './Blocks'
import Footer from '../Components/Footer'

// import NavigationBar from './NavigationBar'
// import BottomPagination from './BottomPagination'

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";



// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"
import "swiper/components/navigation/navigation.min.css"

import SocialMediaIcons from './SocialMedia';

// import Swiper core and required modules
import SwiperCore, {
    Autoplay, Pagination, Mousewheel, Navigation
} from 'swiper/core';



// install Swiper modules
SwiperCore.use([Autoplay, Mousewheel, Navigation, Pagination]);

const theme = createMuiTheme({
});

const CustomFont = withStyles({
    root: {
        background: 'linear-gradient(to right, #0f2027, #203a43, #2c5364)',
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent"
    }
})(Typography);



const useStyles = makeStyles({

    bottom: {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        borderRadius: 3,
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        color: 'white',
        height: 40,
        width: '130px',
        margin: 10,
        marginLeft: 60,
    },
    card: {
        maxWidth: 180,
        objectFit: 'fill',
        '&:hover': {
            maxWidth: 210,
            maxHeight: 140,
            boxShadow: '10px 10px 10px 10px rgba(255, 255, 255, .4)',
            // '&:after': {
            //     content: '"Clorder"',
            //     display: 'block',
            //     height: 100,
            //     marginTop: -100,

            // }
        },
    },
    video: {
        borderRadius: 30,
        // '&:hover': {
        //     Width: 410,
        //     Height: 440,
        //     '&:after': {
        //         Width: 410,
        //         Height: 440,
        //     }
        //  }
    },
    body: {
        height: '90vh',
        borderBottomRightRadius: '40%',
        background: 'linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%)',

    },
});


const title = "Sai Akhil"
// const subtitle = "Projects"
const jobtitle = "Full Stack Developer"

theme.typography.h1 = {
    [theme.breakpoints.up('xs')]: {
        fontSize: '4rem',
    },
    [theme.breakpoints.up('sm')]: {
        fontSize: '5rem',
    },
    [theme.breakpoints.up('md')]: {
        fontSize: '6rem',
    },
    [theme.breakpoints.up('lg')]: {
        fontSize: '7rem',
        fontWeight: 700,
        fontFamily: ['Teko', 'sans-serif'],
    },
    [theme.breakpoints.up('xl')]: {
        fontSize: '8rem',
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
theme.typography.subtitle1 = {
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
        fontSize: '1.2rem',
        fontWeight: 800,
        fontFamily: ['Teko', 'sans-serif'],
        textTransform: 'uppercase',
        marginTop: -15
    },
    [theme.breakpoints.up('xl')]: {
        fontSize: '3rem',
    },
};
theme.typography.body1 = {
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
        fontSize: '1rem',
        fontWeight: 800,
        fontFamily: ['Teko', 'sans-serif'],
        marginTop: -10
    },
    [theme.breakpoints.up('xl')]: {
        fontSize: '3rem',
    },
};
theme.typography.body2 = {
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
        fontSize: '0.8rem',
        fontWeight: 1000,
        fontFamily: ['Teko', 'sans-serif'],
    },
    [theme.breakpoints.up('xl')]: {
        fontSize: '3rem',
    },
};


export default function Slider() {
    const classes = useStyles();
    const [slidevalue, setslidevalue] = useState(true);

    const fadein = () => {
        setslidevalue(true);
    }
    const fadeout = () => {
        setslidevalue(false);
    }

    useEffect(() => {
        let id
        id = setInterval(() => {
            fadeout()
        }, 5000);
        return () => clearInterval(id);
    }, [slidevalue]);

    useEffect(() => {
        let a
        if (slidevalue === false) {
            a = setInterval(() => {
                fadein()
            }, 1000);
        }
        return () => clearInterval(a);
    }, [slidevalue]);

    return (
        <>
            <Box className={classes.body}>
                <Swiper style={{ '--swiper-navigation-size': '25px', '--swiper-pagination-color': '#000', '--swiper-navigation-color': '#000' }} speed={1300} pagination={{ "type": "progressbar" }} mousewheel={true} navigation={false}
                    autoplay={{
                        "delay": 10000, "disableOnInteraction": false
                    }}>
                    <SwiperSlide>
                        <Box
                            position="absolute"
                            top="30%"
                            left="30%"
                            zIndex="modal"
                        >
                            <Slide direction="right" in={true} timeout={1000} >
                                <Card className={classes.video}>
                                    <iframe
                                        src="https://www.youtube.com/embed/BvDjWFA_9Ds?autoplay=1&mute=1&playlist=BvDjWFA_9Ds&loop=1"

                                        // src="https://www.youtube.com/embed/qAKf-og-siE?autoplay=1&mute=1&playlist=qAKf-og-siE&loop=1"
                                        title="YouTube video player" frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen></iframe>
                                </Card>
                            </Slide>
                        </Box>
                        <Box
                            position="absolute"
                            top="2%"
                            right="10%"
                            zIndex="modal"
                            background='#000'


                        >
                            <Slide direction="right" in={true} timeout={1000} >
                                <Card className={classes.card}>
                                    <CardMedia
                                        component="img"
                                        alt="IOS"
                                        image="https://res.cloudinary.com/cakhil/image/upload/v1624386400/iamsaiakhil.ga/IOS_regado.png"
                                        title="IOS"
                                    />
                                </Card>
                            </Slide>
                        </Box>
                        <Box
                            position="absolute"
                            bottom="20%"
                            left="37%"
                            zIndex="modal"
                            background='#000'
                        >
                            <Slide direction="right" in={true} timeout={1000} >

                                <Card className={classes.card}>
                                    <CardMedia
                                        component="img"
                                        alt="Android"
                                        image="https://res.cloudinary.com/cakhil/image/upload/v1624386401/iamsaiakhil.ga/Android_flqizw.png"
                                        title="Android"
                                    />
                                </Card>
                            </Slide>
                        </Box>
                        <Box
                            position="absolute"
                            top="40%"
                            left="1%"
                            zIndex="modal"
                            background='#000'
                        >
                            <Slide direction="right" in={true} timeout={1000} >
                                <Card className={classes.card}>
                                    <CardMedia
                                        component="img"
                                        alt="OFO"
                                        image="https://res.cloudinary.com/cakhil/image/upload/v1624385634/iamsaiakhil.ga/OFO_w2cbhe.png"
                                        title="OFO"
                                    />
                                </Card>
                            </Slide>
                        </Box>
                        <Box
                            position="absolute"
                            top="40%"
                            right="1%"
                            zIndex="modal"
                            background='#000'
                        >
                            <Slide direction="right" in={true} timeout={1000} >
                                <Card className={classes.card}>
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            alt="OFOR"
                                            image="https://res.cloudinary.com/cakhil/image/upload/v1624386401/iamsaiakhil.ga/OFOR_qqyyj9.png"
                                            title="OFOR"
                                        />
                                    </CardActionArea>
                                </Card>
                            </Slide>
                        </Box>
                        <Box
                            position="absolute"
                            top="2%"
                            left="10%"
                            zIndex="modal"
                            background='#000'
                        >
                            <Slide direction="right" in={true} timeout={1000} >
                                <Card className={classes.card}>
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            alt="Clorder"

                                            image="https://res.cloudinary.com/cakhil/image/upload/v1624253354/iamsaiakhil.ga/clorder-lg_qyndye.png"
                                            title="Clorder"
                                        />
                                    </CardActionArea>
                                </Card>
                            </Slide>
                        </Box>
                        <Box
                            position="absolute"
                            bottom="10%"
                            left="0%"
                            zIndex="modal"
                        >
                            <Box display="flex"
                                alignItems="flex-start">
                                <Slide direction="right" in={slidevalue} timeout={1000} >
                                    <CustomFont variant="subtitle1">Clorder</CustomFont>
                                </Slide>
                            </Box>
                            <Box display="flex"
                                alignItems="flex-start">
                                <Slide direction="right" in={slidevalue} timeout={1000} >
                                    <CustomFont variant="subtitle1">Technologies</CustomFont>
                                </Slide>
                            </Box>
                        </Box>
                        <Box
                            position="absolute"
                            bottom="5%"
                            left="0%"
                            zIndex="modal"
                        >
                            {/* <Box display="flex"
                                alignItems="flex-start">
                                <Slide direction="right" in={true} timeout={1000} >
                                    <CustomFont variant="body1"> Software</CustomFont>
                                </Slide>

                            </Box>
                            <Box display="flex"
                                alignItems="flex-start">
                                <Slide direction="right" in={true} timeout={1000} >
                                    <CustomFont variant="body1"> Developer</CustomFont>
                                </Slide>

                            </Box> */}
                            <Box display="flex"
                                alignItems="flex-start">
                                <Slide direction="right" in={slidevalue} timeout={1000} >
                                    <CustomFont variant="body2">Worked on Online food ordering system</CustomFont>
                                </Slide>
                            </Box>
                            <Box display="flex"
                                alignItems="flex-start">
                                <Slide direction="right" in={slidevalue} timeout={1000} >
                                    <CustomFont variant="body2">Worked on Admin, Customer portal, Adminstration portals</CustomFont>
                                </Slide>
                            </Box>
                        </Box>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Box
                            position="absolute"
                            top="30%"
                            left="30%"
                            zIndex="modal"
                        >
                            <Slide direction="up" in={true} timeout={1000} >
                                <Card className={classes.video}>
                                    <iframe
                                        src="https://www.youtube.com/embed/BvDjWFA_9Ds?autoplay=1&mute=1&playlist=BvDjWFA_9Ds&loop=1"


                                        // src="https://www.youtube.com/embed/B3mOr_xpXWE?autoplay=1&mute=1&playlist=B3mOr_xpXWE&loop=1"                                       
                                        title="YouTube video player" frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen></iframe>
                                </Card>
                            </Slide>
                        </Box>
                        <Box
                            position="absolute"
                            top="2%"
                            right="10%"
                            zIndex="modal"
                            background='#000'


                        >
                            <Slide direction="up" in={true} timeout={1000} >
                                <Card className={classes.card}>
                                    <CardMedia
                                        component="img"
                                        alt="IOS"
                                        image="https://res.cloudinary.com/cakhil/image/upload/v1624386400/iamsaiakhil.ga/IOS_regado.png"
                                        title="IOS"
                                    />
                                </Card>
                            </Slide>
                        </Box>
                        <Box
                            position="absolute"
                            bottom="20%"
                            left="37%"
                            zIndex="modal"
                            background='#000'
                        >
                            <Slide direction="up" in={true} timeout={1000} >

                                <Card className={classes.card}>
                                    <CardMedia
                                        component="img"
                                        alt="Android"
                                        image="https://res.cloudinary.com/cakhil/image/upload/v1624386401/iamsaiakhil.ga/Android_flqizw.png"
                                        title="Android"
                                    />
                                </Card>
                            </Slide>
                        </Box>
                        <Box
                            position="absolute"
                            top="40%"
                            left="1%"
                            zIndex="modal"
                            background='#000'
                        >
                            <Slide direction="right" in={true} timeout={1000} >
                                <Card className={classes.card}>
                                    <CardMedia
                                        component="img"
                                        alt="OFO"
                                        image="https://res.cloudinary.com/cakhil/image/upload/v1624385634/iamsaiakhil.ga/OFO_w2cbhe.png"
                                        title="OFO"
                                    />
                                </Card>
                            </Slide>
                        </Box>
                        <Box
                            position="absolute"
                            top="40%"
                            right="1%"
                            zIndex="modal"
                            background='#000'
                        >
                            <Slide direction="up" in={true} timeout={1000} >
                                <Card className={classes.card}>
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            alt="OFOR"
                                            image="https://res.cloudinary.com/cakhil/image/upload/v1624386401/iamsaiakhil.ga/OFOR_qqyyj9.png"
                                            title="OFOR"
                                        />
                                    </CardActionArea>
                                </Card>
                            </Slide>
                        </Box>
                        <Box
                            position="absolute"
                            top="2%"
                            left="10%"
                            zIndex="modal"
                            background='#000'
                        >
                            <Slide direction="up" in={true} timeout={1000} >
                                <Card className={classes.card}>
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            alt="Clorder"

                                            image="https://res.cloudinary.com/cakhil/image/upload/v1624253354/iamsaiakhil.ga/clorder-lg_qyndye.png"
                                            title="Clorder"
                                        />
                                    </CardActionArea>
                                </Card>
                            </Slide>
                        </Box>
                        <Box
                            position="absolute"
                            bottom="10%"
                            left="0%"
                            zIndex="modal"
                        >
                            <Box display="flex"
                                alignItems="flex-start">
                                <Slide direction="up" in={slidevalue} timeout={1000} >
                                    <CustomFont variant="subtitle1">HYQ India</CustomFont>
                                </Slide>
                            </Box>
                            <Box display="flex"
                                alignItems="flex-start">
                                <Slide direction="up" in={slidevalue} timeout={1000} >
                                    <CustomFont variant="subtitle1">SLM Enterprises</CustomFont>
                                </Slide>
                            </Box>
                        </Box>
                        <Box
                            position="absolute"
                            bottom="5%"
                            left="0%"
                            zIndex="modal"
                        >
                            {/* <Box display="flex"
                                alignItems="flex-start">
                                <Slide direction="up" in={true} timeout={1000} >
                                    <CustomFont variant="body1"> Software</CustomFont>
                                </Slide>

                            </Box>
                            <Box display="flex"
                                alignItems="flex-start">
                                <Slide direction="up" in={true} timeout={1000} >
                                    <CustomFont variant="body1"> Developer</CustomFont>
                                </Slide>

                            </Box> */}
                            <Box display="flex"
                                alignItems="flex-start">
                                <Slide direction="up" in={slidevalue} timeout={1000} >
                                    <CustomFont variant="body2">Worked on Online food ordering system</CustomFont>
                                </Slide>
                            </Box>
                            <Box display="flex"
                                alignItems="flex-start">
                                <Slide direction="up" in={slidevalue} timeout={1000} >
                                    <CustomFont variant="body2">Worked on Admin, Customer portal, Adminstration portals</CustomFont>
                                </Slide>
                            </Box>
                        </Box>
                    </SwiperSlide>
                    <Blocks />
                </Swiper>

            </Box>
            <ThemeProvider theme={theme}>
                <Blocks />
                <Box
                    p={2}
                    position="absolute"
                    top="20%"
                    right="5%"
                    zIndex="modal"
                >
                    <Slide direction="down" in={true} timeout={1000} >
                        <CustomFont variant="h1">{title}</CustomFont>
                    </Slide>

                    <Slide direction="up" in={true} timeout={1000} >
                        <CustomFont style={{ marginLeft: '60px' }} variant="h3">{jobtitle}</CustomFont>
                    </Slide>
                    <Button className={classes.bottom} onClick={() => window.location.assign('https://github.com/akki4134')}> GitHub </Button>
                    <Button className={classes.bottom} component={Link} to="/projects"> Projects </Button>
                </Box>
                {/* <Box
                        p={2}
                        position="absolute"
                        bottom="5%"
                        right="18%"
                        zIndex="modal"
                    >
                        <Slide direction="left" in={true} timeout={1000} >
                             <CustomFont variant="h2">{subtitle}</CustomFont> 
                    </Box> */}


                <Box
                    p={2}
                    position="absolute"
                    bottom="20%"
                    right="10%"
                    zIndex="modal"
                >

                    <SocialMediaIcons />
                </Box>
                <Box
                    p={0.2}
                    position="absolute"
                    bottom="0%"
                    right="0%"
                    zIndex="modal"
                >

                    <Footer />
                </Box>
            </ThemeProvider>
        </>
    )
}


