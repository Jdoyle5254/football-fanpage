export default function Player(props) {
     const playerConditional = props.hobbies.length <= 0 ? <p>No Hobbies Given</p> 
     :  <li>{props.hobbies.map(hobby => {return (<li>{hobby}</li>)  })}</li>
      
     return (
     <div>
     <h3>{props.firstName} {props.lastName}</h3>
     <p>Jersey Number: {props.jerseyNumber} </p>
      <ul> 
          {playerConditional}
       </ul>

       <button onClick={() => props.addFav(props.id)}>Add to Favorites</button>
     </div>
     
 
     ) 
     
     // if no hobby 
// return { if no hobby yad
// else return Hobby}
     
}

 

// updating data so files will push up 

// player name H3   
// add list of hobbies under each player
