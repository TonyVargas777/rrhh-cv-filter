import React, { useState } from 'react';

function KeywordsInput({ keywords, setKeywords }) {
  const [inputValue, setInputValue] = useState('');

  const handleAddKeyword = () => {
    if (inputValue.trim() !== '' && !keywords.includes(inputValue.trim())) {
      setKeywords([...keywords, inputValue.trim()]);
      setInputValue(''); // Limpia el campo de entrada
    }
  };

  const handleDelete = (index) => {
    const updatedKeywords = keywords.filter((_, i) => i !== index);
    setKeywords(updatedKeywords);
  };

  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
        <input
          type="text"
          placeholder="Introduzca palabra clave"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              handleAddKeyword();
            }
          }}
          style={{
            flex: 1,
            padding: '8px',
            fontSize: '16px',
            border: '1px solid #ccc',
            borderRadius: '4px',
          }}
        />
        <button
          onClick={handleAddKeyword}
          style={{
            marginLeft: '10px',
            marginTop: '0px',
            padding: '8px 10px',
            fontSize: '16px',
            whiteSpace: 'nowrap',
            border: '1px solid black',
            borderRadius: '4px',
            backgroundColor: '#ccc',
            cursor: 'pointer',
            maxWidth: 'fit-content',
          }}
        >
          INGRESAR
        </button>
      </div>
      <div>
        {keywords.map((keyword, index) => (
          <span key={index} style={{ margin: '5px', display: 'inline-flex', alignItems: 'center' }}>
            {keyword}
            <button onClick={() => handleDelete(index)} style={{ marginLeft: '5px' }}>
              🗑️
            </button>
          </span>
        ))}
      </div>
    </div>
  );
}

export default KeywordsInput;
