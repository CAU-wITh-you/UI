//색상변경
var nowcolor = "purple";
var pink = false;
var yellow = false;
var blue = false;
var purple = true;
var nowdarkcolor = "var(--color-dark-" + String(nowcolor) + ")";
var nowneoncolor = "var(--color-neon-" + String(nowcolor) + ")";
console.log("nowdarkcolor" + nowdarkcolor);
document.getElementById('edit').style = "border-bottom-color: " + String(nowdarkcolor);
document.getElementById('foldersdiv').style = "border-right-color: " + String(nowdarkcolor);


document.getElementById('pink').className = "fas fa-circle fa-2x";
document.getElementById('yellow').className = "fas fa-circle fa-2x";
document.getElementById('blue').className = "fas fa-circle fa-2x";
document.getElementById('purple').className = "fas fa-circle fa-2x";
document.getElementById('.edit__container')
if (nowcolor == "pink") {
    document.getElementById('pink').className = "fas fa-check-circle fa-2x";
} else if (nowcolor == "yellow") {
    document.getElementById('yellow').className = "fas fa-check-circle fa-2x";
} else if (nowcolor == "blue") {
    document.getElementById('blue').className = "fas fa-check-circle fa-2x";
} else if (nowcolor == "purple") {
    document.getElementById('purple').className = "fas fa-check-circle fa-2x";
}
document.getElementById('pink').addEventListener('click', function () {
    if (nowcolor == "pink") {
    } else {
        nowcolor = "pink";
        pink = true;
        document.getElementById('pink').className = "fas fa-check-circle fa-2x";
        if (yellow == true) {
            document.getElementById('yellow').className = "fas fa-circle fa-2x";
            yellow = false;
        } else if (blue == true) {
            document.getElementById('blue').className = "fas fa-circle fa-2x";
            blue = false;
        } else if (purple == true) {
            document.getElementById('purple').className = "fas fa-circle fa-2x";
            purple = false;
        }
    }
    nowdarkcolor = "var(--color-dark-" + String(nowcolor) + ")";
    nowneoncolor = "var(--color-neon-" + String(nowcolor) + ")";
    document.getElementById('edit').style = "border-bottom-color: " + String(nowdarkcolor);
    document.getElementById('foldersdiv').style = "border-right-color: " + String(nowdarkcolor);
    document.getElementById('editbtn').style.color = String(nowdarkcolor);
    console.log(nowcolor);
});
document.getElementById('yellow').addEventListener('click', function () {
    if (nowcolor == "yellow") {
    } else {
        nowcolor = "yellow";
        yellow = true;
        document.getElementById('yellow').className = "fas fa-check-circle fa-2x";
        if (pink == true) {
            document.getElementById('pink').className = "fas fa-circle fa-2x";
            pink = false;
        } else if (blue == true) {
            document.getElementById('blue').className = "fas fa-circle fa-2x";
            blue = false;
        } else if (purple == true) {
            document.getElementById('purple').className = "fas fa-circle fa-2x";
            purple = false;
        }
    }
    nowdarkcolor = "var(--color-dark-" + String(nowcolor) + ")";
    nowneoncolor = "var(--color-neon-" + String(nowcolor) + ")";
    document.getElementById('edit').style = "border-bottom-color: " + String(nowdarkcolor);
    document.getElementById('foldersdiv').style = "border-right-color: " + String(nowdarkcolor);
    document.getElementById('editbtn').style.color = String(nowdarkcolor);
    console.log(nowcolor);
});
document.getElementById('blue').addEventListener('click', function () {
    if (nowcolor == "blue") {
    } else {
        nowcolor = "blue";
        blue = true;
        document.getElementById('blue').className = "fas fa-check-circle fa-2x";
        if (pink == true) {
            document.getElementById('pink').className = "fas fa-circle fa-2x";
            pink = false;
        } else if (yellow == true) {
            document.getElementById('yellow').className = "fas fa-circle fa-2x";
            yellow = false;
        } else if (purple == true) {
            document.getElementById('purple').className = "fas fa-circle fa-2x";
            purple = false;
        }
    }
    nowdarkcolor = "var(--color-dark-" + String(nowcolor) + ")";
    nowneoncolor = "var(--color-neon-" + String(nowcolor) + ")";
    document.getElementById('edit').style = "border-bottom-color: " + String(nowdarkcolor);
    document.getElementById('foldersdiv').style = "border-right-color: " + String(nowdarkcolor);
    document.getElementById('editbtn').style.color = String(nowdarkcolor);
    console.log(nowcolor);
});
document.getElementById('purple').addEventListener('click', function () {
    if (nowcolor == "purple") {
    } else {
        nowcolor = "purple";
        purple = true;
        document.getElementById('purple').className = "fas fa-check-circle fa-2x";
        if (pink == true) {
            document.getElementById('pink').className = "fas fa-circle fa-2x";
            pink = false;
        } else if (yellow == true) {
            document.getElementById('yellow').className = "fas fa-circle fa-2x";
            yellow = false;
        } else if (blue == true) {
            document.getElementById('blue').className = "fas fa-circle fa-2x";
            blue = false;
        }
    }
    nowdarkcolor = "var(--color-dark-" + String(nowcolor) + ")";
    nowneoncolor = "var(--color-neon-" + String(nowcolor) + ")";
    document.getElementById('edit').style = "border-bottom-color: " + String(nowdarkcolor);
    document.getElementById('foldersdiv').style = "border-right-color: " + String(nowdarkcolor);
    document.getElementById('editbtn').style.color = String(nowdarkcolor);
    console.log(nowcolor);
});


