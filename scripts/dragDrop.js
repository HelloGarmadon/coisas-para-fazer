let lists = document.getElementsByClassName("list-item");
let rightBox = document.getElementById("completeTasks");
let leftBox = document.getElementById("myTasks");

rightBox.addEventListener("dragover", function (e) {
  e.preventDefault();
});
rightBox.addEventListener("drop", function (e) {
  let selected = document.querySelector(".list-item.dragging");
  rightBox.appendChild(selected);
  selected.classList.remove("dragging");
});

leftBox.addEventListener("dragover", function (e) {
  e.preventDefault();
});
leftBox.addEventListener("drop", function (e) {
  let selected = document.querySelector(".list-item.dragging");
  leftBox.appendChild(selected);
  selected.classList.remove("dragging");
});

for (let list of lists) {
  list.addEventListener("dragstart", function (e) {
    e.dataTransfer.setData("text/plain", "");
    e.target.classList.add("dragging");
  });
}
