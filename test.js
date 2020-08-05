const list = require("./list.json");

let throwList = [];

const checkCode = () => {
    list.forEach(element => {
        if (element.code.length < 1) {
            throwList.push("Code is null (id: " + element.id.toString() + ")");
        }
    });
}

const checkTitle = () => {
    list.forEach(element => {
        if (element.title.length < 1) {
            throwList.push("Title is null (id: " + element.id.toString() + ")");
        }
    });
}

const checkId = () => {
    for (let index = 1; index <= list.length; index++) {
        if (list.filter(x => x.id == index).length !== 1) {
            throwList.push("Index failed (index: " + index.toString() + ")");
        }
    }
}

checkCode();
checkTitle();
checkId();

if (throwList.length < 1) {
    console.log("Test Success.");
    return 0;
}
else {
    console.log("Test Failed! (Fail: " + throwList.length.toString() + ")\n");
    console.log(throwList.join("\n"));
    return 1;
}