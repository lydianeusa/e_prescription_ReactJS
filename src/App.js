import {BrowserRouter,Route,Routes} from "react-router-dom";

import Home from "./Home"
import Physician from "./Physician"
import Pharmacy from "./Pharmacy"
import Patient from "./Patient"

import DisplayPhysicians from "./DisplayPhysicians";
import DisplayPharmacies from "./DisplayPharmacies";
import DisplayPatients from "./DisplayPatients";
import DisplayPrescriptions from "./DisplayPrescriptions";

import CreatePrescription from "./CreatePrescription";
import UpdatePrescription from "./UpdatePrescription";
import PrescriptionDetail from "./PrescriptionDetail"

import CreatePatient from "./CreatePatient";
import UpdatePatient from "./UpdatePatient";
import PatientDetail from "./PatientDetail";







function App() {
  return (
    <div>
        <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/physician" element={<Physician />} />
                    <Route path="/pharmacy" element={<Pharmacy />} />
                    <Route path="/patient" element={<Patient />}/>

                    <Route path="/physicianslist" element={<DisplayPhysicians />} />
                    <Route path="/pharmacieslist" element={<DisplayPharmacies />} />
                    <Route path="/patientslist" element={<DisplayPatients />} />
                    <Route path="/prescriptionslist" element={<DisplayPrescriptions />} />

                    <Route path="/create-prescription" element={<CreatePrescription />}/>
                    <Route path="/prescription/:id/update" element={<UpdatePrescription />} />
                    <Route path="/prescription/:id" element={<PrescriptionDetail />} />

                    <Route path="/create-patient" element={<CreatePatient />}/>
                    <Route path="/patient/:id/update" element={<UpdatePatient />} />
                    <Route path="/patient/:id" element={<PatientDetail />} />
                </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;