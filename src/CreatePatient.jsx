import Header from "./Header";


const CreatePatient = ()=>{
  const handleSubmit=(event)=>{
    event.preventDefault();

    const first_name = event.target.first_name.value;
    const last_name = event.target.last_name.value;
    const birth_date = event.target.birth_date.value;
    const email = event.target.email.value;

    fetch("http://localhost:3001/api/patients", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        first_name: first_name,
        last_name: last_name,
        birth_date: birth_date,
        email: email,
      })
    })
    .then((response) => {
      if (response.status === 200) {
        console.log("patient créé");
      } else {
        console.log("erreur");
      }
    });
  };

  
  return (
    <div>
    <Header/>
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
      <button type="submit">submit</button>
    </form>
    </div>
  )
}

export default CreatePatient;