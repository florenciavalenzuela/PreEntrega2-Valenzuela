
import Componente1 from "./Components/Componente1"
import ItemListContainer from "./Components/ItemListContainer"
import NavBar from "./Components/navBar"

const App = () => {

  return (
  <>
    <NavBar/>
    <ItemListContainer greeting= {"Bienvenidos a tu centro de compras de Autos"}/>
    <Componente1/>
  </>  
  )     
}

export default App