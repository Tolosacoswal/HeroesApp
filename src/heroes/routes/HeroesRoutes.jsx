import { Navigate, Route, Routes } from "react-router-dom"
import { Navbar } from "../../InterfazGrafica-ui"
import { DcPage, HeroesPages, MarvelPage, SearchPages, VillanosDc, VillanosMarvel } from "../pages"



export const HeroesRoutes = () => {
  return (
    <>
    <Navbar/>
    <div className="container"  >
    <Routes>
        <Route path="marvel" element={ <MarvelPage/> } />
        <Route path="dc" element={ <DcPage/> } />
        <Route path="villanosdc" element={ <VillanosDc/> } />
        <Route path="villanosmarvel" element={ <VillanosMarvel/> } />
        
        
        <Route path="search" element={<SearchPages/>}/>
        <Route path="hero/:id" element={<HeroesPages/>}/>

        <Route path="/" element={ <Navigate to="/dc" /> } />
        
        
        
        
        

        

      </Routes>
      </div>
    </>
  )
}
