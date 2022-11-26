import './App.css';
import Login from './components/Login';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Forgotpassword from './components/Forgotpassword';
import Register from './components/Register';

function App() {
  return (
    <Router>
    <div className="container">
      <Routes>
        <Route exact path="/login" element={<Login heading='Login' description='Welcome back please enter your details.' extradesc="Don't have an account? " extradescmore='Sign up'/>}>
        </Route>
        <Route exact path="/register" element={<Register heading='Create an account' description="Let's get started with your 30 day free trial." extradesc="Already have an account ? " extradescmore='Login'/>}>
        </Route>
        <Route exact path="/forgotpassword" element={<Forgotpassword heading='Forgot Your Password?' description='Please confirm your email address below and we will send you a verification code' extradesc="Already have an account ? " extradescmore='Login'/>}>
        </Route>
        <Route exact path="/" element={<Login heading='Login' description='Welcome back please enter your details.' extradesc="Don't have an account? " extradescmore='Sign up'/>}>
        </Route>
      </Routes>
    </div>
    </Router>
  );
}

export default App;
