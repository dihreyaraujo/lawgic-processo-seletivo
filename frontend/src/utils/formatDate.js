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

    const dia = String(date.getDate()).padStart(2, "0");
    const mes = String(date.getMonth() + 1).padStart(2, "0");
    const ano = date.getFullYear();

    return `${dia}/${mes}/${ano}`;
  } catch (e) {
    return null; // ou lança erro
  }
}
export default formatDate;