import { useState } from "react";
import { Bars } from "react-loader-spinner";
import useStore from "../../../store/store";
import client from "../../service/client";
import { Input, Modal, Overlay, Submit, Label, InputGroup, FormGroup, StyledInput } from "./styles";

const CommunicationPreference = (props) => {
    const user = useStore(state => state.user);

    const [email, setEmail] = useState(user.email)
    const [number, setNumber] = useState("")
    const [Loading, setLoading] = useState(false)

    const onSubmit = () => {
        if (number.length < 11) {
            document.getElementById("whats").focus()
            return
        }

        setLoading(true)

        client.post("/user/communication", {
            email,
            number: `55${number}`
        })
        .then(res => { props.ping() })
    }
    
    return <>
        <Overlay />
        <Modal>
            <h3 style={{textAlign: "center"}}>Antes de continuar, precisamos de algumas informações para contato.</h3>
            <InputGroup>
                <Label>Email</Label>
                <Input name="email" type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </InputGroup>
            <InputGroup>
                <Label>Whatsapp</Label>
                <FormGroup>
                    <span>🇧🇷 +55</span>
                    <StyledInput id="whats" name="whatsapp" type="tel" placeholder="ex. 11999999999" value={number} onChange={(e) => setNumber(e.target.value)} />
                </FormGroup>
            </InputGroup>
            <div style={{marginTop: "20px"}}>
                {!Loading ? 
                <Submit onClick={onSubmit}>Enviar</Submit> : 
                <Bars
                    height="30"
                    width="30"
                    color="grey"
                    ariaLabel="bars-loading"
                    wrapperStyle={{width: "100%", display: 'flex', 'align-items': 'center', 'justify-content': 'center'}}
                    wrapperClass=""
                    visible={true}
                />}
            </div>
        </Modal>
    </>
}

export default CommunicationPreference;