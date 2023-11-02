
const countInToDo = document.querySelectorAll('#toDo #todo').length;
document.getElementById("countToDo").innerHTML = countInToDo;

const countInProgress = document.querySelectorAll('#inProgress #todo').length;
document.getElementById("countProgress").innerHTML = countInProgress;

const countInStuck = document.querySelectorAll('#stuck #todo').length;
document.getElementById("countStuck").innerHTML = countInStuck;

const countInDone = document.querySelectorAll('#done #todo').length; 
document.getElementById("countDone").innerHTML = countInDone;

function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}

const onSubmit = (event) => {
  event.preventDefault();

  const title = document.querySelector("#title").value;
  const description = document.querySelector("#desc").value;
  const status = document.querySelector("#status").value;
  const priority = document.querySelector("#priority").value;

  console.log(title)
  console.log(description)
  console.log(status)
  console.log(priority)
};

