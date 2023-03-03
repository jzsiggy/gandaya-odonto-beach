import { useEffect, useRef } from "react";
import { useState } from "react";
import { Page,
    // Logo,
    Area,
    Text,
    ButtonArea,
    ToggleButtonArea,
    BigButtonArea,
    ToggleButton,
    Button,
    // Clip,
    Overlay,
    ButtonLink,
    // LoadLogo,
    // LoadContainer,
    Lace,
    ScrollText,
    Zodiac
} from "./styles";

const Home = () => {
    // const [loading, setLoading] = useState(false);
    // useEffect(() => {
    //     setTimeout(() => { setLoading(false) }, 4000)
    // }, [])

    return (
    <Page>
        <Zodiac />
        <video style={{
            position: "absolute",
            top: "0",
            left: "0",
            display: "block",
            width: "100vw",
            height: "100vh",
            "OobjectFit": "cover",
            "objectFit": "cover",
        }} src="https://gandaya.b-cdn.net/odonto_bg.mp4" autoPlay loop muted playsInline></video>
        <Overlay />
        <Area>
            <Text />
            <ButtonArea>
                <BigButtonArea>
                    <ButtonLink to="/events/odonto-beach">Garanta seu Ingresso</ButtonLink>
                    {/* <Button>
                    <a style={{color: "white", width: "100%", height: "100%", textDecoration: "none", display: "flex", justifyContent: "center", alignItems: "center"}} href="https://wa.me/+5511995093002">
                        Entre em Contato
                    </a>
                    </Button> */}
                </BigButtonArea>
            </ButtonArea>
            {/* <Lace>
                <ScrollText>
                    <div>anos 2000</div>
                </ScrollText>
                <ScrollText>
                    <div>anos 2000</div>
                </ScrollText>
                <ScrollText>
                    <div>anos 2000</div>
                </ScrollText>
            </Lace> */}
        </Area>
    </Page>
    )
}

export default Home;