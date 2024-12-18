import * as pdfjsLib from "pdfjs-dist";

// Configurar la ruta del worker desde la carpeta public
pdfjsLib.GlobalWorkerOptions.workerSrc = "/pdf.worker.min.mjs";

export const extractTextFromPDF = async (file) => {
  const reader = new FileReader();
  return new Promise((resolve, reject) => {
    reader.onload = async function () {
      try {
        const typedArray = new Uint8Array(this.result);
        const pdf = await pdfjsLib.getDocument(typedArray).promise;

        let fullText = "";
        for (let i = 1; i <= pdf.numPages; i++) {
          const page = await pdf.getPage(i);
          const textContent = await page.getTextContent();
          fullText += textContent.items.map((item) => item.str).join(" ");
        }
        resolve(fullText);
      } catch (error) {
        console.error("Error al procesar el PDF:", error);
        reject(error);
      }
    };
    reader.onerror = () => reject(new Error("Error al leer el archivo"));
    reader.readAsArrayBuffer(file);
  });
};
