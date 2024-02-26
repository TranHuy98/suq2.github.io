// loading

$(window).on("load", function () {
  $("#loading").fadeOut(1000);
});
// end loading

// change language

// document.getElementById("lang_de").onclick = () => {
//   document.getElementById("lang_change").innerHTML = 'DE';
// };

// document.getElementById("lang_en").onclick = () => {
//   document.getElementById("lang_change").innerHTML = 'EN';
// };



//mobi menu

document.getElementById("mobi-menu-button").onclick = () => {

  
  document.getElementById("mobi-dropdown").classList.toggle("mobi-menu-toggle");

  document.getElementById("mobi-menu-button").classList.toggle("animate");

}