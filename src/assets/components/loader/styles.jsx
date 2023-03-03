import styled, { keyframes } from 'styled-components';

const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

const breathe1 = keyframes`
  0%   { opacity: 0% }
  25%  { opacity: 50% }
  50%  { opacity: 100% }
  75%  { opacity: 50% }
  100% { opacity: 0% }
`

const breathe2 = keyframes`
  0%   { opacity: 50% }
  25%  { opacity: 100% }
  50%  { opacity: 50% }
  75%  { opacity: 0% }
  100% { opacity: 50% }
`

const breathe3 = keyframes`
  0%   { opacity: 100% }
  25%  { opacity: 50% }
  50%  { opacity: 0% }
  75%  { opacity: 50% }
  100% { opacity: 100% }
`

const AnimatedCircle1 = styled.circle`
    opacity: ${props => props.opacity};
    animation-name: ${breathe1};
    animation-duration: 3s;
    animation-iteration-count: infinite;
`

const AnimatedCircle2 = styled.circle`
    opacity: ${props => props.opacity};
    animation-name: ${breathe2};
    animation-duration: 3s;
    animation-iteration-count: infinite;
`

const AnimatedCircle3 = styled.circle`
    opacity: ${props => props.opacity};
    animation-name: ${breathe3};
    animation-duration: 3s;
    animation-iteration-count: infinite;
`

export { Container, AnimatedCircle1, AnimatedCircle2, AnimatedCircle3 }