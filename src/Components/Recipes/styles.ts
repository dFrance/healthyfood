import { makeStyles } from "@material-ui/core";
import styled from 'styled-components'

export const useStyles = makeStyles(()=> ({

    boxer: {
    display: "flex",
    boxShadow: "0 2px 12px rgba(0, 0, 0, 0.1)",
    //borderRadius: 0,
    },
    image: {
        width: 180,
        height: 180,
    }
})) 