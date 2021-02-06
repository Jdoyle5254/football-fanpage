function Player (props) {
     const playerConditional = props.hobbies.length <= 0 ? <p>No Hobbies Given</p> 
     :  <li>{props.hobbies.map(hobby => {return (<li>{hobby}</li>)  })}</li>
      

     console.log("player props", props)
     return (
     <div>
     <h3>Player Name: {props.firstName}</h3>
     <p>Jersey Number: {props.jerseyNumber} </p>
      <ul> Hobbies:
          {playerConditional}
       </ul>
     </div>
     
 
     ) 
     
     // if no hobby 
// return { if no hobby yad
// else return Hobby}
     
}

export default Player; 

// updating data so files will push up 

// player name H3   
// add list of hobbies under each player
