import {Link} from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/patient">Patient</Link></li>
          <li><Link to="/physician">Médecin</Link></li>
          <li><Link to="/pharmacy">Pharmacie</Link></li>
        </ul>
      </nav>
    </header>
  )
};

export default Header;