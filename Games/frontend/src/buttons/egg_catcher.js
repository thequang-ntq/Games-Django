import React from 'react'
import { useNavigate } from "react-router-dom"

function EggCatcher(){
    const navigate = useNavigate()
    function click(){  
        navigate('/egg_catcher')
    }
    return(
        <button className="But"
            color="#f194ff"
            onClick={click}
        >
            Egg Catcher
        </button>
    )
}
export default EggCatcher