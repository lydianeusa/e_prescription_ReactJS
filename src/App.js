import {BrowserRouter,Route,Routes} from "react-router-dom";

import Home from "./Home"
import Physician from "./Physician"
import Pharmacy from "./Pharmacy"
import Prescription from "./Prescription"

import DisplayPhysicians from "./DisplayPhysicians";
import DisplayPharmacies from "./DisplayPharmacies";

// import CreatePrescription from "./CreatePrescritpion";
import CreatePatient from "./CreatePatient";

import UpdatePatient from "./UpdatePatient";

import FindAPatient from "./FindAPatient";
import FindAPhysician from "./FindAPhysician";
import FindAPharmacy from "./FindAPharmacy";



function App() {
  return (
    <div>
        <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/prescription" element={<Prescription />} />
                    <Route path="/physician" element={<Physician />} />
                    <Route path="/pharmacy" element={<Pharmacy />} />
                    <Route path="/physicianslist" element={<DisplayPhysicians />} />
                    <Route path="/pharmacieslist" element={<DisplayPharmacies />} />
{/* 
                    // <Route path="/create-prescription" element={<CreatePrescription/>}/> */}
                    <Route path="/create-patient" element={<CreatePatient/>}/>
                    <Route path="/patient/:id/update" element={<UpdatePatient />} />
                    <Route path="/find-patient/" element={<FindAPatient />} />
                    <Route path="/find-physician/" element={<FindAPhysician />} />
                    <Route path="/find-pharmacy/" element={<FindAPharmacy/>} />
                </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;