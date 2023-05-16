import {BrowserRouter,Route,Routes} from "react-router-dom";

import Home from "./Home"
import Physician from "./Physician"
import Pharmacy from "./Pharmacy"
import Prescription from "./Prescription"
import Patient from "./Patient"

import DisplayPhysicians from "./DisplayPhysicians";
import DisplayPharmacies from "./DisplayPharmacies";

import CreatePrescription from "./CreatePrescription";
import CreatePatient from "./CreatePatient";

import UpdatePatient from "./UpdatePatient";
import UpdatePrescription from "./UpdatePrescription";

import SearchPatient from "./SearchPatient";
import FindAPhysician from "./FindAPhysician";
import FindAPharmacy from "./FindAPharmacy";
import FindAPrescription from "./FindAPrescription";




function App() {
  return (
    <div>
        <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/prescription" element={<Prescription />} />
                    <Route path="/physician" element={<Physician />} />
                    <Route path="/pharmacy" element={<Pharmacy />} />
                    <Route path="/patient" element={<Patient />}/>
                    <Route path="/physicianslist" element={<DisplayPhysicians />} />
                    <Route path="/pharmacieslist" element={<DisplayPharmacies />} />

                    <Route path="/create-prescription" element={<CreatePrescription />}/>
                    <Route path="/prescription/:id/update" element={<UpdatePrescription />} />
                    <Route path="/create-patient" element={<CreatePatient />}/>
                    <Route path="/patient/:id/update" element={<UpdatePatient />} />
                    <Route path="find-patient/" element={<SearchPatient />} />
                    <Route path="/find-physician/" element={<FindAPhysician />} />
                    <Route path="/find-pharmacy/" element={<FindAPharmacy/>} />
                    <Route path="/find-prescription/" element={<FindAPrescription/>} />
                </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;