import { makeStyles } from "@material-ui/core";
import styled from "styled-components";


export const Content = styled.div`
    flex:1;
    justify-content: center;
    display: flex;
    align-items: center;
    /* height: 900px; */
    padding: 80px 0 20px;
    background-color: #FAFAFC;
    
`;

export const useStyles = makeStyles({
    slider: {
        maxWidth: 1200,
        display: "flex",
        margin: "0 auto",
        padding: '30px 0 120px'
    },
    card: {
        height: 450,
        width: "350px !important",
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    author: {
        marginTop: 32,
        display: 'flex',
        alignItems: 'center',
        gap: 16,
        }
})