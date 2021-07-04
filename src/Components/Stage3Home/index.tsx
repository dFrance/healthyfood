import { Grid, Typography, Box, Hidden } from "@material-ui/core";
import Img2 from '../../Assets/images/bloco_services.svg'
import { useStyles, ButtonSearch } from './styles'

export function StagesThree() {
    const classes = useStyles();

    return (
        <Grid container>
            <Hidden smDown>
                <Grid item xs={12} md={6} style={{ justifyContent: "flex-start", display: "flex" }}>
                    <img src={Img2} className={classes.img} alt="" />
                </Grid>
                <Grid item xs={12} md={6}>
                    <Box py={15} width={450} textAlign="left">
                        <Typography variant="h3">
                            The best services ready<br />
                            To serve you</Typography>
                        <Typography variant="h5" style={{ paddingTop: 32 }}>
                            Far far away, behind the word mountains,  far from the countries Vokalia and Consonantia, there live the blind texts.
                            <br />
                            <br />
                            Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.
                            <br />
                            <br />
                            A small river named Duden flows by their place and supplies it with the necessary regelialia.
                        </Typography>

                        <ButtonSearch>Know more</ButtonSearch>
                    </Box>
                </Grid>
            </Hidden>
            <Hidden mdUp>
                
            <Box flex={1} px={4}>
                    <Box py={15} textAlign="center">
                        <Typography variant="h3">
                            The best services ready<br />
                            To serve you</Typography>
                        <Typography variant="h5" style={{ paddingTop: 32 }}>
                            Far far away, behind the word mountains,  far from the countries Vokalia and Consonantia, there live the blind texts.
                            <br />
                            <br />
                            Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.
                            <br />
                            <br />
                            A small river named Duden flows by their place and supplies it with the necessary regelialia.
                        </Typography>
                        <ButtonSearch>Know more</ButtonSearch>
                    </Box>
                </Box>
            </Hidden>
        </Grid>
    )
}