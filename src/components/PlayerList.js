import Player from './Player'

function PlayerList(props){
    
    //create a list of Player components
    const allPlayers = props.players.map(player => {
        return (
        <Player 
        id={player.id} 
        key={player.id}
        firstName={player.firstName} 
        lastName={player.lastName} 
        jersey={player.jerseyNumber}
        hobbies={player.hobbies} 
        addFavs={props.addFavorite} />)
        
    });
    return <div> {allPlayers} </div> 
}

export default PlayerList; 