import { Route, Routes } from "react-router-dom"
import "./assets/scss/style.scss"
import Main from "./components/Main"
import PokeCardDetail from "./components/PokeCardDetail"
import { HOME_PATH, POKEMON_PATH } from "./constants/path"
import MainLayout from "./layouts/MainLayout"
function App() {
  return (
    <>
      <Routes >
        <Route element={ <MainLayout /> } >
          <Route index path={ HOME_PATH } element={ <Main /> } />
          <Route path={ POKEMON_PATH } element={ <PokeCardDetail /> } />
        </Route>
      </Routes>
    </>
  )
}

export default App
