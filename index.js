function home() {
  document.getElementById("about").style.display = "none";
  document.getElementById("services").style.display = "none";
  document.getElementById("project").style.display = "none";
  document.getElementById("testimonial").style.display = "none";
  document.getElementById("home").style.display = "block";
}
function about() {
  document.getElementById("home").style.display = "none";
  document.getElementById("services").style.display = "none";
  document.getElementById("project").style.display = "none";
  document.getElementById("testimonial").style.display = "none";
  document.getElementById("about").style.display = "block";
}
function services() {
  document.getElementById("about").style.display = "none";
  document.getElementById("home").style.display = "none";
  document.getElementById("project").style.display = "none";
  document.getElementById("testimonial").style.display = "none";
  document.getElementById("services").style.display = "block";
}
function project() {
  document.getElementById("about").style.display = "none";
  document.getElementById("services").style.display = "none";
  document.getElementById("home").style.display = "none";
  document.getElementById("testimonial").style.display = "none";
  document.getElementById("project").style.display = "block";
}
function testimonial() {
  document.getElementById("about").style.display = "none";
  document.getElementById("services").style.display = "none";
  document.getElementById("project").style.display = "none";
  document.getElementById("home").style.display = "none";
  document.getElementById("testimonial").style.display = "block";
}
