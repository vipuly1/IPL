import React, { useState, useEffect } from "react";
import home from "../CSS/Homepage.module.css";
import axios from "axios";
import Players from "./Players";

function Homepage() {
  const [players, setPlayers] = useState([]);
  const [searchText, setSearchText] = useState("");

  console.log(players)

const user = JSON.parse(localStorage.getItem("loginStatus")).user
  useEffect(() => {
    axios
      .get(`players/${searchText}`)
      .then((res) => {
        setPlayers(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [searchText]);

  const handleClick=()=>{
      axios({
          method: "post",
          url: "validateUser",
          headers:{
            "Authorization": `${user}`
          }        
      }).then((response)=>{
          console.log(response.data)

          if(response.data == "Admin"){ window.location.href = "./add-players"}
          else {console.log("You are not admin")}
      })
  }

  return (
    <>
      <header>
        <nav>
          <div className={home.logo}></div>
          <div className={home.search}>
            <input
              type="text"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            ></input>
          </div>
          <button onClick={handleClick}>Add Players</button>
        </nav>
      </header>
      <article>
        {players.map((item, id) => {
          return <Players key={id} playersList={item} />;
        })}
      </article>
    </>
  );
}

export default Homepage;
