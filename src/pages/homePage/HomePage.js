import styled from "styled-components"
import Header from "../../components/Header"
import principal from "../../assets/homeImg.png"


export default function HomePage() {
    return (
        <Container>
            <Header/>
            <img alt="lugares para viajar" src={principal}/>
        </Container>

    )
}

const Container = styled.div`
img{
    margin-top:138px;
    width: 100%;
}
`
