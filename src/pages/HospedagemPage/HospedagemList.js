import { useContext, useState } from "react"
import { HospedagemListContext } from "../../context/lists"
import axios from "axios"
import { BlackGround, Caracteristicas, Comodidades, Container, Container2, Fotos, InformacoesPassagem, ItemPassagem } from "./HopedagemStyle"

export default function HospedagensList() {
    const { hospedagensList } = useContext(HospedagemListContext)
    const [openInfo, setOpenInfo] = useState(false)
    const [hospedagemInfo, setHospedagemInfo] = useState()

    function openInformacoes(id) {
        setOpenInfo(true)
        console.log(id, `${process.env.REACT_APP_API_URL}/hospedagem/${id}`)
        axios.get(`${process.env.REACT_APP_API_URL}/hospedagem/${id}`)
            .then((res) => setHospedagemInfo(res.data))
            .catch((err) => console.log(err.response.data))
    }
    if (!hospedagensList || hospedagensList.length === 0) {
        return (
            <Container>
                <h2>Selecione a cidade de destino da sua viagem!</h2>
            </Container>
        )
    }
    return (
        <Container>
            {hospedagensList.map((h) =>
                <ItemPassagem key={h.id} onClick={() => openInformacoes(h.id)}>
                    <h1>Hospedagem em {h.nome}</h1>
                    <img alt="Hospedagem" src={h.fotoPrincipal} />
                    <p>{h.cidade}</p>
                    <p>Preço:{(h.preco / 100).toLocaleString('pt-BR', {
                        style: 'currency',
                        currency: 'BRL',
                    })}</p>
                </ItemPassagem>)}
            <BlackGround openInfo={openInfo} onClick={() => setOpenInfo(false)} />
            {hospedagemInfo ? <InformacoesPassagem openInfo={openInfo}>
                <h1>{hospedagemInfo.nomeHotel}</h1>
                <Fotos>
                    {hospedagemInfo.fotos.map((f) =>
                        <img key={f} alt="foto" src={f} />)}
                </Fotos>
                <Container2>
                    <Caracteristicas>
                        <h2>Caracteristicas</h2>
                        <ul>
                            <li>
                                {hospedagemInfo.destino}
                            </li>
                            <li>
                                {hospedagemInfo.preco}
                            </li>
                            <li>
                                {hospedagemInfo.descricao}
                            </li>
                        </ul>

                    </Caracteristicas>
                    <Comodidades>
                    <h2>Comodidades</h2>
                        <ul>
                            {hospedagemInfo.comodidades.map((c)=>
                            <li key={c}>
                                {c}
                            </li>)}
                        </ul>
                    </Comodidades>
                </Container2>
            </InformacoesPassagem> : <InformacoesPassagem openInfo={openInfo} />}
        </Container>
    )
}