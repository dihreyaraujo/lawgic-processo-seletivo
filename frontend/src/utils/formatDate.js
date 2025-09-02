function formatDate(input) {
  try {
    // Se já for Date
    let date;
    if (input instanceof Date) {
      date = input;
    } else {
      // Converte string ou número em Date
      date = new Date(input);
    }

    // Se não for uma data válida
    if (isNaN(date.getTime())) {
      throw new Error("Data inválida");
    }

    const dia = String(date.getUTCDate()).padStart(2, "0");
    const mes = String(date.getUTCMonth() + 1).padStart(2, "0");
    const ano = date.getUTCFullYear();

    return `${dia}/${mes}/${ano}`;
  } catch (e) {
    return null; // ou lança erro
  }
}
export default formatDate;