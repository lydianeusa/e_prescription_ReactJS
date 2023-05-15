import {Link} from "react-router-dom";
import Header from "./Header"

const Pharmacy =()=>{
  return(
    <>
    <Header/>
    <Link to="/find-patient/">Trouver un patient</Link>
    </>
  )
}

export default Pharmacy;