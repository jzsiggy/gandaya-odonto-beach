import { useNavigate } from "react-router-dom";
import { Navigation, NavigationWrapper, NavItem } from "./styles"

// import { GoHome } from 'react-icons/go';
import { AiOutlineCalendar } from 'react-icons/ai';
import { AiFillCalendar } from 'react-icons/ai';

import { GiMushroomGills, GiSuperMushroom } from 'react-icons/gi';
import { FaUserCircle, FaRegUserCircle } from 'react-icons/fa';

import { IoTicketOutline } from 'react-icons/io5';
import { IoTicket } from 'react-icons/io5';

import { RiUserSmileFill } from 'react-icons/ri'
import { RiUserSmileLine } from 'react-icons/ri'

const Nav = (props) => {
    const navigate = useNavigate();

    let { pathName } = props

    return (
        <NavigationWrapper>
            <svg width="0" height="0">
            <linearGradient id="gradient" x1="2%" y1="0%" x2="98%" y2="100%" >
                <stop offset="0%" stopColor="rgba(220, 234, 216)" stopOpacity="1.00" />
                <stop offset="50%" stopColor="rgb(240,150,200)" stopOpacity="1.00" />
                <stop offset="100%" stopColor="rgb(249,159,201)" stopOpacity="1.00" />
            </linearGradient>
            </svg>
            <Navigation>
                <NavItem onClick={() => navigate("/events/odonto-beach", { replace: true })}>
                        {
                        pathName.startsWith('/events') ?
                        <>
                        <AiFillCalendar style={{ fill: "url(#gradient)" }}/>
                        <span style={{"fontSize": "0.5em", "fontWeight": "bold", color: "rgba(220, 234, 216)"}}>Eventos</span>
                        </>
                        :
                        <>
                        <AiOutlineCalendar style={{ fill: "rgba(220, 234, 216)" }}/>
                        <span style={{"fontSize": "0.5em", color: "rgba(220, 234, 216)"}}>Eventos</span>
                        </>
                        }
                </NavItem>
                <NavItem onClick={() => navigate("/wallet", { replace: true })}>
                        {
                        pathName.startsWith('/wallet') ?
                        <>
                        <IoTicket style={{ fill: "url(#gradient)" }}/>
                        <span style={{"fontSize": "0.5em", "fontWeight": "bold", color: "rgba(220, 234, 216)"}}>Ingressos</span>
                        </>
                        :
                        <>
                        <IoTicketOutline stroke="rgba(220, 234, 216)"/>
                        <span style={{"fontSize": "0.5em", color: "rgba(220, 234, 216)"}}>Ingressos</span>
                        </>
                        }
                </NavItem>
                <NavItem onClick={() => navigate("/user", { replace: true })}>
                    {
                        pathName.startsWith('/user') ?
                        <>
                        <FaUserCircle style={{ fill: "url(#gradient)" }}/>
                        <span style={{"fontSize": "0.5em", "fontWeight": "bold", color: "rgba(220, 234, 216)"}}>Perfil</span>
                        </>
                        :
                        <>
                        <FaRegUserCircle style={{ fill: "rgba(220, 234, 216)" }}/>
                        <span style={{"fontSize": "0.5em", color: "rgba(220, 234, 216)"}}>Perfil</span>
                        </>
                        }
                </NavItem>
            </Navigation>
        </NavigationWrapper>
    )
}

export default Nav;