import React, { useState, FormEvent } from 'react';
import ptLocale from "date-fns/locale/pt";
import { TextField, Typography, Grid, Box, Hidden } from '@material-ui/core'
import { ButtonNav } from '../Atoms/Buttons/styles'
import { Content } from './styles'
import { useEffect } from 'react';
import NumberFormat from 'react-number-format';
import InputMask from 'react-input-mask';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    KeyboardDatePicker,
} from '@material-ui/pickers';
import { cpf } from 'cpf-cnpj-validator';


type ConsultaCepProps = {
    state: string;
    city: string;
    neighborhood: string;
    street: string;
}

export function Form() {
    //const [submit, setSubmit] = useState();
    const [name, setName] = useState('');
    const [birthday, setBirthday] = useState(new Date());
    const [inputCpf, setInputCpf] = useState('');
    const [cep, setCep] = useState('');
    const [number, setNumber] = useState('');
    const [complement, setComplement] = useState('');
    const users = localStorage.getItem("Usuário");
    const [messageErrorCep, setMessageErrorCep] = useState(false);
    const [messageErrorCpf, setMessageErrorCpf] = useState(false);
    const [messageErrorBirth, setMessageErrorBirth] = useState(false);
    const [useCep, setUseCep] = useState<ConsultaCepProps>();

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

    function handleBirthdayChange(date: any) {
        if (date == "Invalid Date") {
            console.log("Opa")
            setMessageErrorBirth(true)
        } else {
            setMessageErrorBirth(false)
        }
        setBirthday(date)
    }

    // Funções do CEP

    useEffect(() => {
        validateCep()
        console.log(cep)
    }, [cep]);


    async function validateCep() {
        const cepNumbers = cep.replace(/\D/g, "");
        if (cepNumbers.length === 0) {
            setMessageErrorCep(false)
            setUseCep(undefined)
        } else {
            if (cepNumbers.length === 8) {
                const consultaCep = await (await fetch(`https://brasilapi.com.br/api/cep/v2/${cep}`)).json()
                if (consultaCep.errors) {
                    setMessageErrorCep(true)
                    setUseCep(undefined)
                } else {
                    console.log(consultaCep)
                    setMessageErrorCep(false)
                    setUseCep(consultaCep)
                }
            }
        }
    }

    async function handleSubmit(event: FormEvent) {
        event.preventDefault();
        const cepNumbers = cep.replace(/\D/g, "");
        const cpfNumbers = inputCpf.replace(/\D/g, "");
        const validatorCPF = cpf.isValid(cpfNumbers);

        if (cepNumbers.length < 8 || useCep == undefined) {
            setMessageErrorCep(true)
            return

        }

        if (validatorCPF === true) {
            setMessageErrorCpf(false)
            console.log(validatorCPF)
            
            const user = {
                "Nome": name,
                "Data de nascimento": birthday,
                "CPF": inputCpf,
                "CEP": cep,
                "Endereço": {
                    "Estado": useCep?.state,
                    "Cidade": useCep?.city,
                    "Bairro": useCep?.neighborhood,
                    "Rua": useCep?.street,
                    "Numero": number,
                    "Complemento": complement,
                }
            }
            
            localStorage.setItem('Usuário', JSON.stringify(user));
            console.log(users)
        } else {
            setMessageErrorCpf(true)
        }


    }
    useEffect(() => {
        console.log(users)
    }, [])
    return (
        <Content>
            <form onSubmit={handleSubmit} style={{ maxWidth: 600 }}>
                <Hidden smDown>
                <Box pb={5}>
                    <Typography variant="h4">Create account</Typography>
                </Box>
                </Hidden>
                <Hidden mdUp>
                <Box pb={5} pt={7}>
                    <Typography variant="h4">Create account</Typography>
                </Box>
                </Hidden>
                <Grid container spacing={4}>
                    <Grid item xs={12} md={6}>
                        <TextField value={name} onChange={event => setName(event.target.value)} required fullWidth variant="outlined" placeholder="Digite seu nome" />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        {/* <TextField value={birthday} type="date" onChange={event => setBirthday(event.target.value)} required fullWidth variant="outlined" placeholder="Digite sua data de nascimento" /> */}
                        <MuiPickersUtilsProvider utils={DateFnsUtils} locale={ptLocale}>
                            <KeyboardDatePicker
                                style={{ width: "100%" }}
                                autoOk
                                disableToolbar
                                inputVariant="outlined"
                                format="dd/MM/yyyy"
                                label="Data de nascimento"
                                error={messageErrorBirth}
                                helperText={messageErrorBirth && "Formato inválido"}
                                value={birthday}
                                onChange={handleBirthdayChange}
                            />
                        </MuiPickersUtilsProvider>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <InputMask
                            value={inputCpf}
                            mask="999.999.999-99"
                            onChange={event => setInputCpf(event.target.value)}
                        >
                            {() => (
                                <TextField
                                    required fullWidth variant="outlined"
                                    placeholder="Digite seu CPF"
                                    error={messageErrorCpf}
                                    helperText={messageErrorCpf && "CPF inválido"}
                                />
                            )}
                        </InputMask>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <InputMask
                            mask="99999-999"
                            value={cep}
                            onChange={event => setCep(event.target.value)}
                        >
                            {
                                () => (
                                    <TextField
                                        required
                                        fullWidth
                                        variant="outlined"
                                        placeholder="Digite seu CEP"
                                        error={messageErrorCep}
                                        helperText={messageErrorCep && "CEP inválido"}
                                    />
                                )
                            }
                        </InputMask>
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
                        <ButtonNav type="submit" fill="#BADC58" hover="#BADC58" full>Create account</ButtonNav>
                    </Box>
                </Grid>
            </form>
        </Content>
    )
}