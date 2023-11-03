
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

function checker() {
  console.log("bob")
  let title = document.getElementById("title").value;
  let desc = document.getElementById("desc").value;
  let status = document.getElementById("status").value;
  let priority= document.getElementById("priority").value;
  console.log(title)
  console.log(desc)
  console.log(status)
  console.log(priority)
  closeForm()
}



document.querySelector(".backdrop").addEventListener("click", () => {
  document.querySelector(".backdrop").classList.remove("active");
});

document.querySelectorAll(".add-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelector(".backdrop").classList.add("active");
  });
});


