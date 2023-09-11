// loading

$(window).on("load", function () {
  $("#loading").fadeOut(1000);
});
// end loading

// change language

document.getElementById("lang_de").onclick = () => {
  document.getElementById("lang_change").innerHTML = 'DE';
};

document.getElementById("lang_en").onclick = () => {
  document.getElementById("lang_change").innerHTML = 'EN';
};
