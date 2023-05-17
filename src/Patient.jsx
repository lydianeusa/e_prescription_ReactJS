import {Link} from "react-router-dom";
import Header from "./Header"
import Footer from "./Footer";

const Patient= () => {
  return (
    <>
    <Header/>
        <ul>
          <li><Link to="/physicianslist/">Liste des médecins</Link></li>
          <li><Link to="/pharmacieslist">Liste des pharmacies</Link></li>
        </ul>
    <Footer/>
    </>
  )
};

export default Patient;