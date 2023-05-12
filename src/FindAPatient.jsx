// import React, { useEffect, useState } from "react";
import Header from "./Header";
// import { useParams } from "react-router-dom";

const FindAPatient = () => {

  const handleSubmit = (event) => { alert('it works!');
  event.preventDefault();}


//   const [patient, setPatient] = useState(null);

//   const { id } = useParams();

//   useEffect(() => {
//     fetch(`http://localhost:3001/api/patients/${id}`)
//       .then((responseJson) => responseJson.json())
//       .then((responseJs) => {
//         setPatient(responseJs.data);
//       });
//   }, [id]);



//   const first_name = event.target.first_name.value;
//   const last_name = event.target.last_name.value;
//   const birth_date = event.target.birth_date.value;
//   const email = event.target.email.value;
// }

  return (
    <>
        <Header />
  
          <>
            <h1>Trouver un patient :</h1>
            <form onSubmit={handleSubmit}>
              <div>
              <label htmlFor="first_name">Prénom</label>
                <input type="text" name="first_name"/>
              </div>
              <div>
              <label htmlFor="last_name">Nom</label>
                <input type="text" name="last_name"/>
              </div>
              <div>
              <label htmlFor="birth_date">Date de naissance</label>
                <input type="date" name="birth_date"/>
              </div>
              <div>
              <label htmlFor="email">Email</label>
                <input type="text" name="email"/>
              </div>
  
              <button type="submit">Trouver le patient</button>
            </form>
          </>
          </>
  )
}
;

export default FindAPatient;