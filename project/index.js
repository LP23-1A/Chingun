
const countInToDo = document.querySelectorAll('#toDo #todo').length;
document.getElementById("countToDo").innerHTML = countInToDo;

const countInProgress = document.querySelectorAll('#inProgress #todo').length;
document.getElementById("countProgress").innerHTML = countInProgress;

const countInStuck = document.querySelectorAll('#stuck #todo').length;
document.getElementById("countStuck").innerHTML = countInStuck;

const countInDone = document.querySelectorAll('#done #todo').length; 
document.getElementById("countDone").innerHTML = countInDone;

function checker() {
  console.log("bob")
  let title = document.getElementById("title").value;
  let description = document.getElementById("desc").value;
  let status = document.getElementById("status").value;
  let priority= document.getElementById("priority").value;
  console.log(title)
  console.log(description)
  console.log(status)
  console.log(priority)
  addTask(title, description, status, priority)
  hidePopup()
}

const popup = document.querySelector('.popup');
function showPopup() {
  popup.classList.add('open');
}
function hidePopup() {
  popup.classList.remove('open');
}

function addTask(titleInput, descriptionInput, statusInput, priorityInput) {
  console.log("check")
  var card = document.createElement('div');
  card.setAttribute("id", "card");
  card.style.marginTop = "8px";
  card.style.borderRadius = "8px"
  card.style.padding = "5px"
  card.style.display = "flex";
  card.style.gap = "20px"
  card.className = "card";
  document.getElementById(statusInput).appendChild(card);
  var done = document.createElement('div');
  done.innerHTML = '<i class="fa fa-check circle"></i>';
  document.getElementById("card").appendChild(done);
  var details = document.createElement('div');
  details.setAttribute("id", "details");
  details.className = "details"
  var title = document.createElement('header');
  title.innerHTML = titleInput;
  var description = document.createElement('p');
  description.innerHTML = descriptionInput;
  var priority = document.createElement('span');
  priority.innerHTML = priorityInput;
  priority.className = "priority";
  document.getElementById("card").appendChild(details);
  document.getElementById("details").appendChild(title);
  document.getElementById("details").appendChild(description);
  document.getElementById("details").appendChild(priority);
  var actions = document.createElement("div");
  actions.className = "actions";
  actions.setAttribute("id", "actions");
  var close = document.createElement("button");
  close.innerHTML = '<i class="fa fa-close circle"></i>';
  var edit = document.createElement("button");
  edit.innerHTML = '<i class="fa fa-edit circle"></i>';
  document.getElementById("card").appendChild(actions);
  document.getElementById("actions").appendChild(close);
  document.getElementById("actions").appendChild(edit);
}


