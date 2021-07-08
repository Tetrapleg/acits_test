export const getAge = year => {
  if(year) {
    if(year % 10 === 1 && year !== 11) {
      return `${year} год`;
    } else if(year % 10 > 1 && year % 10 < 5 && Math.floor(year / 10) !== 1) {
      return `${year} года`;
    }
  }
  return `${year} лет`;
};