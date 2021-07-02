import { Box, Grid, TextField, Typography} from "@material-ui/core"
import { Header } from "../Header"
import { useStyles, Content, ButtonSearch } from "./styles";
import SearchIcon from '@material-ui/icons/Search';

export function StageOne() {
    const classes = useStyles();
    return (
        <Content>
            <Grid container className={classes.container}>
                <Grid item xs={12}>
                    <Header home/>
                </Grid>
                <Box>
                    <Grid item xs={6}>
                        <Box>
                            <Typography variant="h2" align="left">
                                Ready for
                                Trying a new
                                recipe?
                            </Typography>
                            <Box pt={3} display="flex" className={classes.search}>
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
    )
}