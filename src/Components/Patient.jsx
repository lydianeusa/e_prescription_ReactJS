import {Link} from "react-router-dom";
import Header from "./Header"
import Footer from "./Footer";

const Patient= () => {
  return (
    <>
    <Header/>
    <main>
        <ul>
          <li><Link to="/physicianslist/">Liste des médecins</Link></li>
          <li><Link to="/pharmacieslist">Liste des pharmacies</Link></li>
        </ul>
    </main>
    <Footer/>
    </>
  )
};

export default Patient;