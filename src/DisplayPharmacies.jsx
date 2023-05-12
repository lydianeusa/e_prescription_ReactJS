import React, { useEffect, useState } from "react";
import Header from "./Header";


const DisplayPharmacies = ()=>{

    const [pharmaciesData, setPharmaciesData] = useState([]);

  
    useEffect(() => {
      fetch("http://localhost:3001/api/pharmacies")
        .then((pharmaciesDataJson) => pharmaciesDataJson.json())
        .then((pharmaciesDataJs) => {
          setPharmaciesData(pharmaciesDataJs.data);
        });
    }, []);

    return (
      <>
      <Header />
      <h1>Liste des Pharmacies</h1>

      {pharmaciesData.map((pharmacy) => {
        return (
          <div key={pharmacy.id}>
            <h2>{pharmacy.name}</h2>
            <p>Adresse : {pharmacy.address+" "+pharmacy.zipcode+" "+pharmacy.city}</p>
            <p>Téléphone : {pharmacy.phone_number}</p>
            <p>Email : {pharmacy.email}</p>

            {/* <Link to={`/physicians/${physician.id}`}>Voir le médecin</Link> */}
            {/* <Link to={`/physicians/${physician.id}/update`}>modifier le coworking</Link> */}
          </div>
        );
      })}
    </>
      )
    }
    
export default DisplayPharmacies;