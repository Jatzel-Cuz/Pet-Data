// App.js
import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import Home from './Home';
import InformationPage from './InformationPage';
import AlimentationPage from './AlimentationPage';
import VeterinariesPage from './VeterinariesPage';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importar estilos de Bootstrap

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Route>
          <Route path="/" exact component={Home} />
          <Route path="/information" component={InformationPage} />
          <Route path="/alimentation" component={AlimentationPage} />
          <Route path="/veterinaries" component={VeterinariesPage} />
        </Route>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
