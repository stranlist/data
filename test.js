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

const checkUnique = () => {
    list.forEach(element => {
        if (list.filter(x => x.id == element.id).length !== 1) {
            throwList.push("Id unique failed (id: " + element.id.toString() + ")");
        }
        if (list.filter(x => x.title == element.title).length !== 1) {
            throwList.push("Title unique failed (id: " + element.id.toString() + ")");
        }
        if (list.filter(x => x.code == element.code).length !== 1) {
            throwList.push("Code unique failed (id: " + element.id.toString() + ")");
        }
    });
}

checkCode();
checkTitle();
checkId();
checkUnique();

if (throwList.length < 1) {
    console.log("Test Success.");
    return 0;
}
else {
    console.log("Test Failed! (Fail: " + throwList.length.toString() + ")\n");
    console.log(throwList.join("\n"));
    throw new Error('Test Failed!');
}