import Header from "../../components/Header"
import styled from "styled-components"
import principal from "../../assets/homeImg.png"
import FilterCity from "../../components/FilterCity"
import HospedagensList from "./HospedagemList"
import { useState } from "react"
import FilterPrice from "../../components/FilterPrice"
export default function HospedagemPage() {
    const [maxPrice, setMaxPrice] = useState(1000000)
    const [minPrice, setMinPrice] = useState(0)
    const [hide, setHide] = useState(true)
    const [att, setAtt] = useState(true)
    return (
        <Container>
            <Header hide={hide} setHide={setHide} />
            <img alt="lugares para viajar" src={principal}/>
            <FilterCity maxPrice={maxPrice} minPrice={minPrice} att={att} />
            <HospedagensList/>
            <FilterPrice hide={hide} setMaxPrice={setMaxPrice} maxPrice={maxPrice}
                setMinPrice={setMinPrice} minPrice={minPrice} 
                att={att} setAtt={setAtt} />
        </Container>
    )
}

const Container = styled.div`
margin-top:138px;
img{
    width: 100%;
}
`