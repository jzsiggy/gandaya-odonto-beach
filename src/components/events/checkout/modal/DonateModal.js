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

    const getRandomNormal = (mean, stdDev) => {
        let u1 = 1 - Math.random(); // Uniform distribution (0, 1]
        let u2 = 1 - Math.random(); // Uniform distribution (0, 1]
        let z = Math.sqrt(-2.0 * Math.log(u1)) * Math.cos(2 * Math.PI * u2); // Normal distribution (0, 1)
        return mean + stdDev * z; // Adjust mean and standard deviation
      }

    const getPercentage = () => {
        let rand = getRandomNormal(60, 15)
        let res = parseFloat(rand.toFixed(2));

        setPercent(res.toString().replace('.', ','))
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
            <div style={{width: "80%", height: "100%", display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly', alignItems: "center"}}>
                <h3>De acordo com o horóscopo da Odonto Beach, sua chance de dar match na festa é</h3>
                <Heart>
                    <h1 style={{paddingTop: "15px"}}>{percent}%</h1>
                </Heart>
                <span>
                    {percent < 55 ? "Quem disse que seria fácil?!" : "Caiu na rede é peixe, ein!"}
                </span>
                <div onClick={() => { props.onClose(); props.onClick(); }} style={{borderRadius: "5px", border: "1.5px solid #18122B", padding: "5px 20px", fontWeight: "bold"}}> Continuar </div>
            </div>
            }
            </Modal>
        </AnimatePresence>
        </Container>
    )
}

export default DonateModal;