import React, { useEffect, useState } from "react";
import Header from "./Header";
import {Link} from "react-router-dom";
import Footer from "./Footer";


const DisplayPrescriptions = ()=>{

    const [prescriptionsData, setPrescriptionsData] = useState([]);


  
    useEffect(() => {
      fetch("http://localhost:3001/api/prescriptions")
        .then((prescriptionsDataJson) => prescriptionsDataJson.json())
        .then((prescriptionsDataJs) => {
          setPrescriptionsData(prescriptionsDataJs.data);
        });
    }, []);

    return (
        <>
          <Header />
          <h1>Liste des ordonnances</h1>
          {prescriptionsData.map((e) => {
            return (
              <div key={e.id}>
                <h2>Ordonnance</h2>
                <p>Médicament : {e.medicine_name}</p>
                <p>Dosage : {e.dosage}</p>
                <p>Fréquence: {e.frequency}</p>
                <p>Durée: {e.duration}</p>
                <Link to={`/prescription/${e.id}`}>Voir l'ordonnance</Link>             
              </div>
            );
        })}
           <Footer/>
      </>
      )
    }
    
export default DisplayPrescriptions;