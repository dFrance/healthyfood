import { Grid, Box, Typography } from "@material-ui/core";
import { useStyles } from "./styles";
import {Link} from 'react-router-dom'
export function Footer() {
    const classes = useStyles();
    return (
        <Grid container className={classes.footer}>
                <Grid item xs={12} sm={6}>
                <Typography>© Copyrights 2019 Stack. All Rights Reserved.</Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Box display="flex" justifyContent="center" style={{gap:16}}>
                        <Link to="" className={classes.buttonFooter}><Typography variant="h5">Privacy Policy</Typography></Link>
                        <Link to="" className={classes.buttonFooter}><Typography variant="h5">Terms and Conditions</Typography></Link>
                    </Box>
                </Grid>
        </Grid>
    )
}