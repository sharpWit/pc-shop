type TChanger = (number: number | string) => string | number;

export const changeNumbersFormatEnToFa: TChanger = (number) =>
  number
    .toString()
    .replace(/[0-9]/g, (match) => "۰۱۲۳۴۵۶۷۸۹"[parseInt(match, 10)]);
