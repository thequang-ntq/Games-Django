import React from 'react'
import { Navigate } from "react-router-dom"
class egg_catcher extends React.Component{
    render(){
        function click(){
            <Navigate to = '/egg_catcher' replace = 'true'></Navigate>
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
}
export default egg_catcher