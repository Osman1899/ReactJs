// src/App.js
import React from 'react';
import { Card } from 'react-bootstrap';
import Name from './Name';
import Price from './Price';
import Description from './Description';
import Image from './Image';

import 'bootstrap/dist/css/bootstrap.min.css';

// Variable pour le prénom
const firstName = 'OSMAN';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="https://preview.thenewsmarket.com/Previews/ADID/StillAssets/920x690/640636_v2.jpg" /> {/* Remplacer 'placeholder.jpg' par votre URL d'image */}
          <Card.Body>
            <Name />
            <Price />
            <Description />
            <button className="btn btn-primary">Acheter</button>
          </Card.Body>
        </Card>
        <p>Bonjour, {firstName ? `${firstName} !` : 'là ! (Vous pouvez fournir votre nom en tant que variable au-dessus du composant racine)'}</p>
      </header>
    </div>
  );
}

export default App;
