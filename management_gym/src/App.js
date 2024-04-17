import logo from './logo.svg';
import './App.css';
import SignInSide from '../src/login/SignInSide'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <SignInSide />
      <Router>
        <Routes>
          <Route path="/">
            <Route index element={<SignInSide />}></Route>
            {/* <Route path="home" element={<Home />}></Route> */}


          </Route>
        </Routes>
      </Router>
      {/*  <Link to="/">Home</Link> */}
    </div>
  );
}

export default App;
