
import { useLocation, useNavigate } from "react-router-dom";
import queryString from "query-string"
import { useFormulario } from "../../hook/useForm"
import {HeroCard} from "../components/index"
import { getHeroesByName } from "../helpers";


export const SearchPages = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const {q =''} = queryString.parse(location.search);
  const heroes = getHeroesByName(q);

  const showSearch = ( q.length === 0)
  const showError = ( q.length > 0)&& heroes.length === 0;

  
  const {searchText,onInputChangue}= useFormulario({
    searchText:q
  });

  const onSearchSubmit =(event)=>{
    event.preventDefault();
    // if (searchText.trim().length <= 1)return; 
      navigate(`?q=${searchText}`);
    
    
  }
  return (
   <>
   <h1>Buscador</h1>
   <hr />
   <div className="row">
    
   
   <div className="col-5">
    <h4>Buscador</h4>
    <hr />
    <form onSubmit={onSearchSubmit} >
      <input 
      type="text"
      placeholder="Search a hero" 
      className="form-control"
      name="searchText"
      autoComplete="off"
      value={searchText}
      onChange={onInputChangue}
      />
        <button className="btn btn-outline-primary mt-2">
        Buscador
        </button>
    </form>
   </div>
   <div className="col-7">
    <h4>Resultado</h4>
    <hr />
      {/* {
        (q=== '')
        ? <div className="alert alert-primary ">Search a hero</div>
        : ( heroes.length === 0) 
        &&<div className="alert alert-danger">No hero with <b className="search">{q}</b></div>
      }
      */}
    <div className="alert alert-primary " style={{display: showSearch  ? '' : 'none'}}>Search a hero</div>
    <div className="alert alert-danger" style ={{display: showError ? '': 'none'}}>No hero with <b className="search">{q}</b></div>
    
    {
      heroes.map(hero =>(
         <HeroCard key={hero.id}{...hero}/> 
      ))
    }
    
    </div>
   </div>
   </>
  )
}
