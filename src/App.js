import Navbar from "./components/NavBar/NavBar";
import ProfileCard from "./components/Cards/ProfileCard";
import CharizardImg from "./Img/Charizard.png"
import BlastoiseImg from "./Img/Blastoise.png"
import VenusaurImg from "./Img/Venusaur.png"


function App(){
    return (
						<div>
							<Navbar/>
							<h1>Pokémon</h1>

							<ProfileCard titulo="Charizard" tipo="Fuego" img={CharizardImg}/>
							<ProfileCard titulo="Blastoise" tipo="Agua" img={BlastoiseImg}/>
							<ProfileCard titulo="Venusaur" tipo="Planta" img={VenusaurImg}/>

						</div>
		)
}

export default App;
