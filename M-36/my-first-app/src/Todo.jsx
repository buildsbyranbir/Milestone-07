/* export default function ToDo({task, isDone}){
    return(
        <li>Task:{task}</li>
    )
} */

/* 
export default function ToDo({task, isDone}){
    if(isDone === true){
        return <li>Done: {task}</li>;
    }
    else{
        return <li>Do now: {task}</li>;

    }
} */


// conditional rendering: 3 ternary
// condition ? true :  false
/* export default function ToDo({task, isDone, time = 0}){
    return isDone ?
    <li>Done: {task} time
    : {time}</li> : <li>Not Done:{task}</li>
}
 */

// conditional rendering: 4 &&
/* export default function ToDo({task, isDone, time = 0}){
    return isDone && <li>Done Tasks: {task} time: {task} time: {time}</li>
} */

// conditional rendering: 5 ||
/* export default function ToDo({task, isDone, time = 0}){
    return isDone || <li>Not Done Tasks: {task} time: {time} time: {time}</li>
} */


// conditional rendering: use variable
export default function ToDo({ task, isDone, time }) {
  const displayTime = time ? time : 100; // যদি time না পাঠানো হয়, তাহলে default 100
  let listItem;

  if (isDone === true) {
    listItem = <li>✅ Done: {task} — Time: {displayTime}</li>;
  } else {
    listItem = <li>🕒 Pending: {task} — Time: {displayTime}</li>;
  }

  return listItem;
}
