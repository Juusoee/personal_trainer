import './App.css';
import React from "react";
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from './Components/NavBar';
import Home from './Components/Home';
import Customers from './Components/Customer';
import Trainings from './Components/Training';

function App() {
  return (
    <Container fluid>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/training" element={<Trainings />} />
          <Route path="/customers" element={<Customers />} />
        </Routes>
      </BrowserRouter>
    </Container>
  );
}

export default App;
