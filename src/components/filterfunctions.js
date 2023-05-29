import axios from "axios"

export function handleSelectionPassagem(confereCity, value, cityValue, setPassagensList, min, max) {
    if (confereCity && cityValue === "o") {
        axios.get(`${process.env.REACT_APP_API_URL}/passagem/cidade/${confereCity}/${value}?min=0&max=10000000`)
            .then((res) => {
                setPassagensList(res.data)
                console.log(res.data)
            })
            .catch((err) => console.log(err.response.data))
    } else if (confereCity && cityValue === "d") {
        axios.get(`${process.env.REACT_APP_API_URL}/passagem/cidade/${value}/${confereCity}?min=${min?min:0}&max=${max?max:1000000}`)
            .then((res) => {
                setPassagensList(res.data)
                console.log(res.data)
            })
            .catch((err) => console.log(err.response.data))
    }
}

export function handleSelectionHospedagem(destiny, setHospedagensList, min, max){
    axios.get(`${process.env.REACT_APP_API_URL}/hospedagem/cidade/${destiny}?min=${min?min:0}&max=${max?max:1000000}`)
            .then((res) => {
                setHospedagensList(res.data)
                console.log(res.data)
            })
            .catch((err) => console.log(err.response.data))
}