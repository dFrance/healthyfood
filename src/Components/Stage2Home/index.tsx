import { CardContent, CardMedia, Box, Card, Grid, Typography } from "@material-ui/core";
import { useStyles, Content, ButtonSearch } from "./styles";
import img1 from '../../Assets/images/comida_1.svg'
import img2 from '../../Assets/images/comida_2.svg'
import img3 from '../../Assets/images/comida_3.svg'
import img4 from '../../Assets/images/comida_4.svg'

export function StageTwo() {
    const classes = useStyles();
    const recipesInfo = [
        {
            img: `${img1}`,
            title: 'Broccoli Salad with Bacon',
        },
        {
            img: `${img2}`,
            title: 'Classic Beef Burgers',
        },
        {
            img: `${img3}`,
            title: 'Classic Potato Salad',
        },
        {
            img: `${img4}`,
            title: 'Cherry Cobbler on the Grill',
        },]

    return (
        <Content>
            <Grid container className={classes.container} spacing={5}>
                <Grid item xs={12}><Typography variant="h3" align="center">Our Best Recipes</Typography></Grid>
                <Grid item xs={12}>
                    <Box display="flex" justifyContent="center">
                        <h4 style={{maxWidth: 510}}>Far far away, behind the word mountains,  far from the countries Vokalia and Consonantia, there live the blind texts.</h4>
                    </Box>
                </Grid>
                {recipesInfo.map((recipesInfo, index) => {
                    return (
                        <Grid item xs={12} md={6}>
                            <Card className={classes.shadow}>
                                <Box display="flex">
                                    <CardMedia component="img" className={classes.image} image={recipesInfo.img}></CardMedia>
                                    <CardContent>
                                        <Box alignItems="flex-start" display="flex" flexDirection="column">
                                            <Typography align="left" variant="h4">{recipesInfo.title}</Typography>
                                            <ButtonSearch>See Recipe</ButtonSearch>
                                        </Box>
                                    </CardContent>
                                </Box>
                            </Card>
                        </Grid>
                        //<Recipes img={recipesInfo.img} title={recipesInfo.title} />
                    )
                })}
            </Grid>
        </Content>
    )
}