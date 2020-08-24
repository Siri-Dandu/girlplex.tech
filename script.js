 var annDelete = document.querySelector("#ann_dlt");
var announce = document.querySelector("#announce");
annDelete.addEventListener("click", () => {
  announce.remove()
});

function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction1()};

// Get the header
var header = document.getElementById("myHeader");

// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction1() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}


$('.count').each(function () {
    $(this).prop('Counter',0).animate({
        Counter: $(this).text()
    }, {
        duration: 4000,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });
});

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

function doGet(e){

  var op = e.parameter.action;

  var ss=SpreadsheetApp.openByUrl("Paste your sheet URL here in quatoes");
  var sheet = ss.getSheetByName("Sheet1");
  if(op=="insert")
    return insert_value(e,sheet);
}

//Recieve parameter and pass it to function to handle



  const scriptURL = 'https://script.google.com/macros/s/AKfycbw40uL_pmnTH6kGwo_YyKDYr_Oap50NR-4-AGa7OeuoNKEjmePx/exec'
  const form = document.forms['submit-to-google-sheet']

     form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => location.reload())
      .catch(error => console.error('Error!', error.message))
  })



