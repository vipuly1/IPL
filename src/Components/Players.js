import React from "react";
import player from "../CSS/players.module.css";

function Players(props) {
  let propsData = props.playersList;
  console.log(propsData.playerImage);
  return (
    <React.Fragment>
      <section className={player.playerSection}>
        <div className={player.playerCard}>
          <div className={player.imageSection}>
            <img src= {`./playerImg/${propsData.playerImage}`} ></img>
          </div>
          <div className="description-section">
            <p>Name : {propsData.playerName}</p>
            <p>Team : {propsData.from}</p>
            <p>skill : {propsData.description}</p>
            {propsData.isPlaying === true ? (
              <p>isPlaying: Yes </p>
            ) : (
              <p>isPlaying: No</p>
            )}
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

export default Players;
