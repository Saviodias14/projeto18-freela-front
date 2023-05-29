import styled from "styled-components";

export const ChooseCity = styled.div`
display:flex;
flex-direction:column;

select{
    width:200px;
    height:35px;
    border-radius:10px;
    border:none;
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    padding-left: 10px;
    margin-right:30px;
}
label{
    margin-bottom:10px;
}
option{
    font-size:18px;
}
`
export const Filters = styled.div`
background:#cbcbcd;
margin: 0 auto;
margin-top:5px;
display:flex;
min-width:300px;
max-width:max-content;
padding:60px 0 60px 30px;
border-radius:40px;
border: 1px #484d50 solid;
justify-content:center;
`