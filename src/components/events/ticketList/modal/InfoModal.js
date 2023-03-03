import { useState } from 'react';
import {
    Container,
    Modal,
    Close
} from './styles'
import { CgClose } from 'react-icons/cg'

const InfoModal = (props) => {
    const [number, setNumber] = useState('')
    return (
        <Container>
            <Modal>
            <Close><CgClose onClick={() => props.onClose()} /></Close>
            {/* <Title>Quer receber seus ingressos por <span style={{fontWeight: "bold", color: "#5F6F94"}}>Whatsapp</span>?</Title>
            <Description>Insira seu número de telefone abaixo e enviaremos seus ingressos direto no zap!</Description>
            <Input value={number} onChange={(event) => setNumber(event.target.value)} type="number" placeholder="11995093002"/>
            <ButtonGroup>
                <Button>👍</Button>
                <Button>seguir sem zap</Button>
            </ButtonGroup> */}
            </Modal>
        </Container>
    )
}

export default InfoModal;