//(폴더, 노트)네온 색상 변경, 같은 이름을 갖는 각각의 요소들.
let targetAfolder = document.querySelectorAll('.target_by_EachFolder');
targetAfolder.forEach((target) => target.addEventListener("mouseover", changeNeonbackInfunc));
let targetAnote = document.querySelectorAll('.target_by_EachNote');
targetAnote.forEach((target) => target.addEventListener("mouseover", changeNeonbackInfunc));
function changeNeonbackInfunc() {
    this.style.color = String(nowdarkcolor);
    this.style.boxShadow = "-3px 5px 5px " + String(nowneoncolor);
}
targetAfolder.forEach((target) => target.addEventListener("mouseout", changeNeonbackFolderOutfunc));
function changeNeonbackFolderOutfunc() {
    this.style.color = "";
    this.style.boxShadow = "";
}
targetAnote.forEach((target) => target.addEventListener("mouseout", changeNeonbackOutfunc));
function changeNeonbackOutfunc() {
    this.style.color = "";

    this.style.boxShadow = "-3px 5px 5px gray";
}

var nowclick = null;

//(폴더, 노트)그림자.
let targetAleftfolder = document.querySelectorAll('.target_by_EachleftFolder');
targetAleftfolder.forEach((target) => target.addEventListener("click", changeBackplusTitle));

function changeBackplusTitle() {
    if (nowclick != null) {//기존 background 원래대로
        document.getElementById(nowclick).style.backgroundColor = "";
        document.getElementById(nowclick).style.borderRadius = "";
    }
    nowclick = String(this.id);
    console.log(nowclick);
    document.getElementById(nowclick).style.backgroundColor = "var(--color-hover-gray)";
    document.getElementById(nowclick).style.borderRadius = "10px";
    document.getElementById('mypage__title').innerText = String(document.getElementById(nowclick + '__title').innerHTML);
    if (nowclick != "allnote") {
        document.getElementById("folders__title").style.display = "none";
        document.getElementById("area__folders").style.display = "none";
    } else {
        document.getElementById("folders__title").style.display = "";
        document.getElementById("area__folders").style.display = "";
    }
}


//편집 open
var editopen = false;
document.getElementById("editbtn").addEventListener('click', function () {
    editopen = !editopen;
    if (editopen == true) {
        document.getElementById("editbtn").style.color = String(nowdarkcolor);
        document.getElementById('plusbtn').style.display = "flex";
        document.getElementById('deletebtn').style.display = "flex";
        document.getElementById('edit__editfolderbtn').style.display = "flex";
    }
    else {
        document.getElementById("editbtn").style.color = "gray";
        document.getElementById('plusbtn').style.display = "none";
        document.getElementById('deletebtn').style.display = "none";
        document.getElementById('edit__editfolderbtn').style.display = "none";

    }
});

var plusbtnopen = false;
var deletebtnopen = false;
var edit__editfolderbtnopen = false;
document.getElementById("plusbtn").addEventListener('click', function () {
    if (deletebtnopen == true) {
        alert("- 폴더삭제 버튼을 취소하세요");
    } else if (edit__editfolderbtnopen == true) {
        alert("- 폴더수정 버튼을 취소하세요");
    } else {
        plusbtnopen = !plusbtnopen;
        if (plusbtnopen == true) {
            document.getElementById('plusbtn').style.color = String(nowdarkcolor);
        }
        else {
            document.getElementById('plusbtn').style.color = "gray";
        }
    }
});
function show__plusbtnback() {
    document.querySelector(".plusbtn__background").className = "plusbtn__background plusbtn__show";
}

function close__plusbtnback() {
    document.querySelector(".plusbtn__background").className = "plusbtn__background";
}

document.querySelector("#plusbtn").addEventListener("click", show__plusbtnback);
document.querySelector("#close__plusbtnbackground").addEventListener("click", close__plusbtnback);



document.getElementById("deletebtn").addEventListener('click', function () {
    if (plusbtnopen == true) {
        alert("+ 폴더추가 버튼을 취소하세요");
    } else if (edit__editfolderbtnopen == true) {
        alert("- 폴더수정 버튼을 취소하세요");
    }
    else {
        deletebtnopen = !deletebtnopen;
        if (deletebtnopen == true) {
            document.getElementById('deletebtn').style.color = String(nowdarkcolor);
        }
        else {
            document.getElementById('deletebtn').style.color = "gray";
        }
    }
});
document.getElementById("edit__editfolderbtn").addEventListener('click', function () {
    if (plusbtnopen == true) {
        alert("+ 폴더추가 버튼을 취소하세요");
    } else if (deletebtnopen == true) {
        alert("- 폴더삭제 버튼을 취소하세요");
    } else {
        edit__editfolderbtnopen = !edit__editfolderbtnopen;
        if (edit__editfolderbtnopen == true) {
            document.getElementById('edit__editfolderbtn').style.color = String(nowdarkcolor);
            show__editfolderback()
        }
    }
});
document.querySelector("#close__editbtnbackground").addEventListener("click", close__editfolderback);
//팝업
function show__editfolderback() {
    document.querySelector(".edit__editfolderbtn__background").className = "edit__editfolderbtn__background edit__editfolderbtn__show";
    document.querySelector(".edit__editfolderbtn__popup").style.color = String(nowdarkcolor);
    document.querySelector(".edit__editfolderbtn__popup").style.border.color = String(nowdarkcolor);
    document.querySelector(".folderinbtn").style.border.color = String(nowdarkcolor);
    document.querySelector(".folderoutbtn").style.border.color = String(nowdarkcolor);
}

function close__editfolderback() {
    document.querySelector(".edit__editfolderbtn__background").className = "edit__editfolderbtn__background";
    edit__editfolderbtnopen = false;
    document.getElementById('edit__editfolderbtn').style.color = "gray";

}
