import { Box, Grid, TextField, Typography } from "@material-ui/core"
import { Header } from "../Header"
import { useStyles, Content, ButtonSearch } from "./styles";
import SearchIcon from '@material-ui/icons/Search';
import { Hidden } from "@material-ui/core";

export function StageOne() {
    const classes = useStyles();
    return (
        <>
            <Hidden smDown> 
                <Content>
                    <Grid container className={classes.container}>
                        <Box pl={2} py={"20%"}>
                            <Grid item xs={6}>
                                <Box>
                                    <Typography variant="h2" align="left">
                                        Ready for
                                        Trying a new
                                        recipe?
                                    </Typography>
                                    <Box pt={3} width={400} display="flex" className={classes.search}>
                                        <TextField
                                            fullWidth
                                            variant="outlined"
                                            placeholder="Search healthy recipes"></TextField>
                                        <ButtonSearch><SearchIcon /></ButtonSearch>
                                    </Box>
                                </Box>
                            </Grid>
                        </Box>
                    </Grid>
                </Content>
            </Hidden>
            <Hidden mdUp>
                <Content smallBg>
                    <Grid container className={classes.container}>
                        <Box pl={2} py={"20%"}>
                            <Grid item xs={6}>
                                <Box>
                                    <Typography variant="h4" align="left">
                                        Ready for
                                        Trying a new
                                        recipe?
                                    </Typography>
                                    <Box pt={3} width={200} display="flex" className={classes.search}>
                                        <TextField
                                            fullWidth
                                            variant="outlined"
                                            placeholder="Search healthy recipes"></TextField>
                                        <ButtonSearch><SearchIcon /></ButtonSearch>
                                    </Box>
                                </Box>
                            </Grid>
                        </Box>
                    </Grid>
                </Content>
            </Hidden>
        </>
    )
}