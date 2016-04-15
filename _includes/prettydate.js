function prettyDate ( timeObj ) {
  function setToStartOfDay( timeObject ) {
    return new Date(timeObject.getUTCFullYear(), timeObject.getUTCMonth(), timeObject.getUTCDate(), 0, 0, 0, 0);
  }
  function pluralize(count, singular, plural) {
    return count + " " + ( (count == 1) ? singular : (plural || singular + "s") );
  }

  var date = timeObj,
    today = setToStartOfDay( new Date() ),
    start_of_the_day = setToStartOfDay( date ),
    day_diff = Math.floor( ( (today - start_of_the_day) / 1000) / 86400);

  if ( isNaN(day_diff) || day_diff < 0 ) {
    return;
  }

  return day_diff == 0 && "Heute" ||
    day_diff == 1 && "Gestern" ||
    day_diff < 7 && "vor " + day_diff + " Tagen" ||
    day_diff < 31 && "vor " + pluralize(Math.round( day_diff / 7 ), "Woche", "Wochen") ||
    day_diff < 366 && "vor " + pluralize( Math.round( day_diff / 7 / 4 ), "Monat", "Monaten") ||
    day_diff >= 366 && "vor " + pluralize( Math.round( day_diff / 7 / 4 / 12 ), "Jahr", "Jahren");
}

var ele = document.querySelectorAll("[data-time]");
for (var i = 0; i < ele.length; i++) {
  ele[i].innerHTML = prettyDate(new Date(ele[i].getAttribute("data-time")));  
}
