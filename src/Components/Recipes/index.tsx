import { Button, Typography, Grid, Box } from '@material-ui/core'
import { ReactNode } from 'react'
import { useStyles } from './styles';


type RecipesProps = {
    img: string;
    title: string;
}


export function Recipes(props: RecipesProps) {
    const classes = useStyles();

    return (
        <Grid item xs={12} sm={6}>
            <Box className={classes.boxer}>
                <img className={classes.image} src={props.img} alt="" />
                <Typography variant="h4">{props.title}</Typography>
                <Button variant="contained">See Recipe</Button>
            </Box>
        </Grid>
    )
}