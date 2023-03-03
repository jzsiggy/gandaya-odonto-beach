import { useState } from "react"
import { useMutation } from "react-query";
import Loader from "../../../assets/components/loader/Loader";
import { Container, FormWrapper, Input, Modal, TextWrapper, X } from "./styles"

const OrderModal = (props) => {
    const [price, setPrice] = useState('0.00')

    const {isIdle, isLoading, isError, isSuccess, mutate} = useMutation(props.onClickFn);

    return (
        <Container>
            <Modal>
                <X onClick={() => props.closeModal()}/>
                <TextWrapper>
                    <span style={{color: "#470A68", fontWeight: "500"}}>Por qual preço gostaria de vender seu ingresso?</span>
                </TextWrapper>
                <FormWrapper>
                    <Input value={price} onChange={(event) => setPrice(event.target.value)} type="number" min="1" step="any"/>
                    {
                    isIdle ? <span onClick={() => mutate(parseFloat(price))}>Confirm</span> :
                    isLoading ? <Loader scale={0.4} /> :
                    isError ? <>algo deu errado</> :
                    isSuccess && <div style={{textAlign: "center"}}>Ingresso anunciado com sucesso</div>
                    }
                </FormWrapper>
            </Modal>
        </Container>
    )
}

export default OrderModal