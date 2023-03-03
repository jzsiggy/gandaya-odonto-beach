import { AnimatePresence } from 'framer-motion';
import {
    Container,
    Modal,
    Title,
    Description,
    ButtonGroup,
    Button
} from './styles'

const DonateModal = (props) => {
    return (
        <Container initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }}>
        <AnimatePresence exitBeforeEnter={true} initial={true}>
            <Modal initial={{ rotate: 20 }} animate={{ rotate: 0 }} transition={{ duration: 0.1 }}>
            <Title>Que tal doar <span style={{fontWeight: "bold"}}>um</span> real?</Title>
            <Description>
            <span style={{marginBottom: "15px", lineHeight: "1.5em"}}>Deu {(props.price).toFixed(2).replace('.', ',')} reais, mas que tal pagar um real a mais e fazer a diferença com essa doação?</span>
            <span style={{marginBottom: "15px", fontSize: "0.5em"}}>Todo dinheiro arrecadado será revertido para a compra de alimentos para pessoas em situação de rua em parceria com a ONG Manas na Rua.</span>
            <span style={{fontSize: "0.5em"}}>Clique <a href="https://www.atados.com.br/ong/manas-na-rua" target="_blank">aqui</a> para saber mais.</span>
            </Description>
            <ButtonGroup>
                <Button onClick={ () => { props.onAccept(1); props.onClick(); props.onClose() } } >👍</Button>
                <Button onClick={ () => { props.onClick(); props.onClose() } }>❌</Button>
            </ButtonGroup>
            {/* <span style={{fontSize: "0.5em"}}>Ação em parceria com </span> */}
            </Modal>
        </AnimatePresence>
        </Container>
    )
}

export default DonateModal;