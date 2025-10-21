import Counter from './Counter';
import './App.css'

// Normal function declaration
function App() {
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