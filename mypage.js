$(function () {
    $("#sortable").sortable();
    $("#sortable").disableSelection();
})


function hi() {
    console.log("pink");
}
document.getElementById('yellow').addEventListener('click', hi);