function formatDate(input) {
  try {
    let date;
    if (input instanceof Date) {
      date = input;
    } else {
      date = new Date(input);
    }

    if (isNaN(date.getTime())) {
      throw new Error("Data inválida");
    }

    const dia = String(date.getUTCDate()).padStart(2, "0");
    const mes = String(date.getUTCMonth() + 1).padStart(2, "0");
    const ano = date.getUTCFullYear();

    return `${dia}/${mes}/${ano}`;
  } catch (e) {
    return null;
  }
}
export default formatDate;