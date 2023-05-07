//Challenge
let HawaiiTime = moment().tz("Hawaii/Honolulu").add(6, "Month").format("LLLL");

let HawaiiTimeElement = document.querySelector("#current-date");

HawaiiTimeElement.innerHTML = `It is ${HawaiiTime} in Honolulu, Hawaii`;

//Challenge 3

let franceTime = moment().tz("France/Paris").add(10, "Year").format("LLLL");

let franceTimeElement = document.querySelector("#future-date");

franceTimeElement.innerHTML = `it will be ${franceTime} in Paris, France`;

// Challenge 4

let localTimezone = moment.tz.guess();
let localElement = document.querySelector("#local-time-zone");
localElement.innerHTML = `Your current time zone is ${localTimezone} and the current time is ${moment().format(
  "h:m A"
)}`;
