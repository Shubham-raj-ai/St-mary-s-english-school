
function exitslid() {
  const des = document.querySelector(".res");
  des.style.display = "flex";
}

function exit() {
  const des = document.querySelector(".res");
  des.style.display = "none";
}


window.addEventListener("scroll", function () {
  var navbar = document.getElementById("navo");
  if (window.scrollY > 0) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

