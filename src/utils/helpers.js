export const capitalize = (word) => {
  const words = word.split(/[\s-]+/);
  const capitalizedWords = words.map(
    (word) =>
      String(word).slice(0, 1).toUpperCase() +
      String(word).slice(1).toLowerCase()
  );
  return capitalizedWords[0].length === 1
    ? capitalizedWords.join("-")
    : capitalizedWords.join(" ");
};

export const calcProgress = (tasks) => {
  return Math.ceil(
    (tasks.filter((task) => task.type === "finished").length / tasks.length) *
      100
  );
};
