import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(() => ({
    header: {
        display: "flex",
    },
    content: {
        height: 103,
        alignItems: "center",
        maxWidth: 1200,
        position: 'absolute',
        top:0,
        width:'100%',
    },
    logo: {
        color: "#BADC58",
        fontFamily: 'Montserrat, sans-serif',
        fontWeight: 600,
        fontSize: 32,
        textDecoration: "none",
    },
    buttons: {
        display: "flex",
        justifyContent: "flex-end",
        gap: 24,
        paddingRight: 32,
    }
}));