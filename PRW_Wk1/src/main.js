/* Fetch
================================================== */

fetch("https://api.myjson.com/bins/gg3eh")
  .then(response => {
    if (response.ok) {
      return response.json()
    } else {
      return Promise.reject('something went wrong!')
    }
  })
  .then(data => {
    //JS
    let myList = $('#recipeCards');
        imgNum = Math.floor(Math.random()*5);
        img = '<img class="food-img" src="assets/' + imgNum + '.jpg" alt="Recipe Image">';

        $.each(data.recipes, function() {
          $("#recipeCards").append("<article>" + img +
          "<div class='food-text'><h4>"
          + this.title +
          "</h4><p class='description'>"
          + this.description +
          "</p><p><strong>Category: </strong>"
          + this.category +
          "<br><strong>Star Rating: </strong>"
          + this.starRating +
          "</p><p class='remove'>" +
          "<button class='fas fa-trash' type='button' name='trash'>" +
          "</button>" +
          "</p></div></article>"
          )
        });
        //localStorage.getItem('listItems', $('#myList').html());
        console.log('data is ', data)
  })
  .catch(error => console.log('error is ', error))

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
    $("#recipeCards").append("<article>" + img +
      "<div class='food-text'><h4>"
      + $("#name").val() +
      "</h4><p class='description'>"
      + $("#description").val() +
      "</p><p><strong>Category: </strong>"
      + $("#category").val() +
      "<br><strong>Star Rating: </strong>"
      + $(".fa-star").val() +
      "</p><p class='remove'>" +
      "<button class='fas fa-trash' type='button' name='trash'>" +
      "</button>" +
      "</p></div></article>"
      );

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

  function saveMe(){
    // Store
    var recipe = { 'name': $("#name").val(), 'description': $("#description").val(), 'category': $("#category").val() };
    localStorage.setItem('recipe', JSON.stringify(recipe));
  }

  function loadMe(){
    // Retrieve
    var retrieved = localStorage.getItem('recipe');
    var obj = JSON.parse(retrieved);
    alert(data);


  }

  window.addEventListener('load', loadMe, false);
