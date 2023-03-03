import { useState } from "react";
import client from "../../../service/client"
import { FormContainer, Input, Submit } from "./styles"

const NativeSignup = (props) => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    const onSubmit = () => {
        client.post("/auth/register/native", {
            firstName,
            lastName,
            email,
            password
        })
        .then(res => props.ping())
        .catch(err => {
            setError(err.response.data.message)
        })
    };

    return (
        <>
        <h3>Cadastro</h3>
        <FormContainer>
            <Input type="Nome" name="Nome" placeholder="Nome" value={firstName} onChange={(event) => setFirstName(event.target.value)}/>
            <Input type="Sobrenome" name="Sobrenome" placeholder="Sobrenome" value={lastName} onChange={(event) => setLastName(event.target.value)}/>
            <Input type="email" name="email" placeholder="Email" value={email} onChange={(event) => setEmail(event.target.value)}/>
            <Input type="password" name="password" placeholder="Senha" value={password} onChange={(event) => setPassword(event.target.value)}/>
            <Submit onClick={() => onSubmit()}>Cadastrar</Submit>
            { error && <span>{error}</span> }
        </FormContainer>
        </>
    )
}

export default NativeSignup