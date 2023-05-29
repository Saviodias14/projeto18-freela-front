import styled from "styled-components"
import Header from "../../components/Header"
import FilterCity from "../../components/FilterCity"
import PassagensList from "./PassagensList"
import principal from "../../assets/homeImg.png"
import FilterPrice from "../../components/FilterPrice"
import { useState } from "react"

export default function PassagemPage() {
    const [maxPrice, setMaxPrice] = useState(1000000)
    const [minPrice, setMinPrice] = useState(0)
    const [hide, setHide] = useState(true)
    const [att, setAtt] = useState(true)
    return (
        <Container>
            <Header hide={hide} setHide={setHide} />
            <img alt="lugares para viajar" src={principal} />
            <FilterCity maxPrice={maxPrice} minPrice={minPrice} att={att} />
            <PassagensList />
            <FilterPrice hide={hide} setMaxPrice={setMaxPrice} maxPrice={maxPrice}
                setMinPrice={setMinPrice} minPrice={minPrice} 
                att={att} setAtt={setAtt} />
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
