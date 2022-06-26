
import Navbaare from './Components/Navbaare';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router} from 'react-router-dom';
import ListRoutes from "./Routes/ListRoutes";
import 'bootstrap/dist/css/bootstrap.min.css';
import {ToastContainer} from "react-toastify"
function App() {
  return (
    <div className="App">
      
    <Router>
<Navbaare/>
<ListRoutes/>
<ToastContainer/>
</Router>

    </div>
  );
}

export default App;
