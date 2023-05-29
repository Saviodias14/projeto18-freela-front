import { useContext, useState } from "react";
import styled from "styled-components";
import { HospedagemListContext, PassagensListContext } from "../context/lists";

export default function FilterPrice({ setMaxPrice, minPrice, maxPrice, setMinPrice, att, setAtt, hide }) {

    function handleForm(e) {
        e.preventDefault()
        setAtt(!att)
    }
    return (
        <Container hide={hide} onSubmit={handleForm}>
            <label htmlFor="minPrice">Preço mínimo: {(minPrice / 100).toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL',
            })}</label>
            <input
                type="range"
                id="min"
                name="min"
                min="0"
                max={500000}
                onChange={(e) => setMinPrice(e.target.value)}
            />

            <label htmlFor="maxPrice">Preço máximo: {(maxPrice / 100).toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL',
            })}</label>
            <input
                type="range"
                id="max"
                name="max"
                min="0"
                max={500000}
                onChange={(e) => setMaxPrice(e.target.value)}
            />
            <button type="submit">Buscar</button>

        </Container>
    )
}

const Container = styled.form`
background-color:#cbcbcd;
display: ${props => props.hide ? 'none' : 'flex'};
flex-direction:column;
box-sizing:border-box;
padding: 50px 20px;
width:200px;
height:100%;
position:fixed;
top:0;
left:0;
z-index:50;
margin-top:138px;
input{
    margin-bottom:20px;
}
`