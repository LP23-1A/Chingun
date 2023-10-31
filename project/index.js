
function countId(id) {
    var counter = 0;
    $("card").each(function() {
      if(this.id==id) {
         counter+=1;
       } 
    });
 }

 countId(todo)