import { useState } from "react"
import client from "../../../service/client"
import { FormContainer, Input, Submit } from "./styles"

const NativeLogin = (props) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const [error, setError] = useState('')

    const onSubmit = () => {
        client.post("/auth/login/native", {
            email,
            password
        })
        .then(res => props.ping())
        .catch(err => {
            setError(err.response.data.message)
        })
    };
    
    return (
        <FormContainer>
            <Input type="email" name="email" placeholder="Email" value={email} onChange={(event) => setEmail(event.target.value)}/>
            <Input type="password" name="password" placeholder="Senha" value={password} onChange={(event) => setPassword(event.target.value)}/>
            <Submit onClick={() => onSubmit()}>Entrar</Submit>
            { error && <span>{error}</span> }
        </FormContainer>
    )
}

export default NativeLogin