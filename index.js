

$(window).resize(function() {
  location.reload(true)
});
var width = $(window).width();
console.log(width);

if (width >= 800) {
  document.getElementById("heroimg").setAttribute("src", "images/hero-desktop.jpg");
  document.getElementById("heroimg").classList.add("heroimage")
} else {
  document.getElementById("heroimg").setAttribute("src", "images/hero-mobile.jpg");
  document.getElementById("heroimg").classList.add("heroimagemob")
}


$("#sub-btn").click(function () {
  const isValidEmail = emailField.checkValidity();
  console.log(isValidEmail);
  if (isValidEmail) {
    $(".errorsign").removeClass("errorgot");
    $(".errormess").removeClass("errorgot");
  } else {
    $(".errorsign").addClass("errorgot");
    $(".errormess").addClass("errorgot");
  }
});
