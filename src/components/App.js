
import '../App.css';
import Welcome from './Welcome'
import {playerData} from '../data/playerData'
import PlayerList from './PlayerList'
import Favorite from './Favorite'
import React, { useState } from 'react'


function App() {
  const {favorites, setFavorites} = useState()

  const addFavorite = (id) => {
    console.log("hi mom", id)
  const foundPlayer = playerData.find(player => player.id === id)
  
  const updatedFavorites = favorites.slice();
   updatedFavorites.push(foundPlayer);
   setFavorites(updatedFavorites)
   console.log("updated", updatedFavorites)
  }
  //  useEffect(()=> console.log(favorites))
  
  return (
    <div className="container">
      <Welcome />
      <PlayerList 
      players={playerData}
      addFavorite={addFavorite} />
      <Favorite 
        favs={favorites}
      /> 
       
    </div>
  );
}

export default App;

