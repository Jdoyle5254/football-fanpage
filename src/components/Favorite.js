import Player from './Player'

export default function Favorite(props) {
    console.log('favorites', props.favorites)
    
    const favoritePlayers = props.favorites
    .map(player => {
        return (
            <li>{player.firstName}</li>
        )
    })
     
      

    return (
        <div>
       
        <h2>Favorite players</h2>
            {favoritePlayers}
        
        </div>
    )
}

 
