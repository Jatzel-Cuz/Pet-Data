import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importar estilos de Bootstrap

function AlimentationPage() {
  return (
    <div className="container">
      <h2 className="mt-5 mb-3">Alimentation Page</h2>

      <div className="row">
        <div className="col">
          <div className="container">
            <h2>Alimentación para Perros</h2>
            <div className="table-responsive">
              <table className="table">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Alimento</th>
                    <th>Beneficio</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Carne magra (pollo, pavo, carne de res magra)</td>
                    <td>Proporciona proteínas de alta calidad que ayudan al crecimiento muscular y mantienen la salud general del perro</td>
                  </tr>
                  {/* Otras filas de la tabla de alimentación para perros */}
                </tbody>
              </table>
            </div>
          </div>

          <div className="container mt-5">
            <h2>Qué No Debe Consumir</h2>
            <div className="table-responsive">
              <table className="table">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Alimento</th>
                    <th>Por Qué</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Chocolate</td>
                    <td>Contiene teobromina y cafeína, que son estimulantes que pueden causar vómitos, diarrea, ritmo cardíaco anormal, convulsiones e incluso la muerte en dosis altas</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Aguacate</td>
                    <td>Contiene persina, una sustancia que puede ser tóxica para los perros y causar problemas digestivos y cardíacos</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>Uvas y pasas</td>
                    <td>Pueden causar insuficiencia renal aguda en algunos perros, incluso en cantidades pequeñas</td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>Cebollas y ajo</td>
                    <td>Contienen compuestos que pueden dañar los glóbulos rojos de los perros y causar anemia.</td>
                  </tr>
                  <tr>
                    <td>5</td>
                    <td>Productos lácteos</td>
                    <td>Proporcionan vitaminas, antioxidantes y fibra que son beneficiosos para la salud general, el sistema inmunológico y la salud digestiva del perro</td>
                  </tr>
                  <tr>
                    <td>6</td>
                    <td>Huesos</td>
                    <td>Los huesos pueden astillarse y causar obstrucciones, perforaciones o cortes en el tracto gastrointestinal de los perros</td>
                  </tr>
                  <tr>
                    <td>7</td>
                    <td>Alcohol</td>
                    <td>El alcohol puede causar intoxicación, depresión del sistema nervioso central, vómitos, diarrea, dificultad para respirar e incluso la muerte en los perros</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AlimentationPage;
