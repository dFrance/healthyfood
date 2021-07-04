import * as React from 'react';
import { Grid, Box, Hidden } from "@material-ui/core"
import { useStyles } from './styles'
//import {ButtonNavNoFill, ButtonNavInvertFill,} from '../Atoms/Buttons/styles'
import { ButtonNav } from '../Atoms/Buttons/styles'
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router-dom'
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import HomeIcon from '@material-ui/icons/Home';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
import CommentIcon from '@material-ui/icons/Comment';
import PersonIcon from '@material-ui/icons/Person';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import { useState } from "react"


type HeaderProps = {
    home?: boolean;
    numberPage: number;
}

export function Header(props: HeaderProps) {

    const classes = useStyles();
    const history = useHistory();
    const [valueBottomNav, setValueBottomNav] = useState(props.numberPage);
    function toRegister() {
        history.push("/register")
    }
    function toHome() {
        history.push("/")
    }
    return (
        <>
            <Hidden smDown>
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
                                <ButtonNav fill="#BADC58" hover="#BADC58">Join</ButtonNav>
                                <ButtonNav fill="#BADC58" hover="#BADC58" onClick={toRegister}>REGISTER</ButtonNav>
                            </Grid>
                        }
                    </Grid>
                </Box>
            </Hidden>
            <Hidden mdUp>
                <Grid container className={classes.content}>
                    <Grid item xs={12}>
                        {props.home ?
                        <Link to="/" style={{ color: '#FFF' }} className={classes.logo}>
                            Healthy Food
                        </Link>
                        : 
                        <Link to="/" style={{ color: '#BADC58' }} className={classes.logo}>
                            Healthy Food
                        </Link>}
                    </Grid>
                </Grid>
                <BottomNavigation
                    value={valueBottomNav}
                    // onChange={(event, newValue) => {
                    //     setValue(newValue);
                    //     // setValueBottomNav(valueBottomNav);
                    // }}
                    showLabels
                    style={{ width: '100%', position: 'fixed', bottom: 0, zIndex: 999 }}
                //className={classes.root}
                >
                    <BottomNavigationAction label="Home" icon={<HomeIcon />} onClick={toHome}/>
                    <BottomNavigationAction label="Healthy Recipes" icon={<FormatListBulletedIcon />} />
                    <BottomNavigationAction label="Blog" icon={<CommentIcon />} />
                    <BottomNavigationAction label="Join" icon={<PersonIcon />} />
                    <BottomNavigationAction label="Register" icon={<PersonAddIcon />} onClick={toRegister}/>
                </BottomNavigation>
            </Hidden>
        </>
    )
}