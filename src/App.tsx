import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from './views/LoginPage';
import DashboardPage from './views/DashboardPage';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />}></Route>
          <Route path="/dashboard" element={<DashboardPage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
