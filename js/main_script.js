pendingTaskList = Array();
completedTaskList = Array();
let pendingTaskCount = 0;
let completedTaskCount = 0;

function addTask(){
    let newTask = document.querySelector("#newTask").value.trim();
    console.log(newTask);
    if(newTask != ''){
        pendingTaskList.push(newTask);
        //console.log(pendingTaskList);
        renderPendingItem();
        document.querySelector("#newTask").value = "";
    }else{
        alert("Please add a task first");
    }
}

function renderPendingItem(){
    let pendingTaskDiv = document.querySelector("#pendingTask");
     let i = pendingTaskList.length - 1;
     pendingTaskCount++;

    let row =  document.createElement("div");
    row.setAttribute("class", "row p-1");
    row.setAttribute("id",`pending-item-div-${pendingTaskCount}`);

    let inputCol = document.createElement("div");
    inputCol.setAttribute("class", "col-md-10");

    let buttonCol = document.createElement("div");
    buttonCol.setAttribute("class", "col-md-2");

    let input = document.createElement("input");
    input.setAttribute("class","form-control")
    input.setAttribute("id",`pending-item-${pendingTaskCount}`);
    input.setAttribute("readonly","true")
    input.setAttribute("value", pendingTaskList[i]);

    let button = document.createElement("Button");
    button.setAttribute("class","btn btn-primary px-4");
    button.setAttribute("id",`btn-pending-item-${pendingTaskCount}`);
    button.innerHTML = "<i class='fa fa-check-circle' aria-hidden='true'></i>"
    button.setAttribute("onClick",`markAsComplete('${input.value}', '${pendingTaskCount}')`);
    
    inputCol.appendChild(input);
    buttonCol.appendChild(button);
    row.appendChild(inputCol);
    row.appendChild(buttonCol);
    
    pendingTaskDiv.appendChild(row);        
     
}

  
function markAsComplete(text, actual_index){
    //  console.log(actual_index);
       const index = pendingTaskList.indexOf(text);
       if (index > -1) {
         completedTaskList.push(text); 
         pendingTaskList.splice(index, 1);
         let pendingTaskDiv = document.querySelector(`#pending-item-div-${actual_index}`);
         pendingTaskDiv.remove();
         renderCompletedItem();
       }
    //    console.log(pendingTaskList);
    //    console.log(completedTaskList);
       
 }

function renderCompletedItem(){
    let completedTaskDiv = document.querySelector("#completedTask");
    let i = completedTaskList.length - 1;
    completedTaskCount++;

    let row =  document.createElement("div");
    row.setAttribute("class", "row p-1");
    row.setAttribute("id",`completed-item-div-${completedTaskCount}`);

    let inputCol = document.createElement("div");
    inputCol.setAttribute("class", "col-md-10");

    let buttonCol = document.createElement("div");
    buttonCol.setAttribute("class", "col-md-2");

    let input = document.createElement("input");
    input.setAttribute("class","form-control")
    input.setAttribute("id",`completed-item-${completedTaskCount}`);
    input.setAttribute("readonly","true")
    input.setAttribute("value", completedTaskList[i]);

    let button = document.createElement("Button");
    button.setAttribute("class","btn btn-primary px-4");
    button.setAttribute("id",`btn-completed-item-${completedTaskCount}`);
    button.innerHTML = "<i class='fa fa-undo' aria-hidden='true'></i>"
    button.setAttribute("onClick",`markAsPending('${input.value}', '${completedTaskCount}')`);

    inputCol.appendChild(input);
    buttonCol.appendChild(button);
    row.appendChild(inputCol);
    row.appendChild(buttonCol);
    completedTaskDiv.appendChild(row);
} 

 function markAsPending(text, actual_index){
       // console.log(id)
    const index = completedTaskList.indexOf(text);
    if (index > -1) {
        pendingTaskList.push(text); 
        completedTaskList.splice(index, 1);
        let completedTaskDiv = document.querySelector(`#completed-item-div-${actual_index}`);
        completedTaskDiv.remove();
        renderPendingItem();
    }
    //    console.log(pendingTaskList);
    //    console.log(completedTaskList);   
 }
