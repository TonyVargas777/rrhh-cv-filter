import React, { useState } from "react";
import KeywordsInput from "./components/KeywordsInput";
import FileUploader from "./components/FileUploader";
import { extractTextFromPDF } from "./utils/pdfUtils";
import { extractTextFromWord } from "./utils/wordUtils";
import jsPDF from "jspdf";

function App() {
  const [keywords, setKeywords] = useState([]);
  const [files, setFiles] = useState([]);
  const [filteredCVs, setFilteredCVs] = useState([]);
  const [isFiltering, setIsFiltering] = useState(false);

  const handleFilter = async () => {
    // Limpiar los resultados anteriores
    setFilteredCVs([]);
    setIsFiltering(true);

    const matchingFiles = [];

    for (const file of files) {
      let text = "";
      if (file.name.endsWith(".pdf")) {
        text = await extractTextFromPDF(file);
      } else if (file.name.endsWith(".docx")) {
        text = await extractTextFromWord(file);
      }

      // Verificar si todas las palabras clave coinciden de forma excluyente
      const keywordsLower = keywords.map((keyword) => keyword.toLowerCase());
      const fileTextLower = text.toLowerCase();
      const isMatch = keywordsLower.every((keyword) =>
        fileTextLower.includes(keyword)
      );

      if (isMatch) {
        matchingFiles.push(file.name);
      }
    }

    setFilteredCVs(matchingFiles);
    generatePDF(matchingFiles);
    setIsFiltering(false);
  };

  const generatePDF = (fileNames) => {
    const doc = new jsPDF();
    let yPosition = 10;
    const maxResultsPerPage = 28; // Ajusta este valor según la cantidad de resultados que caben en una página.

    doc.text("Listado de CVs Filtrados", 10, yPosition);
    yPosition += 10;

    for (let i = 0; i < fileNames.length; i++) {
      if (i > 0 && i % maxResultsPerPage === 0) {
        doc.addPage();
        yPosition = 10;
        doc.text("Listado de CVs Filtrados", 10, yPosition);
        yPosition += 10;
      }
      doc.text(`${i + 1}. ${fileNames[i]}`, 10, yPosition);
      yPosition += 10;
    }

    doc.save("CVs_Filtrados.pdf");
  };

  return (
    <div className="box">
      <h1>PDF AND WORD</h1>
      <h1>CV FILTER</h1>
      <FileUploader setFiles={setFiles} />
      <p>
        <strong>2.</strong> Ingrese las palabras clave en el campo de búsqueda.
      </p>
      <KeywordsInput keywords={keywords} setKeywords={setKeywords} />

      <p>
        <strong>3.</strong> Haga clic en el botón de <strong>Filtrar</strong>{" "}
        para procesar los documentos.
      </p>
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}
      >
        <button
          onClick={handleFilter}
          disabled={isFiltering}
          style={{
            width: "100px",
          }}
        >
          FILTRAR
        </button>
      </div>
      {isFiltering && (
        <div class="box-dots">
          <section class="dots-container">
            <div class="dot"></div>
            <div class="dot"></div>
            <div class="dot"></div>
            <div class="dot"></div>
            <div class="dot"></div>
          </section>
        </div>
      )}

      <p>
        <strong>4.</strong> Revise los resultados en pantalla que se exportan
        automáticamente a un archivo PDF.
      </p>
      <h3>Resultados:</h3>
      <ul>
        {filteredCVs.length > 0 ? (
          filteredCVs.map((cv, index) => <li key={index}>{cv}</li>)
        ) : (
          <li>No hay resultados positivos</li>
        )}
      </ul>
    </div>
  );
}

export default App;
