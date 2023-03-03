import { useNavigate } from "react-router-dom"
import Login from "../../assets/components/login/Login";
import useStore from "../../store/store";
import { Container, Header, Item, Content } from "./styles";

import Tickets from './tickets/Tickets';
import Jewels from './jewels/Jewels';

const Wallet = (props) => {
    const user = useStore(state => state.user);
    const navigate = useNavigate();

    return (
        user ?
            <Container initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }}>
                {/* <Header>
                    <Item active={props.tickets} onClick={() => navigate("/wallet/tickets", { replace: true })}>Ingressos</Item>
                    <Item active={props.jewels} onClick={() => navigate("/wallet/jewels", { replace: true })}>Tokens</Item>
                </Header> */}
                <Content>
                    { props.tickets && <Tickets /> }
                    { props.jewels && <Jewels /> }
                </Content>
            </Container>
        :
            <Login />
    )
}

export default Wallet