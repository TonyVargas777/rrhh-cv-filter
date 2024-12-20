import mammoth from "mammoth";

export const extractTextFromWord = (file) => {
  const reader = new FileReader();
  return new Promise((resolve, reject) => {
    reader.onload = async (e) => {
      try {
        const arrayBuffer = e.target.result;
        const { value } = await mammoth.extractRawText({ arrayBuffer });
        resolve(value.trim()); // Eliminamos espacios adicionales
      } catch (error) {
        console.error("Error al procesar el archivo Word:", error);
        reject(new Error("No se pudo procesar el archivo Word. Verifique el formato."));
      }
    };

    reader.onerror = () => {
      console.error("Error al leer el archivo Word.");
      reject(new Error("Error al leer el archivo Word. Inténtelo de nuevo."));
    };

    reader.readAsArrayBuffer(file);
  });
};
