import mammoth from "mammoth";

export const extractTextFromWord = (file) => {
  const reader = new FileReader();
  return new Promise((resolve, reject) => {
    reader.onload = async (e) => {
      try {
        const arrayBuffer = e.target.result;
        const { value } = await mammoth.extractRawText({ arrayBuffer });
        resolve(value);
      } catch (error) {
        console.error("Error al procesar el archivo Word:", error);
        reject(error);
      }
    };
    reader.readAsArrayBuffer(file);
  });
};
