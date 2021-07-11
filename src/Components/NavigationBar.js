import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { Link } from 'react-router-dom'



const StyledTabs = withStyles({
    indicator: {
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: 'transparent',
        '& > span': {
            maxWidth: 40,
            backgroundColor: 'transparent',
        },
    },
})((props) => <Tabs {...props} TabIndicatorProps={{ children: <span /> }} />);

const StyledTab = withStyles((theme) => ({
    root: {
        textTransform: 'none',
        color: '#000',
        fontWeight: '600',
        fontSize: theme.typography.pxToRem(15),
        marginRight: theme.spacing(1),
        '&:focus': {
            opacity: 1,
        },
    },
}))((props) => <Tab disableRipple {...props} />);

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        width: '100vw',

    },
    menu: {
        background: 'background-image: linear-gradient(to right, #868f96 0%, #596164 100%);',
    },
}));

const bottonStyles = makeStyles({
    root: {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        borderRadius: 3,
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        color: 'white',
        margin: 5,
        marginLeft: '80px',
        zIndex: "modal",
        
    },

});

export default function CustomizedTabs() {
    const classes = useStyles();
    const buttonclass = bottonStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className={classes.root}>
            <div className={classes.menu}>
                <StyledTabs value={value} variant="scrollable" scrollButtons="auto" onChange={handleChange} aria-label="styled tabs example">
                    <StyledTab component={Link} to="/" label="Home" />
                    <StyledTab component={Link} to="/about" label="Know Me" />
                    <StyledTab component={Link} to="/Projects" label="Projects" />
                    <StyledTab component={Link} to="/about" label="Blog" />
                    <StyledTab component={Link} to="/about" label="Training" />
                    <StyledTab component={Link} to="/about" label="Free Designs" />
                    <StyledTab component={Link} to="/bloghome" label="Contact" />
                    <StyledTab component={Link} to="/login" label="Login"  className={buttonclass.root} />
                </StyledTabs>
            </div>
        </div>
    );
}
