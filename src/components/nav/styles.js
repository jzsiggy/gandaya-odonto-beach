import styled from "styled-components";

const NavigationWrapper = styled.div`
    position: fixed;
    bottom: 0;
    width: 100%;
    max-width: 1000px;
    height: 70px;
    display: flex;
    justify-content: center;
    align-items: center;

    background-color: #18122B;

    // border-top: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 15px 15px 0 0;
    // box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

    z-index: 5;
`

const Navigation = styled.div`
    height: 60px;
    width: 90%;

    display: flex;
    justify-content: space-evenly;
    align-items: center;
`

const NavItem = styled.div`
    height: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;

    font-size: 1.5em;
    color: black;

    transition: 0.1s ease all;

    &:active {
        transform: scale(1.1) rotate(3deg);
    }
`

export {
    NavigationWrapper,
    Navigation,
    NavItem,
};