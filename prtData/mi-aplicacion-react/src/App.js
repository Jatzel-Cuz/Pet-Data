// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import InformationPage from './pages/InformationPage';
import AlimentationPage from './pages/AlimentationPage';
import VeterinariesPage from './pages/VeterinariesPage';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importar estilos de Bootstrap

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/information" component={InformationPage} />
          <Route path="/alimentation" component={AlimentationPage} />
          <Route path="/veterinaries" component={VeterinariesPage} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
