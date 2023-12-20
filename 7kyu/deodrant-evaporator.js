function evaporator(content, evap_per_day, threshold) {
  var days = 0;
  var gas = 100;
  while (gas >= threshold) {
    gas -= (gas * evap_per_day) / 100;
    days++;
  }
  return days;
}
