import logo from './logo.svg';
import './App.css';
import Home from './components/Pages/Home.js';
import {Routes,Route } from 'react-router-dom';
import Login from "./components/Auth/login.js"
import NotFound from "./NotFound.js"

function App() {
  return (
    <>
   
   <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/login" element={<Login />} />
  <Route path="*" element={<NotFound />} /> {/* Fallback route */}

</Routes>


    </>
  );
}

export default App;
