months = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];


i = 1;
for (m of months) {
  var holidays = '';
switch (m) {
  case "January":
    holidays = ["New Year's Day", "Martin Luther King Jr. Day"];
    break;
  case "February":
    holidays = ["Presidents' Day", "Valentine's Day"];
    break;
  case "March":
    holidays = ["St. Patrick's Day", "International Women's Day"];
    break;
  case "April":
    holidays = ["Easter", "Earth Day"];
    break;
  case "May":
    holidays = ["Memorial Day", "Mother's Day"];
    break;
  case "June":
    holidays = ["Juneteenth", "Father's Day"];
    break;
  case "July":
    holidays = ["Independence Day", "Parents' Day"];
    break;
  case "August":
    holidays = ["Women's Equality Day", "International Youth Day"];
    break;
  case "September":
    holidays = ["Labor Day", "Patriot Day"];
    break;
  case "October":
    holidays = ["Columbus Day", "Halloween"];
    break;
  case "November":
    holidays = ["Veterans Day", "Thanksgiving"];
    break;
  case "December":
    holidays = ["Christmas", "Hanukkah"];
    break;
  default:
    holidays = ["No holidays found"];
    break;
}
  
  document.getElementById(`month${i}`).innerHTML += `${m}<br><br>Holidays: ${holidays.join(", ")}`;
  // console.log("loop working")
  i++;
}
