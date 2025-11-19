import React from "react";
import Valeur from "./Valeur";
import PasIncrementation from "./PasIncrementation";
import PasDecrementation from "./PasDecrementation";
import { useState } from "react";
function Counter() {
  const [counter, setCounter] = useState(0);
  const [pasInc, setPasInc] = useState(2);
  const [pasDec, setPasDec] = useState(2);

  const incrementer = () => {
    setCounter(counter + pasInc);
  };

  const decrementer = () => {
    setCounter(counter - pasDec);
  };

  const initialiser = () => {
    setCounter(0);
  };

  return (
    <div style={{
      maxWidth: '600px',
      margin: '50px auto',
      padding: '30px',
      backgroundColor: '#ffffff',
      borderRadius: '15px',
      boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
      fontFamily: 'Arial, sans-serif'
    }}>
      <h1 style={{ textAlign: 'center', color: '#333' }}>Counter App</h1>
      
      <Valeur counter={counter} />
      
      <div style={{ 
        display: 'flex', 
        gap: '10px', 
        justifyContent: 'center',
        marginBottom: '30px'
      }}>
        <button 
          onClick={incrementer}
          style={actionButtonStyle('#9C27B0')}
        >
          Incrémenter
        </button>
        <button 
          onClick={decrementer}
          style={actionButtonStyle('#E91E63')}
        >
          Décrémenter
        </button>
        <button 
          onClick={initialiser}
          style={actionButtonStyle('#607D8B')}
        >
          Initialiser
        </button>
      </div>

      <PasIncrementation 
        pasInc={pasInc}
        onChange={setPasInc}
      />
      
      <PasDecrementation 
        pasDec={pasDec}
        onChange={setPasDec}
      />
    </div>
  );
};

const actionButtonStyle = (color) => ({
  padding: '12px 24px',
  fontSize: '16px',
  cursor: 'pointer',
  border: 'none',
  borderRadius: '5px',
  backgroundColor: color,
  color: '#fff',
  fontWeight: 'bold',
  transition: 'all 0.3s',
  boxShadow: '0 2px 4px rgba(0,0,0,0.2)'
});

export default Counter;