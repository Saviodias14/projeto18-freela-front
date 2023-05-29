import axios from "axios"
import { useContext, useEffect, useState } from "react"
import { Filters, ChooseCity } from "./FilterStyle"
import { HospedagemListContext, PassagensListContext } from "../context/lists"
import { handleSelectionHospedagem, handleSelectionPassagem } from "./filterfunctions"

export default function FilterCity() {
    const [destinys, setDestinys] = useState()
    const [origins, setOrigins] = useState()
    const [citys, setCitys] = useState({})
    const [page, setPage] = useState()
    const { setPassagensList } = useContext(PassagensListContext)
    const { setHospedagensList } = useContext(HospedagemListContext)
    console.log(page)
    useEffect(() => {
        setPage(window.location.href)
        axios.get(`${process.env.REACT_APP_API_URL}/cidades/destino`)
            .then(res => setDestinys(res.data))
            .catch(err => console.log(err.response.data))

        axios.get(`${process.env.REACT_APP_API_URL}/cidades/origem`)
            .then(res => setOrigins(res.data))
            .catch(err => console.log(err.response.data))
    }, [])

    if (!destinys || !origins) {
        return (
            <Filters>
                <ChooseCity>
                    <label>Selecione a cidade de origem:</label>
                    <select></select>
                </ChooseCity>
                <ChooseCity>
                    <label>Selecione a cidade de destino:</label>
                    <select></select>
                </ChooseCity>
            </Filters>
        )
    } else if (page.endsWith('/hospedagem')) {
        return (
            <Filters>
                <ChooseCity>
                    <label>Selecione a cidade de destino:</label>
                    <select onChange={(e) => {
                        setCitys({ ...citys, destiny: e.target.value })
                        handleSelectionHospedagem(e.target.value, setHospedagensList)
                    }}>
                        <option></option>
                        {destinys.map((c) => <option key={c.id} value={c.id}>{c.nome}</option>)}
                    </select>
                </ChooseCity>
            </Filters>
        )
    }
    return (
        <Filters>
            <ChooseCity>
                <label>Selecione a cidade de origem:</label>
                <select onChange={(e) => {
                    setCitys({ ...citys, origin: e.target.value })
                    handleSelectionPassagem(citys.destiny, e.target.value, "o", setPassagensList)
                }}>
                    <option></option>
                    {origins.map((c) => <option key={c.id} value={c.id}>{c.nome}</option>)}

                </select>
            </ChooseCity>
            <ChooseCity>
                <label>Selecione a cidade de destino:</label>
                <select onChange={(e) => {
                    setCitys({ ...citys, destiny: e.target.value })
                    handleSelectionPassagem(citys.origin, e.target.value, "d", setPassagensList)
                }}>
                    <option></option>
                    {destinys.map((c) => <option key={c.id} value={c.id}>{c.nome}</option>)}
                </select>
            </ChooseCity>
        </Filters>
    )
}
