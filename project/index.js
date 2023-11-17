function count(){
  const countInToDo = document.querySelectorAll('#toDo .card').length;
    document.getElementById("countToDo").innerHTML = countInToDo;

  const countInProgress = document.querySelectorAll('#inProgress .card').length;
    document.getElementById("countProgress").innerHTML = countInProgress;

  const countInStuck = document.querySelectorAll('#stuck .card').length;
    document.getElementById("countStuck").innerHTML = countInStuck;

  const countInDone = document.querySelectorAll('#done .card').length; 
    document.getElementById("countDone").innerHTML = countInDone;
}

const uid = () => {
  return Date.now().toString(36) + Math.random().toString(36);
};

// addTask(uid(), "To Do", "This is a to do card", "toDo", "high")

// addTask(uid(), "To Do", "This is a to do card", "inProgress", "high")

// addTask(uid(), "To Do", "This is a to do card", "inProgress", "high")

count()

const popup = document.querySelector('.popup');
function showPopup() {
  popup.classList.add('open');
}
function hidePopup() {
  popup.classList.remove('open');
}

const edit = document.querySelector('.popupEdit');
function showEdit() {
  edit.classList.add('open');
}
function hideEdit() {
  edit.classList.remove('open');
}

function editCard(title, description, status, priority) {
  console.log("check")
  document.getElementById("titleE").value = title;
  document.getElementById("descE").value = description;
  document.getElementById("statusE").value = status;
  document.getElementById("priorityE").value = priority;
  showEdit()
}

function addTask(id, titleInput, descriptionInput, statusInput, priorityInput) {
  var card = document.createElement('div');
  card.setAttribute('data-id', id);
  card.setAttribute("id", id)
  card.setAttribute("draggable", true)
  // card.setAttribute("ondragstart", "drag(event)")
  // card.setAttribute("ondrop", "return false;")
  card.className = "card";
  card.classList.add(priorityInput)
  document.getElementById(statusInput).appendChild(card);
  var done = document.createElement('button');
  done.innerHTML = '<i class="fa fa-check circle"></i>';
  document.getElementById(id).appendChild(done);
  done.addEventListener('click', function handleClick() {
    document.getElementById("done").appendChild(card);
    count()
  });
  var details = document.createElement('div');
  details.setAttribute("id", "details");
  details.setAttribute("ondrop", "return false;")
  details.className = "details"
  var title = document.createElement('h4');
  title.innerHTML = titleInput;
  details.appendChild(title)
  var description = document.createElement('p');
  description.innerHTML = descriptionInput;
  details.appendChild(description)
  var priority = document.createElement('span');
  priority.innerHTML = priorityInput;
  priority.className = "priority";
  priority.classList.add(priorityInput)
  details.appendChild(priority)
  document.getElementById(id).appendChild(details);
  var actions = document.createElement("div");
  actions.className = "actions";
  actions.setAttribute("id", "actions");
  actions.setAttribute("ondrop", "return false;")
  var close = document.createElement("button");
  close.innerHTML = '<i class="fa fa-close circle"></i>';
  actions.appendChild(close)
  close.addEventListener('click', function handleClick() {
    const element = document.getElementById(id);
    element.remove();
    count()
  });
  var edit = document.createElement("button");
  edit.innerHTML = '<i class="fa fa-edit circle"></i>';
  actions.appendChild(edit)
  edit.addEventListener('click', function handleClick() {
    editCard(titleInput, descriptionInput, card.parentNode.id, priorityInput)
    document.getElementById("editBtn").onclick = function(e){
      let newStatus = document.getElementById("statusE").value
      let newTitle = document.getElementById("titleE").value;
      let newDescription = document.getElementById("descE").value;
      let newPriority= document.getElementById("priorityE").value;
      document.getElementById(newStatus).appendChild(card);
      title.innerHTML = newTitle;
      description.innerHTML = newDescription;
      priority.innerHTML = newPriority;
      titleInput = newTitle
      descriptionInput = newDescription
      statusInput = newStatus
      priorityInput = newPriority
      hideEdit()
      count()
    }
  });
  document.getElementById(id).appendChild(actions);
}

const tasks = [
  {id: uid(), title: "To Do", description: "This is a to do card", status: "toDo", priority: "high"},
];

tasks.push({id: uid(), title: "To Do", description: "This is a to do card", status: "inProgress", priority: "high"})

