import { useState } from "react";
import { Routes, Route } from 'react-router-dom';
import NavSection from './components/Nav';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import Profile from './components/Profile';

function App() {
  const [currentUser, setCurrentUser] = useState("");

  return (
    <div className="App">
        <NavSection />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="login" element={<Login setCurrentUser={setCurrentUser} />} />
          <Route path="signup" element={<Signup setCurrentUser={setCurrentUser} /> } />
          <Route path="me" element={<Profile currentUser={currentUser} /> } />
        </Routes>
    </div>
  );
}

export default App;
