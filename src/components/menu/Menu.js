import { AnimatePresence } from "framer-motion";
import { Container, MenuWrapper, Overlay, Close, ItemWrapper, ItemLink, ItemExternal } from "./styles";
import { CgClose } from 'react-icons/cg'

const Menu = (props) => {
    return (
        <Container initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }}>
            <AnimatePresence exitBeforeEnter={true} initial={false}>
            { props.isVisible && 
            <MenuWrapper key='menu' initial={{ x: -300, opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: -300, opacity: 0 }} transition={{ duration: 0.2 }} > 
                <Close><CgClose onClick={() => props.onClose()} /></Close>
                <ItemWrapper onClick={() => props.onClose()}>
                    <ItemLink to="/events/odonto-beach" active={props.pathName.startsWith('/events')}>Odonto Beach</ItemLink>
                    <ItemLink to="/wallet" active={props.pathName.startsWith('/wallet')}>Ingressos</ItemLink>
                    <ItemLink to="/user" active={props.pathName.startsWith('/user')}>Perfil</ItemLink>
                    <ItemLink to="/feed" active={props.pathName.startsWith('/feed')}>Feed</ItemLink>
                </ItemWrapper>
            </MenuWrapper>
            }
            { props.isVisible && <Overlay key='overlay' initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }}/> }
            </AnimatePresence>
        </Container>
    )
}

export default Menu;