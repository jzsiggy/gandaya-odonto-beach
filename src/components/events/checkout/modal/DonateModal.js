import { AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Bars } from 'react-loader-spinner';
import Select from 'react-select'

import {
    Container,
    Kiss,
    Heart,
    Modal
} from './styles'

const DonateModal = (props) => {
    const options = [
        { value: 'aries',       label: 'Áries ♈' },
        { value: 'taurus',      label: 'Touro ♉' },
        { value: 'gemini',      label: 'Gêmeos ♊' },
        { value: 'cancer',      label: 'Câncer ♋' },
        { value: 'leo',         label: 'Leão ♌' },
        { value: 'virgo',       label: 'Virgem ♍' },
        { value: 'libra',       label: 'Libra ♎' },
        { value: 'scorpius',    label: 'Escorpião ♏' },
        { value: 'sagittarius', label: 'Sagitário ♐' },
        { value: 'capricornus', label: 'Capricórnio ♑' },
        { value: 'aquarius',    label: 'Aquário ♒' },
        { value: 'pisces',      label: 'Peixes ♓' },
    ]

    const [state, setState] = useState("initial")
    const [percent, setPercent] = useState(0)

    const getPercentage = () => {
        var precision = 100;
        let res = Math.floor(Math.random() * (30 * precision - 1 * precision) + 1 * precision) / (1*precision);
        setPercent(res)
    }

    useEffect(() => {
        getPercentage();
    }, [])

    const onSubmit = () => {
        setState("loading")
        setTimeout(() => {
            setState("final")
        }, 5000)
    }

    return (
        <Container initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }}>
        <AnimatePresence exitBeforeEnter={true} initial={true}>
            <Modal initial={{ rotate: 20 }} animate={{ rotate: 0 }} transition={{ duration: 0.1 }}>
            {   
            state == "initial" ?
            <>
                <h1>Antes de continuar...</h1>
                <h2>Selecione seu signo</h2>
                <div style={{width: "80%"}}><Select options={options} /></div>
                <h2 onClick={onSubmit} >Enviar</h2>
            </> :
            state == "loading" ?
            <>
                <h2>Mapeando o céu de Natal...</h2>
                <Kiss />
            </> :
            state == "final" &&
            <div style={{width: "80%", display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: "center"}}>
                <h3>De acordo com o horóscopo da Odonto Beach, sua chance de dar match na festa é</h3>
                <Heart>
                    <h1 style={{paddingTop: "15px"}}>{percent.toFixed(2).replace('.', ',')}%</h1>
                </Heart>
                <span>{percent < 20 ? "Quem disse que seria fácil?!" : "Caiu na rede é peixe!"}</span>
            </div>
            }
            </Modal>
        </AnimatePresence>
        </Container>
    )
}

export default DonateModal;