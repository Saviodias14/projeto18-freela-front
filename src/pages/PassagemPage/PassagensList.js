import styled from "styled-components"
import aviao from "../../assets/aviao-decolando.jpg"
import { useContext, useState } from "react"
import { PassagensListContext } from "../../context/lists"
import axios from "axios"
export default function PassagensList() {
    const {passagensList} = useContext(PassagensListContext)
    const [openInfo, setOpenInfo] = useState(false)
    const [passagemInfo, setPassagemInfo] = useState()
    function openInformacoes(id){
        setOpenInfo(true)
        axios.get(`${process.env.REACT_APP_API_URL}/passagem/${id}`)
        .then((res)=>setPassagemInfo(res.data))
        .catch((err)=>console.log(err.response.data))
    }
    if(!passagensList||passagensList.length===0){
        return(
            <Container>
                <h2>Selecione a cidade de origem e a cidade de destino da sua viagem!</h2>
            </Container>
        )
    }
    return (
        <Container>
            {passagensList.map((p) =>
                <ItemPassagem key={p.id} onClick={()=>openInformacoes(p.id)}>
                    <h1>Passagem de {p.origem} para {p.destino}</h1>
                    <img alt="Imagem de avião" src={aviao} />
                    <p>Horário de partida: {p.horaPartida}</p>
                    <p>Horário de chegada: {p.horaChegada}</p>
                    <p>Preço:{(p.preco / 100).toLocaleString('pt-BR', {
                        style: 'currency',
                        currency: 'BRL',
                    })}</p>
                </ItemPassagem>)}
                <BlackGround openInfo={openInfo} onClick={()=>setOpenInfo(false)}/>
                {passagemInfo?<InformacoesPassagem openInfo={openInfo}>
                    <p>Origem: {passagemInfo.origem}</p>
                    <p>Destino: {passagemInfo.destino}</p>
                    <p>Hora de partida: {passagemInfo.horaPartida}</p>
                    <p>Previsão de chegada: {passagemInfo.horaChegada}</p>
                    <p>Companhia aérea: {passagemInfo.companhia}</p>
                </InformacoesPassagem>:<InformacoesPassagem/>}
        </Container>
    )
}

const Container = styled.div`
display:flex;
flex-direction:row;
flex-wrap:wrap;
margin-bottom:50px;
h2{
    font-size:35px;
    margin: 5px auto;
}
`
const ItemPassagem = styled.div`
width:300px;
margin-left:90px;
margin-top: 60px;
display:flex;
flex-direction:column;
align-items:center;
&:hover{
    cursor: pointer;
}
h1{
    margin-bottom:10px;
}
img{
    width:250px;
    margin-bottom:10px;
}
`
const InformacoesPassagem = styled.div`
display: ${props=>props.openInfo?'flex':'none'};
flex-direction:column;
background-color:white;
width:40%;
height:60%;
box-sizing:border-box;
position:fixed;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
z-index:100;
justify-content: center;
p{
    font-size:18px;
    font-family: sans-serif;
    font-style: normal;
    font-weight: 700;
    line-height: 20px;
    color: #000;
    text-align:left;
    margin-left:20%;
}
`
const BlackGround = styled.div`
display: ${props=>props.openInfo?'flex':'none'};
width:100%;
height:100%;
position:fixed;
top:0;
left:0;
background-color:#000;
z-index:50;
opacity: 0.5;
`