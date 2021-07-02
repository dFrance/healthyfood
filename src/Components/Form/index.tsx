import React, { useState, FormEvent } from 'react';
import { TextField, Typography, Grid, Box } from '@material-ui/core'
import { ButtonNav } from '../Atoms/Buttons/styles'
import { Content } from './styles'
import { useEffect } from 'react';

export function Form() {
    //const [submit, setSubmit] = useState();
    const [name,setName] = useState('');
    const [birthday,setBirthday] = useState('');
    const [cpf,setCpf] = useState('');
    const [cep,setCep] = useState('');
    const users = localStorage.getItem("Usuário");
    
    function handleSubmit(event: FormEvent) {
        event.preventDefault();

        const user = {
            "name": name,
            "birthday": birthday,
            "CPF": cpf,
            "CEP": cep,
        }
        localStorage.setItem( 'Usuário' , JSON.stringify(user));

    }
    useEffect(() => {
        console.log(users)
    }, [localStorage])
    return (
        <Content>
            <form onSubmit={handleSubmit} style={{ maxWidth: 600 }}>
                <Box pb={5}>
                    <Typography variant="h4">Para se cadastrar preencha os dados a seguir.</Typography>
                </Box>
                <Grid container spacing={4}>
                    <Grid item xs={12} md={6}>
                        <TextField value={name}  onChange={event => setName(event.target.value)} required fullWidth variant="outlined" placeholder="Digite seu nome" />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <TextField value={birthday} type="date"  onChange={event => setBirthday(event.target.value)} required fullWidth variant="outlined" placeholder="Digite sua data de nascimento" />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <TextField value={cpf}  type="number" onChange={event => setCpf(event.target.value)} required fullWidth variant="outlined" placeholder="Digite seu CPF" />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <TextField value={cep}  type="number" onChange={event => setCep(event.target.value)} required fullWidth variant="outlined" placeholder="Digite seu CEP" />
                    </Grid>
                    <Box flex={1} display="flex" justifyContent="center">
                        <ButtonNav type="submit" fill="#BADC58" hover="#BADC58" full>Se cadastrar</ButtonNav>
                    </Box>
                </Grid>
            </form>
        </Content>
    )
}