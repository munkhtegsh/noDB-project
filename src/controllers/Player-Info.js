import React from 'react';
import './Players.css';

export default (props) => {
    return (  
        <div className="players">
            <img src={props.img} width="100" alt="player image"/>
            <br/>
            <input type="text" name="name" value={props.name} onChange={(e) => props.updateInfo(e.target.value, e.target.name)}/>
            <br/>
            <button onClick={props.updateStats}>Update</button>
            <button onClick={() => props.removePlayer(props.id)}>Remove</button>            
        </div>
        // <div className="players-container">
        //     <div className="players">

        //     </div>
        // </div> 
    )
}

// // this.changeName = this.changeName.bind(this)
// // this.changeTeam = this.changeTeam.bind(this)
// // this.changePoints = this.changePoints.bind(this)
// // this.changeRebounds = this.changeRebounds.bind(this)




