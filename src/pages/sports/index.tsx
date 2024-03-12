/* eslint-disable @typescript-eslint/no-unused-vars */
import {useNavigate} from "react-router-dom"

import { useState, } from "react";

const Sports = () => {
  const navigate=useNavigate();
  const[roomId,setroomId]=useState('')
  function handleJoin(){
navigate(`/account/sport/${roomId}`)
  }
  return (
<main><h1>Video application</h1>


<input type="text" placeholder="Enter Room Id"
value={roomId}
onChange={(e)=>setroomId(e.target.value)}/>
<button onClick={handleJoin} className="bg-blend-color-dodge"> Click</button>

</main>
  )
}
export default Sports;