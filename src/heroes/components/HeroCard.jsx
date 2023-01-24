import { Link } from "react-router-dom";
import 'animate.css'
const CharactersByHeroId =({alter_ego,characters})=>{
if(alter_ego===characters)return (<></>);
return <p>{characters}</p> 
}
// otra opcion aparte de esta para dar un retorno 
// // return (alter_ego === characters)
// // ? <></>
// // : <p>{characters}</p>;
// }

export const HeroCard = ({
    id,
    superhero, 
    publisher, 
    alter_ego,
    first_appearance,
    characters,

}) => {

    const heroImagesUrl = `/assets/heroes/${id}.jpg`;
    // const CharactersByHero =<p>{characters}</p>
  return (
  <div className="col  animate__animated animate__fadeInRight">
    <div className=" ">
        <div className="row no-gutters">
            <div className="col-4 ">
                <img src={heroImagesUrl} alt={superhero} className="card-img " />
            </div>
            <div className="col-8">
                <div className="card-body   ">
                    <h5 className="card-tittle">{superhero}</h5>
                    <p className="card-text ">{alter_ego}</p>
                        {/* {
                                (alter_ego!==characters)&& charactersByHero
                        } */}
                       <CharactersByHeroId characters={characters} alter_ego={alter_ego}/>
                    <p className="">
                        <small className="text text-muted">{first_appearance}</small>
                    </p>
                        <Link to={`/hero/${id}`} >
                        Mas...</Link>
                </div>
            </div>
            
        </div>
    </div>
  </div>
  )
}


