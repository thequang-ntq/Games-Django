import React from 'react'
import { useNavigate } from "react-router-dom"

function DotConnect(){
    const navigate = useNavigate()
    function click(){  
        navigate('/dot_connect')
    }
    return(
        <button className="But"
            color="#f194ff"
            onClick={click}
        >
            Dot Connect 
        </button>
    )
}
export default DotConnect