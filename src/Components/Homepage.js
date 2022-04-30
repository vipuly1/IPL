import React, { useState, useEffect } from "react";
import "../CSS/Homepage.css";
import axios from "axios";
import Players from "./Players";
import react from "react";
import { Link } from "react-router-dom";

function Homepage() {
  const [players, setPlayers] = useState([]);
  const [teams, setTeams] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [showPlayers, setShowPlayers] = useState(false);

  const user = JSON.parse(localStorage.getItem("loginStatus")).user;
  useEffect(async () => {
    await axios
      .get(`players/${searchText}`)
      .then((res) => {
        setPlayers(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [searchText]);

  
  const handleClick = () => {
    axios({
      method: "post",
      url: "validateUser",
      headers: {
        Authorization: `${user}`,
      },
    }).then((response) => {
      console.log(response.data);

      if (response.data == "Admin") {
        window.location.href = "./add-players";
      } else {
        console.log("You are not admin");
      }
    });
  };

  const loadPlayers = (e) => {
    setSearchText(e.target.textContent)
    console.log(players)
 
    //setShowPlayers(true);
  };

  return (
    <>
      <header>
        <nav>
          <div className="logo"></div>
          <div className="search">
            <input
              type="text"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            ></input>
          </div>
          <button onClick={handleClick}>Add Players</button>
        </nav>
      </header>
      <div className="cardContainer">
        <Link to="/players" state={{playerlist:players, team: "CSK"}}>
          <div className="card csk" onClick={loadPlayers}></div>
        </Link>
        <Link to="/players" state={{playerlist:players, team: "MI"}}>
          <div className="card mi" onClick={loadPlayers}></div>
        </Link>
        <Link to="/players" state={{playerlist:players, team: "KKR"}}>
          <div className="card kkr" onClick={loadPlayers}></div>
        </Link>
        <Link to="/players" state={{playerlist:players, team: "DC"}}>
          <div className="card dc" onClick={loadPlayers}></div>
        </Link>
        <Link to="/players" state={{playerlist:players, team: "RCB"}}>
          <div className="card rcb" onClick={loadPlayers}></div>
        </Link>
      </div>
    </>
  );
}

export default Homepage;
