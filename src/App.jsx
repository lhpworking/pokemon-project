import { lazy, Suspense } from "react"
import { Route, Routes } from "react-router-dom"
import "./assets/scss/style.scss"

import { HOME_PATH, POKEMON_PATH } from "./constants/path"
import MainLayout from "./layouts/MainLayout"

const Main = lazy(() => import("./components/Main"))
const PokeCardDetail = lazy(() => import("./components/PokeCardDetail"))

function App() {
  return (
    <>
      <Suspense fallback={ <p>Loading...</p> }>
        <Routes >
          <Route element={ <MainLayout /> } >
            <Route index path={ HOME_PATH } element={ <Main /> } />
            <Route path={ POKEMON_PATH } element={ <PokeCardDetail /> } />
          </Route>
        </Routes>
      </Suspense>
    </>
  )
}

export default App
