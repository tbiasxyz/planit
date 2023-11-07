export const formatDate = (date) => {
  return new Intl.DateTimeFormat("en").format(date);
};