function drawTasks(){
  for (let i = 0; i < (tasks.length); i++) {
    addTask((tasks[i].id), (tasks[i].title), (tasks[i].description), (tasks[i].status), (tasks[i].priority))
  }
}

function clearTasks(){
  const boards = document.querySelectorAll(".boards");
  const board = boards.querySelectorAll(".board");
  const cards = board.querySelectorAll(".example");
  cards.removeChild(cards.firstChild);
}

drawTasks()

function sortToDo(){
  let mainDiv = document.getElementById("inProgress"),

  divsArray = [tasks];

  let priorities = ['high', 'medium', 'low'];
  idList = divsArray.sort((a, b)=>priorities.indexOf(a.priority) - priorities.indexOf(b.priority));

  mainDiv.replaceChildren()
  drawTasks()
}
function sortInProgress(){
  let mainDiv = document.getElementById("inProgress"),

  divsArray = [tasks];

  let priorities = ['high', 'medium', 'low'];
  idList = divsArray.sort((a, b)=>priorities.indexOf(a.priority) - priorities.indexOf(b.priority));

  mainDiv.replaceChildren()
  drawTasks()
}
function sortStuck(){
  let mainDiv = document.getElementById("inProgress"),

  divsArray = [tasks];

  let priorities = ['high', 'medium', 'low'];
  idList = divsArray.sort((a, b)=>priorities.indexOf(a.priority) - priorities.indexOf(b.priority));

  mainDiv.replaceChildren()
  drawTasks()
}
function sortInProgress(){
  console.log("ball?")
  let toDoDiv = document.getElementById("toDo");
  let inProgressDiv = document.getElementById("inProgress");
  let stuckDiv = document.getElementById("stuck");
  let doneDiv = document.getElementById("done");

  divsArray = [tasks];

  let priorities = ['high', 'medium', 'low'];
  idList = divsArray.sort((a, b)=>priorities.indexOf(a.priority) - priorities.indexOf(b.priority));

  toDoDiv.replaceChildren()
  inProgressDiv.replaceChildren()
  stuckDiv.replaceChildren()
  doneDiv.replaceChildren()
  drawTasks()
}

function checker() {
  let nTitle = document.getElementById("title").value;
  let nDescription = document.getElementById("desc").value;
  let nStatus = document.getElementById("status").value;
  let nPriority= document.getElementById("priority").value;
  let nId = uid()
  
  // addTask(nId, nTitle,nDescription,nStatus,nPriority)
  tasks.push({id: nId, title: nTitle, description: nDescription, status: nStatus, priority: nPriority})
  addTask((tasks[(tasks.length - 1)].id), (tasks[(tasks.length - 1)].title), (tasks[(tasks.length - 1)].description), (tasks[(tasks.length - 1)].status), (tasks[(tasks.length - 1)].priority))
  // sortInProgress()
  count()
  dragndrop()
  hidePopup()
  
}


// function allowDrop(ev) {
//   ev.preventDefault();
// }

// function drag(ev) {
//   ev.dataTransfer.setData("text", ev.target.id);
// }

// function drop(ev, el) {
//   ev.preventDefault();
//   var data = ev.dataTransfer.getData("text");
//   el.appendChild(document.getElementById(data));
//   count()
// }

function  dragndrop (id) {
  const card = document.querySelectorAll('.card');
  const boards = document.querySelectorAll('.board');
  let draggedItem = null;
  card.forEach((card) => {
  console.log("rizzler")
  card.addEventListener('dragstart', (event) => {
    event.target.value
    draggedItem = event.target;
    event.dataTransfer.setData("text", event.target.getAttribute('data-id'));
    // sortInProgress()
  });
  card.addEventListener('dragend', () => {
    draggedItem = null;
  });
  });
  boards.forEach((board) => {
  board.addEventListener('dragover', (event) => {
    event.preventDefault();
  });
  board.addEventListener('dragenter', (event) => {
    event.preventDefault();
    if (draggedItem) {
      console.log("bballers")
      const draggingBoard = draggedItem.parentNode;
      if (draggingBoard !== event.currentTarget) {
        event.currentTarget.querySelector('.cards').appendChild(draggedItem);
        count()
      }
    }
  });
  board.addEventListener('dragleave', () => { });
  board.addEventListener('drop', (event) => {
    event.preventDefault();
    // sortInProgress()
  });
  });

}

dragndrop()

