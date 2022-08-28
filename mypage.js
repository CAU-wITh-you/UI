//색상변경
var nowcolor = "pink";
var pink = true;
var yellow = false;
var blue = false;
var purple = false;
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
    db.collection("doITyourselfDB_user").doc(nowuser).update({ color: nowcolor });
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
    db.collection("doITyourselfDB_user").doc(nowuser).update({ color: nowcolor });
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
    db.collection("doITyourselfDB_user").doc(nowuser).update({ color: nowcolor });
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
    db.collection("doITyourselfDB_user").doc(nowuser).update({ color: nowcolor });
});


//(폴더, 노트)네온 색상 변경, 같은 이름을 갖는 각각의 요소들.
let targetAfolder = document.querySelectorAll('.target_by_EachFolder');
targetAfolder.forEach((target) => target.addEventListener("mouseover", changeNeonbackInfunc));
let targetAnote = document.querySelectorAll('.target_by_EachNote');
targetAnote.forEach((target) => target.addEventListener("mouseover", changeNeonbackInfunc));
function changeNeonbackInfunc() {
    this.style.boxShadow = "-3px 3px 3px " + String(nowneoncolor);
    this.style.color = String(nowdarkcolor);
    this.style.border = "2px solid " + String(nowdarkcolor);
}
targetAfolder.forEach((target) => target.addEventListener("mouseout", changeNeonbackFolderOutfunc));
function changeNeonbackFolderOutfunc() {
    this.style.color = "";
    this.style.boxShadow = "-3px 3px 3px var(--color-background-gray)";
    this.style.border = "2px solid whitesmoke"
}

targetAnote.forEach((target) => target.addEventListener("mouseout", changeNeonbackOutfunc));
function changeNeonbackOutfunc() {
    this.style.color = "";
    this.style.boxShadow = "-3px 3px 3px var(--color-background-gray)";
    this.style.border = "2px solid whitesmoke";
}

document.querySelector('#notopenfilebtn').addEventListener("click", function () {
    document.querySelector(".openfile__background").className = "openfile__background";
})
document.querySelector("#close__openfilebackground").addEventListener("click", function () {
    document.querySelector(".openfile__background").className = "openfile__background";

});
//팝업
function show__fileopenback() {
    document.querySelector(".openfile__background").className = "openfile__background openfile__show";
    document.querySelector(".openfile__popup").style.color = String(nowdarkcolor);
    document.querySelector(".openfile__popup").style.border.color = String(nowdarkcolor);
    document.getElementById("openfilebtn").style.border.color = "white";
    //document.querySelector(".openfilebtn").style.border.color = "whitesmoke";
    //document.querySelector(".notopenfilebtn").style.border.color = String(nowdarkcolor);
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
            show__plusbtnback();
        }
    }
});
//팝업
document.querySelector("#close__plusbtnbackground").addEventListener("click", close__plusbtnback);
function show__plusbtnback() {
    document.querySelector(".plusbtn__background").className = "plusbtn__background plusbtn__show";
    document.querySelector(".plusbtn__popup").style.color = String(nowdarkcolor);
    document.querySelector(".plusbtn__popup").style.border.color = String(nowdarkcolor);
    document.querySelector(".foldercreatebtn").style.border.color = String(nowdarkcolor);
}
function close__plusbtnback() {
    document.querySelector(".plusbtn__background").className = "plusbtn__background";
    plusbtnopen = false;
    document.getElementById('plusbtn').style.color = "gray";
}




document.getElementById("deletebtn").addEventListener('click', function () {
    if (plusbtnopen == true) {
        alert("+ 폴더추가 버튼을 취소하세요");
    } else if (edit__editfolderbtnopen == true) {
        alert("🪄 폴더수정 버튼을 취소하세요");
    }
    else {
        deletebtnopen = !deletebtnopen;
        if (deletebtnopen == true) {
            document.getElementById('deletebtn').style.color = String(nowdarkcolor);
            show_deletefolderback();
        }
    }
});
document.querySelector("#close__deletebtnbackground").addEventListener("click", close__deletefolderback);
//팝업
function show_deletefolderback() {
    document.querySelector(".deletebtn__background").className = "deletebtn__background deletebtn__show";
    document.querySelector(".deletebtn__popup").style.color = String(nowdarkcolor);
    document.querySelector(".deletebtn__popup").style.border.color = String(nowdarkcolor);
    document.querySelector(".deletefolderbtn").style.border.color = String(nowdarkcolor);
}
function close__deletefolderback() {
    document.querySelector(".deletebtn__background").className = "deletebtn__background";
    deletebtnopen = false;
    document.getElementById('deletebtn').style.color = "gray";

}

document.getElementById("edit__editfolderbtn").addEventListener('click', function () {
    if (plusbtnopen == true) {
        alert("+ 폴더추가 버튼을 취소하세요");
    } else if (deletebtnopen == true) {
        alert("- 폴더삭제 버튼을 취소하세요");
    } else {
        edit__editfolderbtnopen = !edit__editfolderbtnopen;
        if (edit__editfolderbtnopen == true) {
            document.getElementById('edit__editfolderbtn').style.color = String(nowdarkcolor);
            show__editfolderback();
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
folders = [["폴더1", 12, { 00: "history", 22: "idsjfl" }], ["폴더1", 12, { 00: "history", 22: "idsjfl" }]];
function loading(folders, files) {
    loadleft(foldername, foldernum, files)
}
function loadleft(foldername, foldernum, files) {
    folder.forEach(element => { //폴더이름별
        var div__folder = document.createElement("div");
        div__folder.className = "folder target_by_EachFolder";
        div__folder.id = element;

        var div__folder__div = document.createElement("div");
        div__folder__div.className = "folder__icon";

        var div__folder__div__ptag = document.createElement("p");
        div__folder__div__ptag.className = "afolder__icon";
        div__folder__div__ptag.style = "font-size: large;";
        div__folder__div__ptag.innerHTML = "📁";

        div__folder__div.appendChild(div__folder__div);

        var div__folder__h4foldername = document.createElement("h4");
        div__folder__h4foldername.className = "folder__title";
        div__folder__h4foldername.id = String(element) + "__title";
        div__folder__h4foldername.innerHTML = String(element);
        var div__folder__h4num = document.createElement("h4");
        div__folder__h4num.className = "folder__num";
        div__folder__h4num.id = String(element) + "__num";
        div__folder__h4num.innerHTML = "20";// 폴더별 파일 갯수

        div__folder.appendChild(div__folder__div);
        div__folder.appendChild(div__folder__h4foldername);
        div__folder.appendChild(div__folder__h4num);

    });
}