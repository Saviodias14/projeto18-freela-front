import Header from "../../components/Header"
import styled from "styled-components"
import principal from "../../assets/homeImg.png"
import FilterCity from "../../components/FilterCity"
import HospedagensList from "./HospedagemList"
export default function HospedagemPage() {
    return (
        <Container>
            <Header></Header>
            <img alt="lugares para viajar" src={principal}/>
            <FilterCity/>
            <HospedagensList/>
        </Container>
    )
}

const Container = styled.div`
margin-top:138px;
img{
    width: 100%;
}
`