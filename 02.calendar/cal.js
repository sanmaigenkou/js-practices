import minimist from "minimist";

const argv = minimist(process.argv.slice(2));

const today = new Date();
const year = argv.y || today.getFullYear();
const month = argv.m || today.getMonth() + 1;

const firstDay = new Date(year, month - 1, 1);
const lastDay = new Date(year, month, 0);

const monthDays = [];
for (
  let dayNumber = firstDay.getDate();
  dayNumber <= lastDay.getDate();
  dayNumber++
) {
  monthDays.push(new Date(year, month - 1, dayNumber));
}

const dayOfWeekNames = ["日", "月", "火", "水", "木", "金", "土"];

console.log(`     ${month}月  ${year}`);
dayOfWeekNames.forEach((dayOfWeekName) => {
  process.stdout.write(`${dayOfWeekName} `);
});
process.stdout.write("\n");

const firstDayOfWeekNumber = firstDay.getDay();
for (let i = 0; i < firstDayOfWeekNumber; i++) {
  process.stdout.write(`   `);
}

monthDays.forEach((day) => {
  if (day.getDate() < 10) {
    process.stdout.write(` ${day.getDate()} `);
  } else {
    process.stdout.write(`${day.getDate()} `);
  }
  if (day.getDay() === 6) {
    process.stdout.write("\n");
  }
});
