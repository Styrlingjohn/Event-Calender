var dateEl = $('#currentDay')
var saveBtn = $('.saveBtn')

var displayDate = dayjs().format('dddd MMM DD, YYYY');
dateEl.text(displayDate);

$(function () {
  saveBtn.on('click', function(){
    var event = $(this).siblings(".description").val();
    var time = $(this).parent().attr('id');

    localStorage.setItem(time, event);
  })


  var hour = dayjs().get('hour');


  $('.time-block').each(function () {
    var hourNow = parseInt($(this).attr("id").replace('hour-', ''));

    if (hourNow < hour) {
        $(this).addClass("past");
        $(this).removeClass("present");
        $(this).removeClass("future");
    } else if (hourNow == hour) {
        $(this).addClass("present");
        $(this).removeClass("past");
        $(this).removeClass("future");
    } else {
        $(this).addClass("future");
        $(this).removeClass("past");
        $(this).removeClass("present");
    }

  })
  $("#hour-8 .description").text(localStorage.getItem("hour-8"));
  $("#hour-9 .description").text(localStorage.getItem("hour-9"));
  $("#hour-10 .description").text(localStorage.getItem("hour-10"));
  $("#hour-11 .description").text(localStorage.getItem("hour-11"));
  $("#hour-12 .description").text(localStorage.getItem("hour-12"));
  $("#hour-13 .description").text(localStorage.getItem("hour-13"));
  $("#hour-14 .description").text(localStorage.getItem("hour-14"));
  $("#hour-15 .description").text(localStorage.getItem("hour-15"));
  $("#hour-16 .description").text(localStorage.getItem("hour-16"));
  $("#hour-17 .description").text(localStorage.getItem("hour-17"));
  $("#hour-18 .description").text(localStorage.getItem("hour-18"));

});