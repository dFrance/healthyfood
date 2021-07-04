import { Button, makeStyles } from '@material-ui/core';
import styled from 'styled-components';

export const Content = styled.div`
    justify-content: center;
    display: flex;
    height: auto;
    padding: 80px 20px 120px;
    background-color: #FAFAFC;
    
`;

export const ButtonSearch = styled(Button)`
    background-color: #BADC58 ;
    color: #FFF;
    font-family: muli, sans-serif;
    font-weight: 700;
    font-style: normal;
    margin-top: 24px;
    padding: 8px 16px;

    &:hover {
        color: #BADC58;
        border: 1px solid #BADC58;
        background-color: #FFF;
    }
`;



export const useStyles = makeStyles((theme) => ({
    container: {
        maxWidth: 1200,
        display: "flex",
        justifyContent: "center",
    },

    shadow: {
        display: "flex",
        boxShadow: "0 2px 12px rgba(0, 0, 0, 0.1)",
        //borderRadius: 0,
        },

    image: {
        width: 253,
        height: 225,

    }

}));

