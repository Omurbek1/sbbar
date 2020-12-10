var illustration = document.getElementById("illustration");
var span = document.getElementsByClassName("close_modal_window")[0];
span.onclick = function () {
    illustration.style.display = "none";
 }
 window.onclick = function (event) {
    if (event.target == illustration) {
        illustration.style.display = "block";
    }
 }