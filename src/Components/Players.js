import React from "react";
import player from "../CSS/players.module.css";
import { useLocation } from "react-router";

function Players(props) {
  const location = useLocation()
  let propsData = location.state;
  console.log(propsData)
  return (
    <React.Fragment>
      <section className={player.playerSection}>
        {propsData.map((item, index)=>{
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
