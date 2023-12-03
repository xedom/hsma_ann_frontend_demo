export const parseMoney = (value: number): string => {
  return value.toLocaleString('de-DE', {
    style: 'currency',
    currency: 'EUR',
  });
}

export const parseDate = (value: string): string => {
  const date = new Date(value);
  return date.toLocaleDateString('de-DE', {
    hour: 'numeric',
    minute: 'numeric',
    year: '2-digit',
    month: '2-digit',
    day: '2-digit',
  });
}