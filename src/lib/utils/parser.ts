export const parseMoney = (value: number): string => {
  return value.toLocaleString('de-DE', {
    style: 'currency',
    currency: 'EUR',
  });
}