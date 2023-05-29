import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/homePage/HomePage";
import PassagemPage from "./pages/PassagemPage/PassagemPage";
import HospedagemPage from "./pages/HospedagemPage/HospedagemPage";
import { HospedagemListContext, PassagensListContext } from "./context/lists";
import { useState } from "react";


function App() {
  const [passagensList, setPassagensList] = useState()
  const [hospedagensList, setHospedagensList] = useState()
  return (
    <PassagensListContext.Provider value={{passagensList, setPassagensList}}>
      <HospedagemListContext.Provider value={{hospedagensList, setHospedagensList}}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/passagem" element={<PassagemPage />} />
            <Route path="/hospedagem" element={<HospedagemPage />} />
          </Routes>
        </BrowserRouter>
      </HospedagemListContext.Provider>
    </PassagensListContext.Provider>
  );
}

export default App;
