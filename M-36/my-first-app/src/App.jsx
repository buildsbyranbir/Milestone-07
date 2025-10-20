
import './App.css'
// ToDo file ti import kora hoiche
import ToDo from './Todo';
import Actor from './Actor';

function App() {
  const actors = ['Bappa Raj', 'Omar Sunny',  'Salman Shah']
  return (
    <>
      <h1>React Core Concepts</h1>
      {
        actors.map(actor => <Actor actor={actor}></Actor>)
      }
      
      {/* <ToDo task="Learn React" isDone={true}></ToDo>
      <ToDo task="Learn JS" isDone={false}></ToDo>
      <ToDo task="Learn Python" isDone={true}></ToDo> */}


      {/* <Person></Person>
      <Person></Person>
      <Sports></Sports>
      <Student></Student>
      <Student></Student>
      <Never></Never>
      <Developer name="Mozumder" tech="Python"></Developer>
      <Developer name="Rajan" tech="Java"></Developer>
      <Player name="Tamim" runs="5000"></Player> */}
    </>
  )
}


/* function Person(){
  const age = 17;
  return(
    <p>I am a person{age}</p>
  )
}


function Sports(){
  return(
    <><><h3>Cricket</h3>
      <p> Playing and losing</p></>
      <ul>
        <li>Apple</li>
        <li>Banana</li>
        <li>Temarind</li>
      </ul></>
  )
} */
/* 
  function Student(){
    return(
      <div className='student'>
        <p>Name:</p>
        <p>Dept:</p>
      </div>
    )
  }

  function Never(){
    // chaile eivabeo style deoya jay
    const NeverStyle ={
      color:'green',
      textAlign:'right'
    }
    return(
      <p style={NeverStyle}>Never Give Up</p>
    )
  }


  // props diye
  function Developer(props){
    console.log(props)
    return(
      <div className='developer'>
        <h2>Developer:{props.name}</h2>
      <h3>Technology:{props.tech}</h3>
      </div>
    )
  }


  // Another Way
  function Player({name, runs}){
    return(
      <div className='student'>
        <h3>Name:{name}</h3>
        <p>Runs:{runs}</p>
      </div>
    )
  } */
export default App
