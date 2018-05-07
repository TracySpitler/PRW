'use strict';

/* Fetch
================================================== */

fetch("https://api.myjson.com/bins/gg3eh").then(function (response) {
  if (response.ok) {
    return response.json();
  } else {
    return Promise.reject('something went wrong!');
  }
}).then(function (data) {
  //JS
  var myList = $('#recipeCards');

  $.each(data.recipes, function () {
    imgNum = Math.floor(Math.random() * 5);
    $("#recipeCards").append("<article>" + "<img class='food-img' src='assets/" + imgNum + ".jpg' alt='Recipe Image'>" + "<div class='food-text'><h4>" + this.title + "</h4><p class='description'>" + this.description + "</p><p><strong>Category: </strong>" + this.category + "<br><strong>Star Rating: </strong>" + this.starRating + "</p><p class='remove'>" + "<button class='fas fa-trash' type='button' name='trash' onclick='deleteThis(this);'>" + "</button>" + "</p></div></article>");
  });
  //localStorage.getItem('listItems', $('#myList').html());
  console.log('data is ', data);
}).catch(function (error) {
  return console.log('error is ', error);
});

/* Rating Stars
================================================== */

function checked() {
  $('input[name=radioName]:checked').val();
}

/* Validate
================================================== */

function validate() {

  // Name
  if (document.myForm.name.value == "") {
    alert("Please enter a name.");
    document.myForm.name.focus();
    return false;
  }

  // Description
  if (document.myForm.description.value == "") {
    alert("Please enter a description.");
    document.myForm.description.focus();
    return false;
  }

  // Category
  if (document.myForm.category.value == "") {
    alert("Please enter a category.");
    document.myForm.category.focus();
    return false;
  }

  return 3;
}

/* Add Recipe
================================================== */

function myList() {

  imgNum = Math.floor(Math.random() * 5);
  $("#recipeCards").append("<article>" + "<img class='food-img' src='assets/" + imgNum + ".jpg' alt='Recipe Image'>" + "<div class='food-text'><h4>" + $("#name").val() + "</h4><p class='description'>" + $("#description").val() + "</p><p><strong>Category: </strong>" + $("#category").val() + "<br><strong>Star Rating: </strong>" + $("input[type=radio]:checked").val() + "</p><p class='remove'>" + "<button class='fas fa-trash' type='button' name='trash' onclick='deleteThis(this);'>" + "</button>" + "</p></div></article>");

  saveMe();
}

// Clear form
function formClear() {
  $("#name").val("");
  $("#description").val("");
  $("#category").val("");
  $(".fa-star").val("");
}

// Add Items
function addRecipe() {
  var i = validate();
  if (i == 3) {
    // Add to list
    myList();
    // Clear form
    formClear();
    // Focus to name field
    $("#name").focus();
  }
}

/* Local Storage
================================================== */

function saveMe() {
  // Store

  var num = Math.floor(Math.random() * 5);;
  var recipe = { 'name': $("#name").val(), 'description': $("#description").val(), 'category': $("#category").val(), 'rating': $('input[type=radio]:checked').val(), 'img': num };
  localStorage.setItem('recipe', JSON.stringify(recipe));
}

function loadMe() {
  // Retrieve
  var retrieved = localStorage.getItem('recipe');
  var data = JSON.parse(retrieved);
  var imgNum = Math.floor(Math.random() * 5);
  img = '<img class="food-img" src="assets/' + imgNum + '.jpg" alt="Recipe Image">';

  if (localStorage != 'undefined') {
    $("#recipeCards").append("<article>" + img + "<div class='food-text'><h4>" + data.name + "</h4><p class='description'>" + data.description + "</p><p><strong>Category: </strong>" + data.category + "<br><strong>Rating: </strong>" + data.rating + "</p><p class='remove'>" + "<button class='fas fa-trash' type='button' name='trash' onclick='deleteThis(this);'>" + "</button>" + "</p></div></article>");
  }
}

/* Remove Item
================================================== */
function deleteThis(deleteMe) {
  $(deleteMe).parents("article").remove();
}

$(document).ready(function () {
  loadMe();
});