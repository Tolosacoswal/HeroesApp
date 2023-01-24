import {  Navigate, useNavigate, useParams } from "react-router-dom"
import { getHeroById } from "../helpers";



import"bootstrap/dist/css/bootstrap.min.css"
import { Button } from "react-bootstrap";
import { useMemo } from "react";

export const HeroesPages = () => {

  const{id}= useParams();
const navigate = useNavigate();

const hero = useMemo( ()=> getHeroById(id),[id]) ;

const onNavigateReturn =()=>{
navigate(-1);
}

if(!hero){
  return <Navigate to="/marvel"/>
}

  return (
    <div className="row m-5">
      <div className="col-4">
        <img 
        src={`/assets/heroes/${id}.jpg`}
        alt={hero.superhero} 
        className="img-thumbnail  animate__animated animate__fadeInRight"
        />
      </div>
      <div className="col-8">
        <h3>{hero.superhero}</h3>
        <ul className="list-group list-group-flush">
          <li className="list-group list-group-right"><h5>Alter ego: </h5>{hero.alter_ego}</li>
          <li className="list-group list-group"><h5>Publisher: </h5>{hero.publisher}</li>
          <li className="list-group list-group"><h5>First appearance: </h5>{hero.first_appearance}</li>
        </ul>
        <h5 className="mt-4">Characters</h5>
        <p>{hero.characters}</p>
        <Button 
        variant="btn btn-primary"
        onClick={onNavigateReturn}
        >Regresar</Button>
        
        
      </div>
    </div>
    
  )
}
