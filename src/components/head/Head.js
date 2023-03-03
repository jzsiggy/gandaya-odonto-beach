import { Header, HeaderWrapper, HeadItem, Logo, Menu } from "./styles";
import { HiMenuAlt2 } from 'react-icons/hi'

const Head = (props) => {
 return (
    <HeaderWrapper>
        <Header>
            <Menu onClick={() => props.onMenuClick()}><HiMenuAlt2 /></Menu>
            <HeadItem><Logo /></HeadItem>
        </Header>
    </HeaderWrapper>
 )
}

export default Head;