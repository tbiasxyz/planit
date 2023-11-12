export const capitalize = (word) => {
  return (
    String(word).slice(0, 1).toUpperCase() + String(word).slice(1).toLowerCase()
  );
};

export const decapitalize = (word) => {
  return word.toLowerCase();
};
