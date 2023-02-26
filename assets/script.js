// dayjs time

const currentTimeEl = $("#currentDay");
const now = dayjs().format("dddd MM-DD-YYYY HH:mm:ss A");

$("#currentDay").text(now);

// currentTimeEl.text(now);

// // Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// // the code isn't run until the browser has finished rendering all the elements
// // in the html.

$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?

  $(document).ready(function () {
    // saveBtn click listener
    $(".saveBtn").on("click", function () {
      // Get nearby values of the description in JQuery
      var text = $(this).siblings(".description").val();
      var time = $(this).parent().attr("id");

      // Save text in local storage
      localStorage.setItem(time, text);
    });
  });

  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?

  function timeTracker() {
    //get current number of hours.
    var timeNow = $("#currentDay").text(now);

    // loop over time blocks
    $(".time-block").each(function () {
      var blockTime = parseInt($(this).attr("id").split("hour")[1]);

      // To check the time and add the classes for background indicators
      if (blockTime < timeNow) {
        $(this).removeClass("future");
        $(this).removeClass("present");
        $(this).addClass("past");
      } else if (blockTime === timeNow) {
        $(this).removeClass("past");
        $(this).removeClass("future");
        $(this).addClass("present");
      } else {
        $(this).removeClass("present");
        $(this).removeClass("past");
        $(this).addClass("future");
      }
    });
  }

  //   var num = $(this).parent().data('num'),
  //     target = $('#info-' + num);

  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?

  // Get item from local storage if any
  $("#hour-9 .description").val(localStorage.getItem("hour-9"));
  $("#hour-10 .description").val(localStorage.getItem("hour-10"));
  $("#hour-11 .description").val(localStorage.getItem("hour-11"));
  $("#hour-12 .description").val(localStorage.getItem("hour-12"));
  $("#hour-13 .description").val(localStorage.getItem("hour-13"));
  $("#hour-14 .description").val(localStorage.getItem("hour-14"));
  $("#hour-15 .description").val(localStorage.getItem("hour-15"));
  $("#hour-16 .description").val(localStorage.getItem("hour-16"));
  $("#hour-17 .description").val(localStorage.getItem("hour-17"));

  timeTracker();
});

// ---------------------------------------------------
// Disregard - code I wrote that didn't include jQuery
// ---------------------------------------------------

// const micCheck = "Mic check: 1, 2, 1, 2";

// const saveNineBtn = document.querySelector("#saveNine");
// const saveTenBtn = document.querySelector("#saveTen");
// const saveElevenBtn = document.querySelector("#saveEleven");
// const saveTwelveBtn = document.querySelector("#saveTwelve");
// const saveOneBtn = document.querySelector("#saveOne");
// const saveTwoBtn = document.querySelector("#saveTwo");
// const saveThreeBtn = document.querySelector("#saveThree");
// const saveFourBtn = document.querySelector("#saveFour");
// const saveFiveBtn = document.querySelector("#saveFive");

// let textNine = document.querySelector("#nine");
// let textTen = document.querySelector("#ten");
// let textEleven = document.querySelector("#eleven");
// let textTwelve = document.querySelector("#twelve");
// let textOne = document.querySelector("#one");
// let textTwo = document.querySelector("#two");
// let textThree = document.querySelector("#three");
// let textFour = document.querySelector("#four");
// let textFive = document.querySelector("#five");

// saveNineBtn.addEventListener("click", function() {
//     // Writes 9AM to-do items to localStorage
//     localStorage.setItem("hour-9", textNine.value);
//     console.log(micCheck);
// });

// saveTenBtn.addEventListener("click", function() {
//     // Writes 10AM to-do items to localStorage
//     localStorage.setItem("hour-10", textTen.value);
//     console.log(micCheck);
// });

// saveElevenBtn.addEventListener("click", function() {
//     // Writes 11AM to-do items to localStorage
//     localStorage.setItem("hour-11", textEleven.value);
//     console.log(micCheck);
// });

// saveTwelveBtn.addEventListener("click", function() {
//     // Writes 12PM to-do items to localStorage
//     localStorage.setItem("hour-12", textTwelve.value);
//     console.log(micCheck);
// });

// saveOneBtn.addEventListener("click", function() {
//     // Writes 1PM to-do items to localStorage
//     localStorage.setItem("hour-1", textOne.value);
//     console.log(micCheck);
// });

// saveTwoBtn.addEventListener("click", function() {
//     // Writes 2PM to-do items to localStorage
//     localStorage.setItem("hour-2", textTwo.value);
//     console.log(micCheck);
// });

// saveThreeBtn.addEventListener("click", function() {
//     // Writes 3PM to-do items to localStorage
//     localStorage.setItem("hour-3", textThree.value);
//     console.log(micCheck);
// });

// saveFourBtn.addEventListener("click", function() {
//     // Writes 4PM to-do items to localStorage
//     localStorage.setItem("hour-4", textFour.value);
//     console.log(micCheck);
// });

// saveFiveBtn.addEventListener("click", function() {
//     // Writes 5PM to-do items to localStorage
//     localStorage.setItem("hour-5", textFive.value);
//     console.log(micCheck);
// });

// Saves to-do items even when page gets refreshed
//     renderLastRegistered = () => {
//         const timeNine = localStorage.getItem("hour-9");
//         const timeTen = localStorage.getItem("hour-10");
//         const timeEleven = localStorage.getItem("hour-11");
//         const timeTwelve = localStorage.getItem("hour-12");
//         const timeOne = localStorage.getItem("hour-1");
//         const timeTwo = localStorage.getItem("hour-2");
//         const timeThree = localStorage.getItem("hour-3");
//         const timeFour = localStorage.getItem("hour-4");
//         const timeFive = localStorage.getItem("hour-5");
//         textNine.value = timeNine;
//         textTen.value = timeTen;
//         textEleven.value = timeEleven;
//         textTwelve.value = timeTwelve;
//         textOne.value = timeOne;
//         textTwo.value = timeTwo;
//         textThree.value = timeThree;
//         textFour.value = timeFour;
//         textFive.value = timeFive;
//         console.log(micCheck);
//     };

//     renderLastRegistered();

//     //

//     // colorCoordination = () => {
//     // const timeBlock = document.querySelector("#time-block");
//     // if (now < "#hour-[num]") {
//     //     timeBlock.setAttribute("class", "time-block past")
//     // } else if (now === "#hour-[num]") {
//     //     timeBlock.setAttribute("class", "time-block present")
//     // } else {
//     //     timeBlock.setAttribute("class", "time-block future")
//     // };
//     // };

//     // colorCoordination();

//     // $("div[id^=hour]").each(function() {
//     //     const timeBlock = document.querySelector("#time-block");
//     //     if (now < "#hour-[num]") {
//     //         timeBlock.setAttribute("class", "time-block past")
//     //     } else if (now === "#hour-[num]") {
//     //         timeBlock.setAttribute("class", "time-block present")
//     //     } else {
//     //         timeBlock.setAttribute("class", "time-block future")
//     //     };
//     // });

//     //
//     // TODO: Add code to get any user input that was saved in localStorage and set
//     // the values of the corresponding textarea elements. HINT: How can the id
//     // attribute of each time-block be used to do this?
//     //
//     // TODO: Add code to display the current date in the header of the page.
// });

// const saveBtnAll = document.querySelector(".scheduleContainer");

// saveBtnAll.addEventListener("click", function (e) {
//   console.log(e.target.id);
//   localStorage.setItem(`hour-${e.target.id}`, e.target.value);
// });
