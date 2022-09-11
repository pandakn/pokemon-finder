import React from 'react'
import './Card.css'

function Card({ id, name, baseExp, weight, height }) {
  return (
    <div>

      <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
        <img className="pokemon_jump rounded-t-lg" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`} />
        <div className="p-5 text-center">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white capitalize">{name}</h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 ">Base EXP: {baseExp}</p>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 ">
            <span className='mr-3'>Weight: {weight} </span>
            <span>Height: {height}</span>
            </p>
        </div>
      </div>

    </div>
  )
}

export default Card