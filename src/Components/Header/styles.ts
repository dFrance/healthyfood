import { Button, makeStyles } from '@material-ui/core';
import styled from 'styled-components';

export const ButtonNav = styled(Button)`
    color: #FFF;
    font-family: muli, sans-serif;
    font-weight: 700;
    font-style: normal;
`;

export const ButtonFill = styled(Button)`
    background-color: #FFF;
    color: #BADC58;
    font-family: muli, sans-serif;
    font-weight: 700;
    font-style: normal;

    &:hover {
        color: #FFF;
    }
`;

export const useStyles = makeStyles((theme) => ({
    header: {
        display: "flex",
    },
    content: {
        height: 103,
        alignItems: "center",
        maxWidth: 1200,
    },
    logo: {
        color: "#BADC58",
        fontFamily: 'Montserrat, ' + 'sans-serif',
        fontWeight: 600,
        fontSize: 32,
    },
    buttons: {
        display: "flex",
        justifyContent: "flex-end",
        paddingRight: 32,
    }
}));