import logo from './logo.svg';
import './App.css';
import SignInSide from '../src/login/SignInSide'
import Dashboard from '../src/dashboard/Dashboard'
import { LoginOAuth } from './login/LoginOAuth';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google'
import { Index } from './erebil';
function App() {
  return (
    <div className="App">
      <GoogleOAuthProvider clientId="960710479294-vn4an88b2puhbpbjcpg6g273c9l1amu4.apps.googleusercontent.com">
        <Router>
          <Routes>
            {/* <Route path="/" element={<LoginOAuth />} /> */}
            <Route path="/" element={<Index />} />
            <Route path="home" element={<SignInSide />} />
            <Route path="dashboard" element={<Dashboard />} />
          </Routes>
        </Router>
      </GoogleOAuthProvider>
    </div >
  );
}

export default App;
