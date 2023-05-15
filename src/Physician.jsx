import {Link} from "react-router-dom";
import Header from "./Header"

const Physician =()=>{
  return(
    <>
    <Header/>
    <ul>
      <li><Link to="/find-pharmacy/">Trouver une pharmacie</Link></li>
      <li><Link to="/find-patient/">Trouver un patient</Link></li>
      <li><Link to="/create-patient">Créer un patient</Link></li>
    </ul>
    </>
  )
}

export default Physician;