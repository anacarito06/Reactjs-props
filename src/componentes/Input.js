import React, { useState } from 'react';

function Input() {
  
  const [inputValue, setInputValue] = useState('');
  const [result, setResult] = useState('');

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  // Función para verificar si el texto es capicúa
  const analyzeText = () => {
    const normalizedText = inputValue.replace(/[\W_]/g, '').toLowerCase();
    const isPalindrome = normalizedText === normalizedText.split('').reverse().join('');
    
    if (isPalindrome) {
      setResult('El texto es capicúa');
    } else {
      setResult('El texto no es capicúa');
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Analizador de Capicúas</h1>
      <input 
        type="text" 
        value={inputValue} 
        onChange={handleChange} 
        placeholder="Escribe aquí" 
        style={{ padding: '10px', fontSize: '16px' }}
      />
      <button 
        onClick={analyzeText} 
        style={{ marginLeft: '10px', padding: '10px 20px', fontSize: '16px' }}
      >
        Analizar
      </button>
      <p style={{ marginTop: '20px', fontSize: '18px', fontWeight: 'bold' }}>{result}</p>
    </div>
  );
}

export default Input;