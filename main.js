const todoInput = document.querySelector(".todo-list__input");
const addBtn = document.querySelector(".todo-list__add");
const todoTask = document.querySelector(".todo-list__task");
const removeItem = document.querySelectorAll(".todo-list__delete");

addBtn.addEventListener("click", () => {
  if (todoInput.value === "") alert("Please add task!!");
  else add();
});
todoInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter" && todoInput.value === "")
    alert("Please add task!!");
  else if (event.key === "Enter") add();
});

function add() {
  todoTask.innerHTML += `
  <div class="todo-list__item">
  <li>${document.querySelector(".todo-list__input").value}</li>
  <button class="todo-list__done" onclick="done(this)">
  <ion-icon name="checkmark-outline"></ion-icon>
  </button>
  <button class="todo-list__delete" onclick="remove(this)" >
  <ion-icon name="trash-outline"></ion-icon>
  </button>
  </div>
  `;
  todoInput.value = "";
}

function remove(target) {
  //removeItem.parentNode.remove();
  const item = target.parentNode;
  item.classList.add("fade-out");
  setTimeout(() => {
    item.remove();
  }, 500); // fade-out duration
}

function done(doneItem) {
  doneItem.parentNode.children[0].style.textDecoration = "line-through";
}
