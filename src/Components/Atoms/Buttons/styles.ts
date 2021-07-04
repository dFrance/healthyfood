import { Button, makeStyles } from "@material-ui/core";
import styled from "styled-components";

type ButtonProps = {
    primary?: boolean,
    fill?: string,
    hover?: string;
    full?: boolean;
}

export const ButtonNav = styled(Button) <ButtonProps>`
    font-family: muli, sans-serif;
    font-weight: 700;
    font-style: normal;
    width: ${props => props.full && '95%'};
    color: ${props => props.primary ? "#BADC58" : "white"};
    background-color: ${props => props.fill};

    &:hover {
        color: ${props => props.hover }; 
    }
    
`;

export const useStyles = makeStyles({

})