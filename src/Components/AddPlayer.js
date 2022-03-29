import axios from 'axios'
import React, { useState } from 'react'
import  "../CSS/addPlayer.css"
function AddPlayer() {
  const [file, setFile] = useState() 
 console.log(file)
  const addUser = (e) => {
    e.preventDefault()
    const data = {
      playerName: e.target.playerName.value,
      from: e.target.team.value,
      price: e.target.price.value,
      isPlaying: e.target.isPlaying.value,
      description: e.target.skills.value
    }

    let formdata = new FormData()
    formdata.append("code", JSON.stringify(e.target.code.value))
    formdata.append("data", JSON.stringify(data) )
    formdata.append("pImage", file)


    const code = e.target.code.value
  
    axios({
      method: "post",
      url: "/addPlayers",
      headers:{
      "Content-type":  "application/json"
      },
      data: formdata
    })
      .then(res => {
        const char = "Invalid_Code"
        const response = res.data
        console.log(response)
        // if(response.operation === "success") document.getElementById("playerform").reset()
        
        // else if(response.indexOf(char)=== 0){
        //   document.getElementById("prompt").textContent = response
        // }
      })
  }
  return (
    < >
      <form  action="/addPlayers" method='post' onSubmit={addUser} id="playerform" role="form" encType='multipart/form-data'>
        <div id="prompt"></div>
        <label>Player Name<br></br>
          <input type="text" required name="playerName"></input>
        </label><br></br>

        <label>Player Image<br></br>
          <input type="file" accept="image/png , image/jpg" required name="pImage" onChange={(e)=>setFile(e.target.files[0])}></input>
          <div id= "display_image"></div>
        </label><br></br>

        <label>Select Team<br></br>
          <select required name="team">
            <option value=""></option>
            <option value="CSK">Chennai Super Kings</option>
            <option value="MI">Mumbai Indians</option>
            <option value="DC">Delhi Capitals</option>
            <option value="KXIP">Kings XI Punjab</option>
            <option value="KKR">Kolkata Knight Riders</option>
            <option value="SRH">Sunrisers Hyderabad</option>
            <option value="RCB">Royal Challengers Banglore</option>

          </select>
        </label><br></br>
        <label>Player Price<br></br>
          <input type="number" name="price" required></input>
        </label><br></br>

        <label>IS Playing<br></br>
          <select required name="isPlaying">
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </label><br></br>

        <label>Player Skills<br></br>
        <input type="text" required name="skills"></input>   
        </label><br></br>

        <label>Code<br></br>
          <input inputMode='numeric' required name="code"></input>   
        </label><br></br>

        <input id="submit" type="submit" value="AddPlayer"></input>
      </form>
    </>
  )
}

export default AddPlayer