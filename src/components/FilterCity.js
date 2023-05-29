import axios from "axios"
import { useContext, useEffect, useState } from "react"
import { Filters, ChooseCity } from "./FilterStyle"
import { HospedagemListContext, PassagensListContext } from "../context/lists"
import { handleSelectionHospedagem, handleSelectionPassagem } from "./filterfunctions"

export default function FilterCity({ maxPrice, minPrice, att }) {
    const [destinys, setDestinys] = useState()
    const [origins, setOrigins] = useState()
    const [citys, setCitys] = useState({})
    const [page, setPage] = useState()
    const { setPassagensList } = useContext(PassagensListContext)
    const { setHospedagensList } = useContext(HospedagemListContext)
    console.log(att, "att")
    useEffect(() => {
        setPage(window.location.href)
        axios.get(`${process.env.REACT_APP_API_URL}/cidades/destino`)
            .then(res => setDestinys(res.data))
            .catch(err => console.log(err.response.data))

        axios.get(`${process.env.REACT_APP_API_URL}/cidades/origem`)
            .then(res => setOrigins(res.data))
            .catch(err => console.log(err.response.data))
    }, [])
    useEffect(() => {
        if (setHospedagensList) {
            handleSelectionHospedagem(citys.destiny, setHospedagensList, minPrice, maxPrice)
        }
        if (setPassagensList) {
            handleSelectionPassagem(citys.destiny, citys.origin, "o", setPassagensList, minPrice, maxPrice)
            handleSelectionPassagem(citys.origin, citys.destiny, "d", setPassagensList, minPrice, maxPrice)
        }
    }, [att])
    if (!page) {
        return (<></>)
    }
    if ((!destinys || !origins) && page.endsWith('/passagem')) {
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
    } else if ((!destinys) && page.endsWith('/hospedagem')) {
        return (<Filters>
            <ChooseCity>
                <label>Selecione a cidade de destino:</label>
                <select>
                </select>
            </ChooseCity>
        </Filters>)
    } else if (page.endsWith('/hospedagem')) {
        return (
            <Filters>
                <ChooseCity>
                    <label>Selecione a cidade de destino:</label>
                    <select onChange={(e) => {
                        setCitys({ ...citys, destiny: e.target.value })
                        handleSelectionHospedagem(e.target.value, setHospedagensList, minPrice, maxPrice)
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
                    handleSelectionPassagem(citys.destiny, e.target.value, "o", setPassagensList, minPrice, maxPrice)
                }}>
                    <option></option>
                    {origins.map((c) => <option key={c.id} value={c.id}>{c.nome}</option>)}

                </select>
            </ChooseCity>
            <ChooseCity>
                <label>Selecione a cidade de destino:</label>
                <select onChange={(e) => {
                    setCitys({ ...citys, destiny: e.target.value })
                    handleSelectionPassagem(citys.origin, e.target.value, "d", setPassagensList, minPrice, maxPrice)
                }}>
                    <option></option>
                    {destinys.map((c) => <option key={c.id} value={c.id}>{c.nome}</option>)}
                </select>
            </ChooseCity>
        </Filters>
    )
}
