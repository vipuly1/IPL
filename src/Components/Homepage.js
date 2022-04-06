import React, { useState, useEffect } from "react";
import "../CSS/Homepage.css";
import axios from "axios";
import Players from "./Players";
import react from "react";
import { Link } from "react-router-dom";


function Homepage() {
  const [players, setPlayers] = useState([]);
  const [teams, setTeams] = useState([])
  const [searchText, setSearchText] = useState("");
  const [showPlayers, setShowPlayers] = useState(false)

  const user = JSON.parse(localStorage.getItem("loginStatus")).user
  useEffect(async () => {
    await axios
      .get(`players/${searchText}`)
      .then((res) => {
        setPlayers(res.data);
        //   if(res.data !== undefined){
        //     let playersTeam = []
        //     for(let i=0; i<res.data.length;i++){
        //       console.log(i)
        //       let teamname = res.data[i].from
        //       console.log(typeof(teamname), typeof(teams.indexOf(teamname)), i)

        //       if(playersTeam.includes(teamname) === false){
        //         playersTeam.push(teamname)
        //         setTeams(teams=>[...teams, teamname])

        //       }
        //     } 
        // }
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
        "Authorization": `${user}`
      }
    }).then((response) => {
      console.log(response.data)

      if (response.data == "Admin") { window.location.href = "./add-players" }
      else { console.log("You are not admin") }
    })
  }

  const loadPlayers=(e)=>{
    let oneTeam = e.target.textContent
    console.log("inside players", oneTeam)
    setShowPlayers(true)

  }

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
        <Link to="/players" state={players}><div className="card csk" onClick={loadPlayers} >CSK</div></Link>
        <div className="card rcb">Hello</div>
        <div className="card mi">Hello</div>
        <div className="card kkr">Hello</div>
        <div className="card dc">Hello</div>
      </div>
    </>
  );
}

export default Homepage;
