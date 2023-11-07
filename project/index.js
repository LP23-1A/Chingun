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
count()

const uid = () => {
  return Date.now().toString(36) + Math.random().toString(36);
};

addTask(uid(), "To Do", "This is a to do card", "toDo", "high")

addTask(uid(), "To Do", "This is a to do card", "inProgress", "high")

function checker() {
  let title = document.getElementById("title").value;
  let description = document.getElementById("desc").value;
  let status = document.getElementById("status").value;
  let priority= document.getElementById("priority").value;
  // console.log(title)
  // console.log(description)
  // console.log(status)
  // console.log(priority)
  let id = uid()
  addTask(id, title, description, status, priority)
  count()
  hidePopup()
}

const popup = document.querySelector('.popup');
function showPopup() {
  popup.classList.add('open');
}
function hidePopup() {
  popup.classList.remove('open');
}

function addTask(id, titleInput, descriptionInput, statusInput, priorityInput) {
  var card = document.createElement('div');
  // card.setAttribute('data-id' , id);
  card.setAttribute("id", id)
  card.style.marginTop = "8px";
  card.style.borderRadius = "8px"
  card.style.padding = "5px"
  card.style.display = "flex";
  card.style.gap = "20px"
  card.className = "card";
  document.getElementById(statusInput).appendChild(card);
  var done = document.createElement('button');
  done.innerHTML = '<i class="fa fa-check circle"></i>';
  document.getElementById(id).appendChild(done);
  var details = document.createElement('div');
  details.setAttribute("id", "details");
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
  details.appendChild(priority)
  document.getElementById(id).appendChild(details);
  var actions = document.createElement("div");
  actions.className = "actions";
  actions.setAttribute("id", "actions");
  var close = document.createElement("button");
  close.innerHTML = '<i class="fa fa-close circle"></i>';
  actions.appendChild(close)
  var edit = document.createElement("button");
  edit.innerHTML = '<i class="fa fa-edit circle"></i>';
  actions.appendChild(edit)
  document.getElementById(id).appendChild(actions);
}

function finish () {
  
}