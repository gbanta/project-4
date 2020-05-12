//jshint esversion: 6

let controller = function () {
  if (localStorage.getItem("toDoList") !== null) {
    $(".items").html(localStorage.getItem("toDoList"));
  }

  let addItemFromInputBox = function () {
    //Semmy uses "$" to name variables that will contain jQuery objects
    let $new_item;

    if ($(".item-input input").val() !== "") {
      $new_item = $("<p>").text($(".item-input input").val());
      //$new_item.hide();
      $(".items").append($new_item);
      //$new_item.fadeIn();
      $(".item-input input").val("");
      localStorage.setItem("toDoList", $(".items").html());
    }
  };

  $(".item-input button").on("click", function (event) {
    addItemFromInputBox();
  });

  $(".item-input input").on("keypress", function (event) {
    if (event.keyCode === 13) {
      addItemFromInputBox();
    }
  });
};

$(document).ready(controller);
