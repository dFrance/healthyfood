import { Button, makeStyles } from '@material-ui/core';
import { url } from 'inspector';
import styled from 'styled-components';
import BGStageOne from '../../Assets/images/Illustration.svg'


export const Content = styled.div`
    background: url(${BGStageOne})no-repeat right 0;
    //height: 750px;
    height: 90vh;
    background-size: contain;
    right: 0;
    left: 0;
    flex:1;
    justify-content: center;
    display: flex;
    
`;

export const ButtonSearch = styled(Button)`
    background-color: #BADC58 ;
    color: #FFF;
    font-family: muli, sans-serif;
    font-weight: 700;
    font-style: normal;

    &:hover {
        color: #BADC58;
        border: 1px solid #BADC58;
        background-color: #FFF;
    }
`;


export const useStyles = makeStyles((theme) => ({
    img: {
        position: "absolute",
        left: 0,
        right: 0,
        top: 0,
        objectFit: "contain",
        objectPosition: "right top",
        verticalAlign: "bottom",
        width: "100%",
        height: "90vh",
        zIndex: -999,
    },
container: {
        maxWidth: 1200,
        display: "flex",
    },
    search: {
        gap: 16,

        button: {
            background: "#1D164D",
            color: "#FFF",
        }
    }

}));

