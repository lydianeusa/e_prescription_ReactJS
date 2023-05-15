import {Link} from "react-router-dom";
import Header from "./Header"

const Patient= () => {
  return (
    <>
    <Header/>
        <ul>
          <li><Link to="/find-physician/">Trouver un médecin</Link></li>
          <li><Link to="/find-pharmacy/">Trouver une pharmacie</Link></li>
        </ul>
    </>
  )
};

export default Patient;