import React from 'react'
import { useNavigate } from 'react-router-dom';

function Nopage() {
    const navigate = useNavigate()
  return (
    <div>
        <h1> NO CONTENT 4044 ERROR</h1>
        <button onClick={()=>navigate("/")}>PlS Back</button>
    </div>
  )
}

export default Nopage;