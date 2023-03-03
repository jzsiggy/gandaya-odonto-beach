import { useQuery } from "react-query";
import client from "../../../assets/service/client";
import useStore from "../../../store/store";

const Jewels = () => {
    return (
        <div style={{display: 'flex', flexDirection: "column", alignItems: "center", justifyContent: "center"}}>
            <div style={{textAlign: "center", width: '90%', lineHeight: '2em'}}>
                Um Token é um ingresso que te dá acesso a vários eventos e até clubes de benefícios... <br /> Em breve na Gandaya 🤯
            </div>
        </div>
    )
}

export default Jewels