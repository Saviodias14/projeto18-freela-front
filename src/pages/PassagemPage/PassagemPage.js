import styled from "styled-components"
import Header from "../../components/Header"
import FilterCity from "../../components/FilterCity"
import PassagensList from "./PassagensList"
import principal from "../../assets/homeImg.png"

export default function PassagemPage() {
    return (
        <Container>
            <Header />
            <img alt="lugares para viajar" src={principal}/>
            <FilterCity/>
            <PassagensList/>
        </Container>
    )
}

const Container = styled.div`
margin-top:138px;
position:relative;
img{
    width: 100%;
}
`
