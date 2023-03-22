import { Header, HeaderWrapper, HeadItem, Logo, Menu, Support } from "./styles";
import { HiMenuAlt2 } from 'react-icons/hi'
import { BiSupport } from 'react-icons/bi'

const Head = (props) => {
 return (
    <HeaderWrapper>
        <Header>
            <Menu onClick={() => props.onMenuClick()}><HiMenuAlt2 /></Menu>
            <HeadItem><Logo /></HeadItem>
            <Support href="https://wa.me/+5511995093002" target="_blank"><BiSupport style={{fontSize: "0.75em"}} /></Support>
        </Header>
    </HeaderWrapper>
 )
}

export default Head;