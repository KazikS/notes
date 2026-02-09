export const dateFormat = (date: string) => {
  const currentDay = date.split("T")[0].split("-").reverse().join(".");
  return currentDay;
};
