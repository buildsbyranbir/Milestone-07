import Counter from './Counter';
import './App.css'
import Batsman from './Batsman'
import Users from './Users';
import { Suspense } from 'react';
import Friends from './Friends';

const fetchUsers = fetch('https://jsonplaceholder.typicode.com/users')
.then(res => res.json())

const fetchFriends =async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  return res.json();
}
// Normal function declaration
function App() {
  const friendsPromise = fetchFriends();

  function handleClick() {
    alert('Button clicked!')
  }

  // Arrow function declaration
  const handleClick3 = () => {
    alert('Clicked 3')
  }

  const handleAdd5 = (num) => {
    const newNum = num + 5;
    alert(newNum);
  }
  return (
    <>
  
      <h3>Vite + React</h3>
      <Suspense  fallback={ <h3>Loading...</h3>}>
        <Users fetchUsers ={fetchUsers}></Users>
      </Suspense>

      <Suspense fallback={ <h3>Friends are coming for treat...</h3>}>
        <Friends friendsPromise={friendsPromise}></Friends>
      </Suspense>

      <Batsman></Batsman>
      <Counter></Counter>

      {/* normal function */}
      <button  onClick={handleClick}>Click Me</button>
      <button  onClick={function handleClick2(){
        alert('Button 2 clicked!')
      }}>Click Me</button>
    
    {/* arrow function */}
    <button onClick={handleClick3}>Click Me3</button>

    <button onClick={() => alert('Click 4')}>Click 4</button>
  {/* function with parameter */}
    <button onClick={() => handleAdd5(7)}>Click Add 5</button>
    </>
  )
}



export default App