import { Suspense, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import navImg from "./assets/logo.png"
import dollarImg from "./assets/DoubleDollar.png";
import AvailablePlayers from './assets/Components/AvailablePlayers/AvailablePlayers'
import SelectedPlayers from './assets/Components/SelectedPlayers/SelectedPlayers'


const fetchPlayer = async () =>{
  const res = await fetch("/players.json")
  return res.json()
}

function App() {
  const playersPromise =fetchPlayer()

  return (
    <>
{/* Navbar */}
                 <div className="navbar max-w-[1200px] mx-auto">
  <div className="flex-1">
    <a className=" text-xl">
      <img className='w-[60px] h-[60px]' src={navImg} alt="" />
    </a>
  </div>
  <div className="flex items-center">
    <span className="mr-2">6000000000</span>
    <span className="mr-2">Coin</span>
    <img src={dollarImg} alt="Double Dollar" className="w-8 h-8" />
  </div>
</div>




<Suspense>
  <AvailablePlayers playersPromise={playersPromise}></AvailablePlayers>
</Suspense>

{/* <SelectedPlayers></SelectedPlayers> */}

    </>
  )
}

export default App
