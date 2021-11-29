//편집 open
var editopen = false;
document.getElementById("editbtn").addEventListener('click', function () {
    editopen = !editopen;
    if (editopen == true) {
        document.getElementById("editbtn").style.color = "var(--color-dark-pink)";
        document.getElementById('plusbtn').style.display = "flex";
        document.getElementById('deletebtn').style.display = "flex";
    }
    else {
        document.getElementById("editbtn").style.color = "black";
        document.getElementById('plusbtn').style.display = "none";
        document.getElementById('deletebtn').style.display = "none";

    }
});

var plusbtnopen = false;
var deletebtnopen = false;
document.getElementById("plusbtn").addEventListener('click', function () {
    if (deletebtnopen == true) {
        alert("- 버튼을 취소하세요");
    }
    else {
        plusbtnopen = !plusbtnopen;
        if (plusbtnopen == true) {
            document.getElementById('plusbtn').style.color = "var(--color-dark-pink)";
        }
        else {
            document.getElementById('plusbtn').style.color = "black";
        }
    }
});

document.getElementById("deletebtn").addEventListener('click', function () {
    if (plusbtnopen == true) {
        alert("+ 버튼을 취소하세요");
    }
    else {
        deletebtnopen = !deletebtnopen;
        if (plusbtnopen == true) {
            document.getElementById('deletebtn').style.color = "var(--color-dark-pink)";
        }
        else {
            document.getElementById('deletebtn').style.color = "black";
        }
    }
});
$(function () {
    $("#sortable").sortable();
    $("#sortable").disableSelection();
})