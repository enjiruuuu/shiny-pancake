import './styles/app.css';
import './styles/button.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from './views/LoginPage';
import DashboardPage from './views/DashboardPage';
import TripDetails from './views/TripDetails';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />}></Route>
          <Route path="/dashboard" element={<DashboardPage />}></Route>
          <Route path="/trip/:id" element={<TripDetails />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
