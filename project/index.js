
const countInToDo = document.querySelectorAll('#toDo #todo').length;
 console.log(countInToDo); 
const todo = document.getElementById(countToDo);
document.getElementById("countToDo").innerHTML = countInToDo;

 const countInProgress = document.querySelectorAll(
   '#inProgress #todo'
 ).length;
 console.log(countInProgress); 
 document.getElementById("countProgress").innerHTML = countInProgress;

 const countInStuck = document.querySelectorAll(
   '#stuck #todo'
 ).length;
 console.log(countInStuck); 
 document.getElementById("countStuck").innerHTML = countInStuck;

 const countInDone = document.querySelectorAll(
   '#done #todo'
 ).length;
 console.log(countInDone); 
 document.getElementById("countDone").innerHTML = countInDone;

 function openForm() {
   document.getElementById("myForm").style.display = "block";
   
 }
 
 function closeForm() {
   document.getElementById("myForm").style.display = "none";
 }

 function addTask() {
   
 }