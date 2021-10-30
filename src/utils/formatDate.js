export default function formatDate(date) {
  const d = new Date(date);
  let m = d.getMonth() + 1;
  let day = d.getDate();
  let year = d.getFullYear();

  if (m.length < 2) {
    m = `0${m}`;
  }

  if (day.length < 2) {
    day = `0${day}`;
  }

  return [year, m, day].join("-");
}
