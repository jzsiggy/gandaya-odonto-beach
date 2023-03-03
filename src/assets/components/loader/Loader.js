import { Container, AnimatedCircle1, AnimatedCircle2, AnimatedCircle3 } from './styles';

const Loader = (props) => {
    const colors = [
        "#FFFD82",
        "#1B998B",
        "#2D3047",
        "#FF9B71",
        "#E84855",
        "#F7EC59",
        "#FF66D8",
        "#92DCE5",
        "#FF3366",
        "#2EC4B6"
    ]

    const getRandomStroke = () => {
        if (props.white) { return "white" }
        return colors[Math.floor(Math.random()*colors.length)];
    } 

    const strokeWidth = props.stroke ? props.stroke : "2"

    const scale = props.scale ? props.scale : 1;

    return (
        <Container>
            <svg width={(112*scale).toString()} height={(150*scale).toString()} viewBox="0 0 224 300" fill="none" xmlns="http://www.w3.org/2000/svg">
                <AnimatedCircle1 cx="112.383" cy="100.184" r="49" stroke={getRandomStroke()} stroke-width={strokeWidth}/>
                <AnimatedCircle3 cx="68.6987" cy="125" r="49" stroke={getRandomStroke()} stroke-width={strokeWidth}/>
                <AnimatedCircle2 cx="155.301" cy="75" r="49" stroke={getRandomStroke()} stroke-width={strokeWidth}/>
                <AnimatedCircle2 cx="155.301" cy="125" r="49" stroke={getRandomStroke()} stroke-width={strokeWidth}/>
                <AnimatedCircle3 cx="68.6987" cy="75" r="49" stroke={getRandomStroke()} stroke-width={strokeWidth}/>
                <AnimatedCircle1 cx="112" cy="50" r="49" stroke={getRandomStroke()} stroke-width={strokeWidth}/>
                <AnimatedCircle1 cx="112" cy="150" r="49" stroke={getRandomStroke()} stroke-width={strokeWidth}/>
            </svg>
        </Container>
    )
}

export default Loader;