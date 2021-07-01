import './Styles/root.css'

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';



import Slider from '../Components/Slider'
// import NavigationBar from '../Components/NavigationBar'
// import BottomPagination from '../Components/BottomPagination'


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
}));

export default function Root() {
    const classes = useStyles();

    return (
        <div className='body'>
            <div className={classes.root}>
                <Grid container spacing={0}>
                    <Grid item lg={7} md={7} sm={8} xs={12}>
                        <Slider />
                    </Grid>
                </Grid>
            </div >
        </div>
    );
}
