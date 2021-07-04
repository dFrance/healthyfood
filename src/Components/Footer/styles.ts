import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
    [theme.breakpoints.down('sm')]:{
    footer: {
        paddingBottom: 70,
        height: 120,
        display: 'flex',
        alignItems: 'center',
    }},
    [theme.breakpoints.up('md')]:{
    footer: {
        height: 103,
        display: 'flex',
        alignItems: 'center',
    },
    buttonFooter: {
        textDecoration: 'none',
    }}
}));

