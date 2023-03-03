import axios from 'axios';
import { AnimatePresence } from 'framer-motion';
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

const SelfIdentificationModal = (props) => {
    const [pcd, setpcd] = useState(false);
    const [lgbt, setlgbt] = useState(false);
    const [ppi, setppi] = useState(false);

    const handleChangeLGBT = () => {
        setlgbt(!lgbt)
    }

    const handleChangePCD = () => {
        setpcd(!pcd)
    }

    const handleChangePPI = () => {
        setppi(!ppi)
    }
    
    const submit = () => {
        axios.post("https://eof541a2s14jc2z.m.pipedream.net/diversity", { pcd, lgbt, ppi })
    }

    return (
        <Container initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }}>
        <AnimatePresence exitBeforeEnter={true} initial={true}>
            <Modal initial={{ rotate: 20 }} animate={{ rotate: 0 }} transition={{ duration: 0.1 }}>
            <Title>Questionário anônimo de <span style={{fontWeight: "bold", color: "#5F6F94"}}>diversidade</span></Title>
            <span>Esse questionário é anônimo e opcional.</span>
            <span style={{textAlign: 'center'}}>Assinale as alternativas que se aplicam à sua inscrição:</span>
            <Description>
                <div style={{fontSize: '0.8em'}}>
                <input type="checkbox" id="pcd" name="pcd" onChange={handleChangePCD} checked={pcd} />
                <label htmlfor="pcd">Pessoa com deficiência</label>
                </div>

                <div style={{fontSize: '0.8em'}}>
                <input type="checkbox" id="lgbt" name="lgbt" onChange={handleChangeLGBT} checked={lgbt}/>
                <label htmlfor="lgbt">Pessoa da comunidade LGBTQIA+</label>
                </div>

                <div style={{fontSize: '0.8em'}}>
                <input type="checkbox" id="ppi" name="ppi" onChange={handleChangePPI} checked={ppi}/>
                <label htmlfor="ppi">Pessoa preta, parda ou indígena</label>
                </div>
            </Description>
            <ButtonGroup>
                <Button onClick={ () => { props.onClick(); props.onClose() } }>Não quero participar</Button>
                <Button onClick={ () => { submit(); props.onClick(); props.onClose() } }>Enviar</Button>
            </ButtonGroup>
            </Modal>
        </AnimatePresence>
        </Container>
    )
}

export default SelfIdentificationModal;