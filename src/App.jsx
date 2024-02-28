import {Routes, Route} from 'react-router-dom'; // this is my code 
import { useEffect, useState } from 'react' // my code
import './App.css'
import AllPlayers from './components/AllPlayers' // my code
import NewPlayerForm from  './components/NewPlayerForm' // my code
import SinglePlayer from './components/SInglePlayer' // my code 

function App (){
  const [players, setPlayers] = useState ([]) // my code
  useEffect (() => {
    async function fetchPlayers (){
      let response = await fetch (' https://fsa-puppy-bowl.herokuapp.com/api/2401-ftb-et-web-ft/players.') // api goes here
      let json = await response.json ()
      setPlayers(json.data)
    }
    fetchPlayers()
  }, [])
  return (
    <Routes>
      <Route path='/' element = {<AllPlayers/>}/>
      <Route path='/players/:id' element = {<SinglePlayer/>}/>
    </Routes>
  )
}



export default App
