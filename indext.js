function close1(){
    let body = document.getElementsByTagName("body")[0]
    let flex =document.getElementsByTagName("main")[0]
    body.innerHTML = flex.innerHTML
}
function close2(){
    let body = document.getElementsByTagName("body")[0]
    let sec =document.getElementsByTagName("section")[0]
    body.innerHTML = sec.innerHTML
}
const taskList = [];
let itemCount = 0;
let Count = 1;
function Todo1() {
    let body = document.getElementsByTagName("body")[0];
    let flex =document.createElement("main");
    flex.innerHTML = body.innerHTML;
    flex.style.filter = "blur(4px)";
    body.innerHTML = ``;
    body.append(flex);
    let div = document.createElement("div");
    div.className = "child";
    div.innerHTML =
    `<p class="adl">Add New List</p>
    <input type="text" placeholder="Add New List" id="list1" autofocus>
    <div class="b">
        <button onclick="addList()">Add</button>
        <button onclick="close1()">Close</button>
    </div>`;
    body.append(div);
};

let addList = () => {
    let name = document.getElementById("list1").value;
    const tempObj = {
      id: Date.now(),
      taskname: name
    };
    taskList.push(tempObj);
    console.log(taskList);
    document.getElementById("p1").style.visibility = "hidden";
    let flexcon = document.getElementById("flexcon");
    flexcon.innerHTML += `<div id= ${itemCount} class="item">
            <span class="span2" onclick="expandItem(this)">${name}</span>
            <hr>
            <ul class="tasks" id="items-list-${itemCount}"></ul>
            <i class="fa-solid fa-trash-can close" onclick="delList(this)"></i>
            <i class="fa-solid fa-circle-plus addtask" id="add-btn-${itemCount++}" onclick="Todo2(); getListID(event)"></i>
        </div>`;
    let body = document.getElementsByTagName("body")[0];
    let flex =document.getElementsByTagName("main")[0];
    body.innerHTML = flex.innerHTML;
}

function Todo2() {
    let body = document.getElementsByTagName("body")[0];
    let flex =document.createElement("main");
    flex.innerHTML = body.innerHTML;
    flex.style.filter = "blur(4px)";
    body.innerHTML = ``;
    body.append(flex);
    let div = document.createElement("div");
    div.className = "child";
    div.innerHTML =
    `<p class="adl">Add New Item</p>
    <input type="text" placeholder="Add New Item" id="item1" autofocus>
    <div class="b">
        <button onclick="addItem(this)">Add</button>
        <button onclick="close1()">Close</button>
    </div>`;
    body.append(div);
};

let ListsID = "";
function getListID(tasks) {
    ListsID =tasks.target.previousSibling.previousSibling.previousSibling.previousSibling.id;
}

let addItem = () => {
    let item1 = document.getElementById("item1").value;
    let list = document.createElement("li");
    document.getElementById(ListsID).appendChild(list);
    list.id = `item-${Count++}`;
    list.innerHTML = `<span>${item1}</span>
    <button class="but" onclick="mark(this)">mark done</button>`;
    let body = document.getElementsByTagName("body")[0];
    let flex =document.getElementsByTagName("main")[0];
    body.innerHTML = flex.innerHTML;
  };

let mark = (but) => {
    but.parentElement.classList.add("marked");
    but.classList.add("hide");
};

let delList = (trash_can) => {
    trash_can.parentElement.remove();
    taskList.splice(trash_can.parentElement.id, 1);
    if (taskList.length === 0) {
        document.getElementById("p1").style.visibility = "visible";
        document.getElementById("p1").style.opacity = 0.7;
    };
};
let expandItem = (card) => {
    let body = document.getElementsByTagName("body")[0]
    let sec =document.createElement("section")
    sec.innerHTML = body.innerHTML
    body.innerHTML = ``
    body.append(sec)
    let div = document.createElement("div")
    div.className = "Parent"
    div.innerHTML = 
    `<header class="itemexp">
      <div class="Back" onclick="close2()">
        <i class="fa-solid fa-circle-chevron-left" style="color:blue;"></i>
        <span>Back</span>
      </div>
      <span id="itemTitleID" class="itemTitle">${card.innerText}</span>
      <div class="Add" onclick="Todo1()">
        <i class="fa-solid fa-circle-plus"></i>
        <span >Add list</span>
      </div>
    </header>
    <div class="content">
        <div id="itemDetail" class="itemd">
            ${card.parentElement.innerHTML}
        </div>
    </div>`
  body.append(div)
};
