import { Button, makeStyles } from '@material-ui/core';
import styled from 'styled-components';


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
    img: {
        height: 727,
    }
}));

