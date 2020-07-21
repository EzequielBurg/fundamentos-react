const formatDate = (date: string): string => {
  const formatter = new Intl.DateTimeFormat('pt-BR');

  return formatter.format(Date.parse(date));
};

export default formatDate;
