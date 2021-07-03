import React, { useState, FormEvent } from 'react';
import { TextField, Typography, Grid, Box } from '@material-ui/core'
import { ButtonNav } from '../Atoms/Buttons/styles'
import { Content } from './styles'
import { useEffect } from 'react';
import NumberFormat from 'react-number-format';

type ConsultaCepProps = {
    state: string;
    city: string;
    neighborhood: string;
    street: string;
}

export function Form() {
    //const [submit, setSubmit] = useState();
    const [name, setName] = useState('');
    const [birthday, setBirthday] = useState('');
    const [cpf, setCpf] = useState('');
    const [cep, setCep] = useState('');
    const [number, setNumber] = useState('');
    const [complement, setComplement] = useState('');
    const users = localStorage.getItem("Usuário");
    const [messageError, setMessageError] = useState(false);
    const [useCep, setUseCep] = useState<ConsultaCepProps>();
    const [address, setAddress] = useState(false)

    interface NumberFormatCustomProps {
        inputRef: (instance: NumberFormat | null) => void;
        onChange: (event: { target: { name: string; value: string } }) => void;
        name: string;
      }

    function NumberFormatCustom(props: NumberFormatCustomProps) {
        const { inputRef, onChange, ...other } = props;

        return (
            <NumberFormat
              {...other}
              getInputRef={inputRef}
              onValueChange={(values) => {
                onChange({
                  target: {
                    name: props.name,
                    value: values.value,
                  },
                });
              }}
              isNumericString
              format="#####-###"
            />)
    }


    // Funções do CEP

    function handleChangeCep(event: any) {
        setCep(event.target.value)
    }

    useEffect(() => {
        validateCep()
    }, [cep]);


    async function validateCep() {
        if (cep.length == 8) {
            const consultaCep = await (await fetch(`https://brasilapi.com.br/api/cep/v2/${cep}`)).json()
            if (consultaCep.errors) {
                setMessageError(true)
                setAddress(false)
                setUseCep(undefined)
            } else {
                console.log(consultaCep)
                setMessageError(false)
                setAddress(true)
                setUseCep(consultaCep)
            }
        }
    }

    async function handleSubmit(event: FormEvent) {
        event.preventDefault();

        const user = {
            name: name,
            birthday: birthday,
            CPF: cpf,
            CEP: cep,
        }

        localStorage.setItem('Usuário', JSON.stringify(user));

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
                        <TextField value={name} onChange={event => setName(event.target.value)} required fullWidth variant="outlined" placeholder="Digite seu nome" />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <TextField value={birthday} type="date" onChange={event => setBirthday(event.target.value)} required fullWidth variant="outlined" placeholder="Digite sua data de nascimento" />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <TextField value={cpf} type="number" onChange={event => setCpf(event.target.value)} required fullWidth variant="outlined" placeholder="Digite seu CPF" />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <TextField
                            required 
                            fullWidth 
                            value={cep} 
                            variant="outlined" 
                            error={messageError}
                            placeholder="Digite seu CEP" 
                            helperText={messageError && "CEP inválido"}
                            onChange={handleChangeCep} 
                            InputProps={{
                                inputComponent: NumberFormatCustom as any,
                            }}
                            />
                    </Grid>
                    {useCep &&
                        <>
                            <Grid item xs={12} md={6}>
                                <TextField value={useCep?.state}
                                    disabled
                                    //onChange={event => setName(event.target.value)}
                                    required fullWidth variant="outlined" placeholder="Digite seu estado" />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <TextField value={useCep?.city}
                                    disabled
                                    //onChange={event => setName(event.target.value)}
                                    required fullWidth variant="outlined" placeholder="Digite seu bairro" />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <TextField value={useCep?.neighborhood}
                                    disabled
                                    //onChange={event => setName(event.target.value)}
                                    required fullWidth variant="outlined" placeholder="Digite sua rua" />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <TextField value={useCep?.street}
                                    disabled
                                    //onChange={event => setName(event.target.value)}
                                    required fullWidth variant="outlined" placeholder="Digite sua rua" />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <TextField value={number} onChange={event => setNumber(event.target.value)} required fullWidth variant="outlined" placeholder="Digite o número" />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <TextField value={complement} onChange={event => setComplement(event.target.value)} required fullWidth variant="outlined" placeholder="Digite um complemento" />
                            </Grid>
                        </>
                    }
                    <Box flex={1} display="flex" justifyContent="center">
                        <ButtonNav type="submit" fill="#BADC58" hover="#BADC58" full>Se cadastrar</ButtonNav>
                    </Box>
                </Grid>
            </form>
        </Content>
    )
}