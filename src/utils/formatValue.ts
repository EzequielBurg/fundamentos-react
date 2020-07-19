const formatCurrency = (
  value: number,
  type: 'income' | 'outcome' = 'income',
): string => {
  const formatter = new Intl.NumberFormat([], {
    style: 'currency',
    currency: 'BRL',
  });

  if (type === 'income') return formatter.format(value);

  return `- ${formatter.format(value)}`;
};

const formatDate = (date: string): string => {
  const formatter = new Intl.DateTimeFormat('pt-BR');

  return formatter.format(Date.parse(date));
};

export { formatCurrency, formatDate };
