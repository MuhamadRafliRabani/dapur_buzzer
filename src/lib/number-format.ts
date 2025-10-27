export const numberFormat = (value: string | undefined) => {
  if (value) {
    return value
      .replace(/\D/g, "") // hanya angka
      .replace(/\B(?=(\d{3})+(?!\d))/g, "."); // format ribuan
  }

  return "";
};
