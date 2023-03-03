import { useState } from "react"
import { useMutation } from "react-query"
import { Link } from "react-router-dom"
import Loader from "../../../assets/components/loader/Loader"
import { Container, FormWrapper, Input, Modal, TextWrapper, X } from "./styles"

const TransferModal = (props) => {
    const [receiverEmail, setReceiverEmail] = useState('')

    const {isIdle, isLoading, isError, isSuccess, mutate} = useMutation(props.onClickFn);

    return (
        <Container>
            {/* {(!isLoading && !isSuccess) && <X onClick={() => props.closeModal()}/>} */}
            <Modal>
                <X onClick={() => props.closeModal()}/>
                <TextWrapper>
                    <span style={{color: "#470A68", fontWeight: "500"}}>Insira o email do recipiente</span>
                </TextWrapper>
                <FormWrapper>
                    <Input value={receiverEmail} onChange={(event) => setReceiverEmail(event.target.value)} placeholder="Email do recipiente"/>
                    {
                    isIdle ? <span onClick={() => mutate(receiverEmail)}>Confirm</span> :
                    isLoading ? <Loader scale={0.4} /> :
                    isError ? <>algo deu errado</> :
                    isSuccess && 
                    <div style={{textAlign: "center"}}>
                        <span>Ingresso Transferido com Sucesso</span> 
                        <div onClick={() => props.closeModal()}>Voltar</div>
                    </div>
                    }
                </FormWrapper>
            </Modal>
        </Container>
    )
}

export default TransferModal