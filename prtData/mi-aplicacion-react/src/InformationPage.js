
import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importar estilos de Bootstrap

function InformationPage() {
  const [dogBreeds, setDogBreeds] = useState([]);

  useEffect(() => {
    // Cargar datos de razas de perros desde un archivo JSON o una API
    fetch('dogs.json')
      .then(response => response.json())
      .then(data => setDogBreeds(data))
      .catch(error => console.error('Error loading dog breeds:', error));
  }, []);

  return (
    <div className="container">
      <h2 className="mt-5 mb-3">Información sobre Razas de Perros</h2>
      <div className="row">
        {dogBreeds.map(breed => (
          <div className="col-lg-4 mb-4" key={breed.breed}>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{breed.breed}</h5>
                <p className="card-text">Descripción: {breed.description}</p>
                <p className="card-text">Características: {breed.characteristics}</p>
                <p className="card-text">Requisitos de Alimentación: {breed.foodRequirements}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default InformationPage;
