import React from 'react';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Team from './components/Team/Team';
import Services from './components/Services/Services';
import Clients from './components/Clients/Clients';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Team />
      <Services />
      <Clients />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
