import logo from './logo.svg';
import './App.css';
import SignInSide from '../src/login/SignInSide'
import Dashboard from '../src/dashboard/Dashboard'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
        <Route path="/" element={<SignInSide />} />
          <Route path="home" element={<SignInSide />} />
          <Route path="dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
