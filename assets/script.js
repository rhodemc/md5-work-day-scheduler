// Work day scheduler code wrapped in a call to jQuery, executes when DOM is ready.
$().ready(function () {
  // Dayjs time added to header.
  const currentTime = dayjs().format("dddd MM-DD-YYYY HH:mm:ss A");
  $("#currentDay").text(currentTime);

  // Function for setting items to local storage.
  $(function () {
    // saveBtn click listener.
    $(".saveBtn").on("click", function () {
      // Using jQuery, these variables grab value from the time-blocks' .description and id.
      let toDoItems = $(this).siblings(".description").val();
      let time = $(this).parent().attr("id");
      // Set time and to-do items to local storage.
      localStorage.setItem(time, toDoItems);
    });
  });

  // Function that applies past, present or future classes to each time-block by
  // looping through time-blocks, pulling each id's hour to compare against dayjs'
  // current hour.
  $(".time-block").each(function () {
    let dayjsHour = parseInt(dayjs().format("HH"));
    let schedulerHour = parseInt($(this).attr("id").split("hour")[1]);
    console.log(schedulerHour, dayjsHour);

    // Applies past, present or future classes depending on if if statements are true or false.
    if (schedulerHour < dayjsHour) {
      $(this).removeClass("future");
      $(this).removeClass("present");
      $(this).addClass("past");
    } else if (schedulerHour === dayjsHour) {
      $(this).removeClass("past");
      $(this).removeClass("future");
      $(this).addClass("present");
    } else {
      $(this).removeClass("present");
      $(this).removeClass("past");
      $(this).addClass("future");
    }
  });

  // Get saved items from localStorage.
  $("#hour9 .description").val(localStorage.getItem("hour9"));
  $("#hour10 .description").val(localStorage.getItem("hour10"));
  $("#hour11 .description").val(localStorage.getItem("hour11"));
  $("#hour12 .description").val(localStorage.getItem("hour12"));
  $("#hour13 .description").val(localStorage.getItem("hour13"));
  $("#hour14 .description").val(localStorage.getItem("hour14"));
  $("#hour15 .description").val(localStorage.getItem("hour15"));
  $("#hour16 .description").val(localStorage.getItem("hour16"));
  $("#hour17 .description").val(localStorage.getItem("hour17"));
});
