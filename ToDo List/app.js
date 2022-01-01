let start = prompt("What would you like to do?");

while (start.toLowerCase() === "new") {
  start = prompt("What ToDo would you like to add?");
  for (added of start) {
    console.log(added);
  }
}

while (start.toLowerCase() === "list") {
  start = prompt("Here's your list so far. What would you like to do?");
  for (list of start) {
    console.log(list);
  }
}

while (start.toLowerCase() === "delete") {
  start = prompt("What is the index of the ToDo you wish to remove?");
}

while (start.toLowerCase() === "quit") {}
