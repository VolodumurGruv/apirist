const isOdd = (year: number) => (year % 4 === 0 ? 29 : 28);

const daysInMonths = (year: number) => [
  31,
  isOdd(year),
  31,
  30,
  31,
  30,
  31,
  31,
  30,
  31,
  30,
  31,
];

const addDays = (
  days: number,
  currentDate: number,
  month: number,
  year: number
) => {
  if (daysInMonths(year)[month] < currentDate + days) {
    const date = {
      month: month + 1,
      currentDate: currentDate + days - daysInMonths(year)[month],
      year,
    };

    return date;
  } else {
    return { month, currentDate: currentDate + days, year };
  }
};

export function nextRevisionIn(days: number) {
  const date = new Date();

  const currentDate = date.getDate();
  const month = date.getMonth();
  const year = date.getFullYear();

  return addDays(days, currentDate, month, year);
}
