
import '../App.css';
import Welcome from './Welcome'
import {playerData} from '../data/playerData'
import PlayerList from './PlayerList'
import Favorite from './Favorite'
import React, {useState} from 'react'


function App() {
  const {favorites, setFavorites} = useState()

  const addFavorite = (id) => {
    console.log('hi mom', id)
    /*
    using the id, find the player object in the playerData array take the found player and mot it into the favorite array

    */
   const foundPlayer = playerData.find(player => player.id === id)
   console.log('foundplayer', foundPlayer)
   const updatedFavorites = favorites.slice()
   updatedFavorites.push(foundPlayer)
   setFavorites([updatedFavorites])

  }

  return (
    <div className="container">
      <Welcome />
      <PlayerList 
      players={playerData}
      addFavorite={addFavorite} />
      <Favorite />
       
    </div>
  );
}

export default App;

