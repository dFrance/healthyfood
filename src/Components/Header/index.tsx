import { Grid, Box } from "@material-ui/core"
import { useStyles } from './styles'
//import {ButtonNavNoFill, ButtonNavInvertFill,} from '../Atoms/Buttons/styles'
import {ButtonNav} from '../Atoms/Buttons/styles'
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router-dom'

type HeaderProps = {
    home?: boolean;
}

export function Header(props: HeaderProps) {

    const classes = useStyles();
    const history = useHistory();
    function toRegister() {
        history.push("/register")
    }
    return (
        <Box display="flex" justifyContent="center">
            <Grid container className={classes.content}>
                <Grid item xs={12} sm={4} md={4}>
                    <Link to="/" className={classes.logo}>
                        Healthy Food
                    </Link>
                </Grid>
                {props.home ? 
                <Grid item xs={12} sm={8} md={8} className={classes.buttons}>
                    <ButtonNav>HEALTHY RECIPES</ButtonNav>
                    <ButtonNav>BLOG</ButtonNav>
                    <ButtonNav>JOIN</ButtonNav>
                    <ButtonNav fill="#FFF" hover="#FFF" primary onClick={toRegister}>REGISTER</ButtonNav>
                </Grid>
                :
                <Grid item xs={12} sm={8} md={8} className={classes.buttons}>
                    <ButtonNav fill="#BADC58" hover="#BADC58">HEALTHY RECIPES</ButtonNav>
                    <ButtonNav fill="#BADC58" hover="#BADC58">BLOG</ButtonNav>
                    <ButtonNav fill="#BADC58" hover="#BADC58">JOIN</ButtonNav>
                    <ButtonNav fill="#BADC58" hover="#BADC58" onClick={toRegister}>REGISTER</ButtonNav>
                </Grid>
                }
            </Grid>
        </Box>
    )
}