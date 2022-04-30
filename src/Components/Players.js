import React from "react";
import player from "../CSS/players.module.css";
import { useLocation } from "react-router";

function Players(props) {
  const location = useLocation()
  let {playerlist, team} = location.state;
  const filteredPlayerList = playerlist.filter(item=> {return item.from === team})
  console.log(playerlist,team,)
  console.log(filteredPlayerList)

  
  

  return (
    <React.Fragment>
      <section className={player.playerSection}>
        {(filteredPlayerList === undefined || filteredPlayerList.length === 0 ) ? <span>No players in the team</span> : playerlist.filter(item=> item.from === team).map((item, index)=>{
          console.log(item.from)
          return <div key={index}className={player.playerCard}>
          <div className={player.imageSection}>
            <img src= {`/playerImg/${item.playerImage}`} ></img>
          </div>
          <div className="description-section">
            <p>Name : {item.playerName}</p>
            <p>Team : {item.from}</p>
            <p>skill : {item.description}</p>
            <p>isPlaying : {item.isPlaying}</p>
          </div>
        </div>

        })}
        
      </section>
    </React.Fragment>
  );
}

export default React.memo(Players);
