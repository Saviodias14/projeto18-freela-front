import axios from "axios"

export function handleSelectionPassagem(confereCity, value, cityValue, setPassagensList) {
    if (confereCity && cityValue === "o") {
        axios.get(`${process.env.REACT_APP_API_URL}/passagem/cidade/${confereCity}/${value}?min=0&max=10000000`)
            .then((res) => {
                setPassagensList(res.data)
                console.log(res.data)
            })
            .catch((err) => console.log(err.response.data))
    } else if (confereCity && cityValue === "d") {
        axios.get(`${process.env.REACT_APP_API_URL}/passagem/cidade/${value}/${confereCity}?min=0&max=10000000`)
            .then((res) => {
                setPassagensList(res.data)
                console.log(res.data)
            })
            .catch((err) => console.log(err.response.data))
    }
}

export function handleSelectionHospedagem(destiny, setHospedagensList){
    axios.get(`${process.env.REACT_APP_API_URL}/hospedagem/cidade/${destiny}?min=0&max=10000000`)
            .then((res) => {
                setHospedagensList(res.data)
                console.log(res.data)
            })
            .catch((err) => console.log(err.response.data))
}