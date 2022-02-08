import logo from './logo.svg';
import './App.css';
import LoginPage from './components/LandingPage/LoginPage';
import SignupEmployee from './components/LandingPage/signupEmployee';
import { Routes, Route, Link } from "react-router-dom";
import SignupEmployer from './components/LandingPage/signupEmployer';

function App() {
  return (
    <div className="App">
        <Routes>
        <Route path="/" element={ <LoginPage/> } />
        <Route path="/registerEmployee" element={ <SignupEmployee/> } />
        <Route path="/registerEmployer" element= { <SignupEmployer/> }  />

      </Routes>
    </div>
  );
}

export default App;
