import React, { useEffect, useState } from "react";
import Header from "./Header";
import {Link} from "react-router-dom";
import Footer from "./Footer";


const DisplayPatients = ()=>{

    const [patientsData, setPatientsData] = useState([]);
  
    useEffect(() => {
      fetch("http://localhost:3001/api/patients")
        .then((patientsDataJson) => patientsDataJson.json())
        .then((patientsDataJs) => {
          setPatientsData(patientsDataJs.data);
        });
    }, []);

    return (
        <>
            <Header />
            <h1>Liste des Patients</h1>

            {patientsData.map((patient) => {
                return (
                <div key={patient.id}>
                    <h2>{patient.first_name +" "+patient.last_name}</h2>
                    <Link to={`/patient/${patient.id}`}>Voir le patient</Link>
                    <Footer/>
                </div>
                
                );
            })}
        </>
    )

}
    
export default DisplayPatients;