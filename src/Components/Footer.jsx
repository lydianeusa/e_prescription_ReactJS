import "../Styles/Footer.css";

const Footer= () => {
  return (
    <footer>
              <div class="container">
            <div class="row">
                <div class="col-12 col-md-4">
                    <img src="img/e-ordo-12ter.png" alt=""/>
                </div>
                <div class="col-12 col-md-5 peinturebis">
                    <p>Peinture-Plomberie-Chauffage-Electricité-Maçonnerie-Platerie-Carrelage-Menuiserie-Parquet-Agencement-Etude et realisations de plans</p>
                </div>
                <div class="col-12 col-md-3">
                    <p>CONTACTEZ-NOUS</p>
                    <ul>
                        <li>43 rue Boursault</li>
                        <li>75017 Paris</li>
                        <li>01 40 05 94 10</li>
                        <li>info@e-prescription.fr</li>
                    </ul>
                    <div class="logo"> 
                        <a class="facebook" href="#"><i class="fa-brands fa-facebook"></i></a>
                        <a class="instagram" href="#"><i class="fa-brands fa-square-instagram"></i></a>
                    </div>
                </div>

                <div class="col-12 text-center">
                    © 2020 studio-creacom.fr Charlène Tavares - Mentions légales
                </div>
            </div>
        </div>
    </footer>
  )
};

export default Footer;