import { Typography, Grid, Button } from "@material-ui/core"
import { useStyles } from './styles';
import {ButtonNav, ButtonFill } from './styles'
export function Header() {

    const classes = useStyles();

    return (
        <header>
        <Grid container className={classes.content}>
            <Grid item xs={12} sm={4} md={4}>
                <span className={classes.logo}>
                    Healthy Food
                </span>
            </Grid>
            <Grid item xs={12} sm={8} md={8} className={classes.buttons}>
                <ButtonNav>HEALTHY RECIPES</ButtonNav>
                <ButtonNav>BLOG</ButtonNav>
                <ButtonNav>JOIN</ButtonNav>
                <ButtonFill>REGISTER</ButtonFill>
            </Grid>
        </Grid>
        </header>
    )
}