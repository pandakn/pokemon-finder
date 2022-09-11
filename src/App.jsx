import { useState, useEffect } from 'react'
import Card from './components/Card'
import Search from './components/Search'

function App() {
  const [name, setName] = useState('pikachu')
  const [data, setData] = useState([])
  const [err, setErr] = useState(false)

  async function getPokemon() {
    try {
      setErr(false)
      let result = await fetch(`https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`);
      let pokemonData = await result.json();
      setData(pokemonData);
    } catch (err) {
      setData(false);
      setErr(true);
    }
  }

  useEffect(() => {
    getPokemon();
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    getPokemon();
  }

  return (
    <div className='flex flex-col justify-center items-center bg-slate-700 h-screen'>
      <Search name={name} setName={setName} handleSubmit={handleSubmit}/>

      {err ? (
        <h3 className='text-white text-2xl'>Pokemon not found!</h3>
      ) : (
        <Card id={data.id} name={data.name} baseExp={data.base_experience} weight={data.weight} height={data.height}/>
      )}
    </div>
  )
}

export default App
