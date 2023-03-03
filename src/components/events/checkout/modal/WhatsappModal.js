import { useState } from 'react';
import {
    Container,
    Modal,
    Title,
    Description,
    ButtonGroup,
    Button,
    Input
} from './styles'

const WhatsappModal = (props) => {
    const [number, setNumber] = useState('')
    return (
        <Container>
            <Modal>
            <Title>Quer receber seus ingressos por <span style={{fontWeight: "bold", color: "#5F6F94"}}>Whatsapp</span>?</Title>
            <Description>Insira seu número de telefone abaixo e enviaremos seus ingressos direto no zap!</Description>
            <Input value={number} onChange={(event) => setNumber(event.target.value)} type="number" placeholder="11995093002"/>
            <ButtonGroup>
                <Button>👍</Button>
                <Button>seguir sem zap</Button>
            </ButtonGroup>
            </Modal>
        </Container>
    )
}

export default WhatsappModal;