import React from 'react'
import { useNavigate } from "react-router-dom"

function RockPaperScissor(){
    const navigate = useNavigate()
    function click(){  
        navigate('/rock_paper_scissor')
    }
    return(
        <button className="But"
            color="#f194ff"
            onClick={click}
        >
            Rock Paper Scissor
        </button>
    )
}
export default RockPaperScissor