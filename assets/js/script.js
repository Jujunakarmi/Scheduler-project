// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html

$(function () {
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  var currentTime = dayjs().hour()
  console.log(currentTime)
  for (var i = 9; i <= 17; i++) {
    var id = "hour-" + i
    var savedItem = localStorage.getItem(id)
    $("#" + id).children("textarea").val(savedItem)

    if (i < currentTime) {
      $("#" + id).children("textarea").addClass("past")
    } else if (i == currentTime) {
      $("#" + id).children("textarea").addClass("present")
    } else {
      $("#" + id).children("textarea").addClass("future")
    }

  }

  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?


  //Event listener and to save the input in text area using JQuery
  $(".saveBtn").on("click", function () {


    var description = $(this).siblings(".description").val();
    var hourblock = $(this).parent().attr("id")

    localStorage.setItem(hourblock, description)
    console.log(description)
    $("#displayMsg").show()
    setTimeout(function () {
      $("#displayMsg").hide()
    }, 1000)
  })

  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
  $("#displayMsg").hide()

  function updateClock() {
    const now = dayjs().format('MMM D, YYYY   h:mm:ss A');
    currentDay.innerHTML = now
  }

  setInterval(updateClock, 1000)
});



