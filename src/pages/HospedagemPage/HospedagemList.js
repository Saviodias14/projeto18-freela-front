import styled from "styled-components"
import { useContext } from "react"
import { HospedagemListContext } from "../../context/lists"
export default function HospedagensList() {
    const {hospedagensList} = useContext(HospedagemListContext)
    if(!hospedagensList){
        return(
            <Container>
                <h2>Selecione a cidade de destino da sua viagem!</h2>
            </Container>
        )
    }
    return (
        <Container>
            {hospedagensList.map((h) =>
                <ItemPassagem>
                    <h1>Hospedagem em {h.destino}</h1>
                    <img alt="Hospedagem" src={h.fotoPrincipal} />
                    <p>{h.nome}</p>
                    <p>Preço:{(h.preco / 100).toLocaleString('pt-BR', {
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