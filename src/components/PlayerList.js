import Player from './Player'

export default function PlayerList(props){
    
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
        addFav={props.addFavorite} />)
        
    });
    return <div> {allPlayers} </div> 
}

 