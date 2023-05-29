import styled from "styled-components"
import aviao from "../../assets/aviao-decolando.jpg"
import { useContext } from "react"
import { PassagensListContext } from "../../context/lists"
export default function PassagensList() {
    const {passagensList} = useContext(PassagensListContext)
    function openInformacoes(){
        
    }
    if(!passagensList){
        return(
            <Container>
                <h2>Selecione a cidade de origem e a cidade de destino da sua viagem!</h2>
            </Container>
        )
    }
    return (
        <Container>
            {passagensList.map((p) =>
                <ItemPassagem onClick={openInformacoes}>
                    <h1>Passagem de {p.origem} para {p.destino}</h1>
                    <img alt="Imagem de avião" src={aviao} />
                    <p>Horário de partida: {p.horaPartida}</p>
                    <p>Horário de chegada: {p.horaChegada}</p>
                    <p>Preço:{(p.preco / 100).toLocaleString('pt-BR', {
                        style: 'currency',
                        currency: 'BRL',
                    })}</p>
                </ItemPassagem>)}
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
h1{
    margin-bottom:10px;
}
img{
    width:250px;
    margin-bottom:10px;
}
`