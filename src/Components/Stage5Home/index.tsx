import { Grid, Box, Typography, TextField, Hidden } from "@material-ui/core";
import { useStyles, ButtonSearch, Content } from "./styles";

export function StageFive() {
    const classes = useStyles();
    return (
        <>
            <Hidden smDown>
                <Content>
                    <Grid container>
                        <Grid item xs={6} style={{ justifyContent: "center", display: "flex" }}>
                            <Box width={450} alignItems="center" justifyContent="center">
                                <Typography variant="h3" align="left">
                                    Join our membership
                                    to get special offer
                                </Typography>
                                <Box pt={3} display="flex" className={classes.search}>
                                    <TextField
                                        fullWidth
                                        variant="outlined"
                                        placeholder="Enter your email address"></TextField>
                                    <ButtonSearch>Join</ButtonSearch>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            {/* <Box display="flex" justifyContent="flex-end">
                        <img className={classes.img} src={img5} alt="" />
                    </Box> */}
                        </Grid>
                    </Grid>
                </Content>
            </Hidden>
            <Hidden mdUp>

                <Content smallBg>
                    <Grid container>
                        <Grid item xs={6} style={{ justifyContent: "center", display: "flex" }}>
                            <Box pl={2} pt={"20%"} alignItems="center" justifyContent="center">
                                <Typography variant="h4" align="left">
                                    Join our membership
                                    to get special offer
                                </Typography>
                                <Box pt={3} display="flex" className={classes.search}>
                                    <TextField
                                        fullWidth
                                        variant="outlined"
                                        placeholder="Enter your email address"></TextField>
                                    <ButtonSearch>Join</ButtonSearch>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            {/* <Box display="flex" justifyContent="flex-end">
                        <img className={classes.img} src={img5} alt="" />
                    </Box> */}
                        </Grid>
                    </Grid>
                </Content>
            </Hidden>
        </>
    )
}