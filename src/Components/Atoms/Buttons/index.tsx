import {ReactNode} from 'react'
import {useStyles, ButtonNav} from './styles'

type ButtonNavProps = {
    color?: string;
    children: ReactNode,
    type?: string,
}

export function ButtonsToNav() {
    const classes = useStyles();
    return (
        <ButtonNav></ButtonNav>
    )
}