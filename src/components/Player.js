function Player (props) {
     console.log("player props", props)
     return (
     <div>
     <h3>Player Name: {props.firstName}</h3>
     <p>Jersey Number: {props.jerseyNumber} </p>
      <ul> Hobbies:
          <li>{props.hobbies.map(hobby => {return (<li>{hobby}</li>)})}</li>
       </ul>
     </div>
     
 
     ) 
     

     
}

export default Player; 

// updating data so files will push up 

// player name H3   
// add list of hobbies under each player
