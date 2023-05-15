import Header from "./Header";
import { useEffect, useState } from "react";

const SearchPatient = () => {
  const [patient, setPatient] = useState(null);
  const [searchPatient, setSearchPatient] = useState("");

  useEffect(() => {
    let apiUrl = "http://localhost:3001/api/patients";
    if (searchPatient) {
      apiUrl += `?search=${encodeURIComponent(searchPatient)}`;
    }

    fetch(apiUrl, {
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.data.length > 0) {
          setPatient(data.data[0]);
        } else {
          setPatient(null);
        }
      });
  }, [searchPatient]);

  return (
    <>
      <Header />
      <input
        type="text"
        value={searchPatient}
        onChange={(e) => setSearchPatient(e.target.value)}
        placeholder="Chercher patient"
      />
      {searchPatient && patient ? (
        <div key={patient.id}>
          <p>{patient.last_name}</p>
          <p>{patient.first_name}</p>
          <p>{patient.birth_date}</p>
        </div>
      ) : (
        <p>Pas de patient trouvé</p>
      )}
    </>
  );
};

export default SearchPatient;

  

   
