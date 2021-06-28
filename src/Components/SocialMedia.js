import LinkedInIcon from '@material-ui/icons/LinkedIn';
import DialpadIcon from '@material-ui/icons/Dialpad';
import InstagramIcon from '@material-ui/icons/Instagram';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';

import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    box: {
        marginLeft: '30px'
    }

}));

export default function SocialInfo() {
    const classes = useStyles();

    return (
        <>
            <Box display="flex" className={classes.root}>

                <Box className={classes.box}>
                    <Avatar alt="Akhil" src="/static/images/avatar/1.jpg" />
                </Box>
                <Box className={classes.box}>
                    <LinkedInIcon fontSize='large' />
                </Box>
                <Box className={classes.box} >
                    <WhatsAppIcon fontSize='large' />
                </Box>
                <Box className={classes.box}>
                    <InstagramIcon fontSize='large' />
                </Box>
                <Box className={classes.box}>
                    <DialpadIcon fontSize='large' />
                </Box>
            </Box>
        </>

    );
}

