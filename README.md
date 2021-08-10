# To-Do Application
```
Todoly
```
> While building this To-Do Application,
> I learned how to create web elements dynamically,
> how to remove a certain element,
> understood the parent-child relation between elements
> and explored some array functions in JS (e.g. splice, push, indexOf).
> The most important thing I have learned is, how to solve a bigger problem in phases.

| [Live Application (👆)](https://krishdu.github.io/Todoly/) |
| ------ |

<p align="center">
<img alt="GIF" src="https://github.com/krishdu/Todoly/blob/master/todoly-image.gif?raw=true" width="800" height="400"/>
</p>

> UI

----------- Phase-1 : Adding element in List ------------
Step 1:
    Define an array to hold the task

Step 2: 
    After button press
        i.  push element in array
        ii. console log the array
        ii. clear the input box

----------- Phase-2 : Display the task list ------------
Step 1: Design a container

Step 2: (Logic)
       > keep a counter to uniquely assign id for every element
       > Create a row element 
       > Create a col for item division element
       > Create a col for button division element 
       > create a input tag element with readonly mode
       > Create a button element 
       > set attributes to these element
       > Append button and input tag element to it's respective column
       > Append the columns to the row
       > Append the row element to it's parent
       > console log button id

----------- Phase-3 : Pop item from pending  task and push that element into completed task array ------------
Step 1: 
    Create two separate array 
    a. pending
    b. Completed
    
Step 2: 
    > when a pending task's button is clicked 
        >> pop the item from pending task array
        >> push that item into completed task array
        >> console log both the array


----------- Phase-4 : Display the task list with two seperate container (Pending, Completed) ------------

    >> repeat phase-2 for completed task container

----------- Phase-5 : (UNDO) Pop item from completed task and push that element into pending task array ------------
    > when a completed task's button is clicked 
        >> pop the item from completed task array
        >> push that item into pending task array
        >> render both the container
              



 
