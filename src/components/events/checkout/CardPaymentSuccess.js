import { Link } from "react-router-dom"

const CardPaymentSuccess = () => {
    return (
        <>
            <>Pagamento efetuado com sucesso</>
            <br />
            <br />
            {/* <span style={{fontSize: "1.5em"}}>💸</span> */}
            <div style={{
                        height: '250px',
                        width: '80%',
                        maxWidth: "350px",
                        backgroundImage: "url('https://media2.giphy.com/media/3o751XDbTvZw958ZYk/giphy.gif?cid=ecf05e471ij9ke4z9l6e5m79096w1nbb3yagli2g4bgtys5c&rid=giphy.gif&ct=g')",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                        borderRadius: "15px"
                    }} />
            <br />
            <Link to="/wallet">Ver seus ingressos</Link>
        </>
    )
}

export default CardPaymentSuccess;