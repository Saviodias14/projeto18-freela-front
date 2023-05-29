import { FaBars, FaHotel, FaPlaneDeparture } from "react-icons/fa"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"

export default function Header({ setHide, hide }) {
    const navigate = useNavigate()
    function changePage(page) {
        navigate(`/${page}`)
    }
    return (
        <Container>
            <div>
                <FaBars onClick={() => setHide(!hide)} size={35} style={{position:'fixed', left:'20px', top:'18px' }} />
                <h1>VIAGENS & FABULOSAS</h1>
            </div>
            <Menu>
                <Icon onClick={() => changePage("passagem")}>
                    <FaPlaneDeparture size={30} color="#ff6961" />
                    <p>Viagens</p>
                </Icon>
                <Icon onClick={() => changePage("hospedagem")}>
                    <FaHotel size={30} color="#ff6961" />
                    <p>Hotéis</p>
                </Icon>
            </Menu>
        </Container >
    )
}

const Container = styled.header`
background-color:#ff6961;
width:100%;
display:flex;
flex-direction:column;
position:fixed;
top:0;
left:0;
h1{
    font-family: sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 50px;
    line-height: 30px;
    color: #484d50;
    margin: 20px auto 0 auto;
}
div{
    display:flex;
}
`
const Menu = styled.div`
background-color:#fff;
display:flex;
margin-top:20px;
border-top: 1px #ff6961 solid;
border-bottom: 1px #ff6961 solid;
justify-content:center;
`
const Icon = styled.div`
margin:10px 0 10px 0;
display:flex;
flex-direction:column;
align-items:center;
justify-content:space-between;
:last-child{
margin-left:350px;
}
&:hover{
    opacity:0.7;
    cursor: pointer;
}
p{
    text-decoration:none;
    color:#ff6961;
}
`
