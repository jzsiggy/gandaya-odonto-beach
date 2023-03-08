import styled from 'styled-components';
import stars from '../../assets/images/stars.jpg'

const Button = styled.div`
    height: 8%;
    margin: 10px 0;
    min-height: 50px;
    width: calc(100% - 20px);
    align-self: center;

    text-align: center;
    cursor: pointer;

    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 5px;
    font-weight: bold;
    color: white;
    // background-color: #9D3C72;
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${stars});
    background-size: cover;
    background-position: center;
    text-decoration: none;

    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`

export {
    Button
}