import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Loader from "../../assets/components/loader/Loader";
import Login from "../../assets/components/login/Login";
import client from "../../assets/service/client";
import useStore from "../../store/store";

import { Button } from "./styles";

const Grant = (props) => {
    const user = useStore(state => state.user);
    const navigate = useNavigate();
    const { code } = useParams();
    const [loading, setLoading] = useState(false)
    const [errorMessage, setErrorMessage] = useState(false)


    const onSubmit = async () => {
        setLoading(true)
        await client.post("/ticket/claim", {
            code
        })
        .then(res => navigate("/wallet"))
        .catch(err => { setLoading(false); setErrorMessage("Não foi possível garantir o ingresso") })
    }

    return (
        user ?
        <>
        {
        loading ?
            <Loader />
        :
            <Button onClick={onSubmit}>Clique para receber o seu ingresso</Button>
        }
            {errorMessage && <span style={{marginTop: "25px"}}>{errorMessage}</span>}
        </>
        :
            <Login />
    )
}

export default Grant