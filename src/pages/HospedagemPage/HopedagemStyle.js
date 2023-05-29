import styled from "styled-components"
export const Container = styled.div`
display:flex;
flex-direction:row;
flex-wrap:wrap;
margin-bottom:50px;
h2{
    font-size:35px;
    margin: 5px auto;
}
`
export const ItemPassagem = styled.div`
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
    max-width:300px;
    max-height:250px;
    margin-bottom:10px;
}
`
export const InformacoesPassagem = styled.div`
display: ${props => props.openInfo ? 'flex' : 'none'};
flex-direction:column;
background-color:white;
width:50%;
height:60%;
box-sizing:border-box;
position:fixed;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
z-index:100;
justify-content: center;
padding:40px;
box-sizing:border-box;
h1{
    text-align:center;
    font-size:20px;
}
p{
    font-size:18px;
    font-family: sans-serif;
    font-style: normal;
    font-weight: 700;
    line-height: 20px;
    color: #000;
    text-align:left;
    margin-left:100px;
}
`
export const BlackGround = styled.div`
display: ${props => props.openInfo ? 'flex' : 'none'};
width:100%;
height:100%;
position:fixed;
top:0;
left:0;
background-color:#000;
z-index:50;
opacity: 0.5;
`
export const Container2 = styled.div`
display:flex;
`
export const Fotos = styled.div`
display:flex;
overflow:hidden;
overflow-x: scroll;
img{
    max-width:150px;
    max-height:100px;
    margin: 10px;
}
`
export const Caracteristicas = styled.div`
width:40%;
ul {
  list-style-type: disc;
}
h2{
    font-size:16px;
    font-family: sans-serif;
    font-style: normal;
    font-weight: 700;
    line-height: 20px;
    color: #000;
}
p{
    font-size:12px;
    font-family: sans-serif;
    font-style: normal;
    font-weight: 400;
    line-height: 16px;
    color: #000;
}
`
export const Comodidades = styled.div`
margin-left:20%;
ul {
  list-style-type: disc;
}
h2{
    font-size:16px;
    font-family: sans-serif;
    font-style: normal;
    font-weight: 700;
    line-height: 20px;
    color: #000;
}
`