import React, { useState } from 'react';
import BaseImage from './components/BaseImage';
import OverlayOptions from './components/OverlayOptions';
import './App.css';

function App() {
  const [selectedHolding, setSelectedHolding] = useState(null);
  const [selectedHat, setSelectedHat] = useState(null);
  const [selectedBackground, setSelectedBackground] = useState(null);

  return (
    <div className="container">
      <BaseImage holding={selectedHolding} hat={selectedHat} background={selectedBackground} />
      <OverlayOptions
        setSelectedHolding={setSelectedHolding}
        setSelectedHat={setSelectedHat}
        setSelectedBackground={setSelectedBackground}
      />
    </div>
  );
}

export default App;
