import { NavBar } from "./Componentes/NavBar.jsx"
import { ItemListContainer } from "./Componentes/ItemListContainer.jsx"
import './App.css'

function App() {


  return (
    <>
      <NavBar />
        <ItemListContainer mensaje={"Bienvenidos al primer ecommerce de Fabián Hirigoyen"}/>
    </>
  )
}

export default App
