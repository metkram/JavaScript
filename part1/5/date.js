"use stric";

let newDate = new Date();
//alert(newDate); //show full time and date information
//new Date(milliseconds) - new Date obj in milliseconds from 1 jan 1970
let secondOfJan1970 = new Date(24 * 60 * 60 * 1000);
//alert(secondOfJan1970);
let newDate1 = new Date("2020-01-01");
//alert(newDate1);
//new Date(year, month, date, hours, mimutes, seconds, ms) - month counts like array

//-----------getters
// .getFullYear() or getUTCFullYear()
// .getMonth() or getUTCMonth()
// .getDate() or ...
// .getHours()
// .getMinutes()
// .getSeconds()
// .getMilliseconds()
// .getDay() - day of a week 0 - sunday, 1 - monday

//alert(newDate1.getFullYear());

// .getTime() - milliseconds from 1 jan 1970

//alert(newDate1.getTime());

// .getTimezoneOffset() gap in milliseconds between 0 UTC and local time zone (+2 equal to -120)

//alert(new Date().getTimezoneOffset());

//--------------setters
// .setFullYear(year, [month], [date])
// .setMonth(month, [date])
// .setDate(date)
// .setHours(hour, [min], [sec], [ms])
// .setMinutes(min, [sec], [ms])
// .setSeconds(sec, [ms])
// .setMilliseconds(ms)
// .setTime(milliseconds)
newDate.setMonth(3);
//alert(newDate);

//alert(+newDate1); the same as newDate.getTime()

//Date.now() works the same as .getTime and +(new Date()) but more lighter

//Date.parse(str) - YYYY-MM-DDTHH:mm:ss.sssZ


//tasks

let taskDate = new Date(2012, 1, 20, 3, 12);

function getWeekDay(date) {
  let daysNames = ["Sun", "Mon", "Tue", "Wen", "Thu", "Fri", "Sat"];
  return daysNames[date.getDay()];
}

function getLocalDay(date) {
  let day = date.getDay();
  if (day == 0) {
    return 7;
  }
  return day;
}

function getDateAgo(date, days) {
  let timestamp = new Date(date - (days * 1000 * 60 * 60 * 24));
  return timestamp.getDate();
}

function getLastDayOfMonth(year, month) {
  let timestamp = new Date(year, month + 1, 0);
  return timestamp.getDate();
}

function getSecondsToday() {
  let today = new Date();
  today.setHours(0, 0, 0, 0);
  return (Date.now() - today) / 1000;
}
