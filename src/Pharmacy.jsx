import {Link} from "react-router-dom";
import Header from "./Header"

const Pharmacy =()=>{
  return(
    <>
    <Header/>
    <Link to="/find-patient/">Trouver un patient</Link>
    <li><Link to="/find-prescription">Trouver une ordonnance</Link></li>
    </>
  )
}

export default Pharmacy;