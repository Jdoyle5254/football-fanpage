import Player from './Player'

function Favorite(props) {
    console.log('favorites', props)
    const favoritePlayers = props.split(',')
    
    const favPlayer = favoritePlayers.map((player) => {
        return ( 
            <li>{player.firstName}</li>
        ) })

    return (
        <div>
       
        <h2>Favorite players</h2>
            {favPlayer}
        
        </div>
    )
}

export default Favorite; 

