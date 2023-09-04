import { Route, Routes } from "react-router-dom";
import LoginPage from "../LoginPage";
import RegistrationPage from "../RegistrationPage";
import IncidentForm from "../IncidentForm";
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from "../dashboard";
import IncidentList from "../incidentlist";
import SupDash from "../SupDash";
import IncidentDetails from "../SupIncident";
import Incident from "../EmpIncident";

export const AuthComponent = () => {
    
        return(
            <>
                <ToastContainer/>
                <Routes>
                    <Route exact path ="/" element={<LoginPage/>}/>
                    <Route exact path ="/register" element={<RegistrationPage/>}/>
                    <Route exact path="/employee/incident_form" element={<IncidentForm/>}/>
                    <Route exact path="/employee/dashboard/:email" element={<Dashboard/>}/>
                    <Route exact path="/employee/incident_list/:email" element={<IncidentList/>}/>
                    <Route exact path="/admin/dashboard" element={<SupDash/>}/>
                    <Route exact path="/admin/incident_assignment" element={<IncidentDetails/>}/>
                    <Route exact path="/support/incident" element={<Incident/>}/>
                </Routes>  
            </>    
        )
   
}