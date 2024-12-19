import React from 'react';

function KeywordsInput({ keywords, setKeywords }) {
  const handleDelete = (index) => {
    const updatedKeywords = keywords.filter((_, i) => i !== index);
    setKeywords(updatedKeywords);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Introduzca palabra clave"
        onKeyDown={(e) => {
          if (e.key === 'Enter' && e.target.value.trim() !== '') {
            setKeywords([...keywords, e.target.value.trim()]);
            e.target.value = '';
          }
        }}
      />
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
