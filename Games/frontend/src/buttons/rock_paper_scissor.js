import React from 'react'
import { Navigate } from "react-router-dom"
class rock_paper_scissor extends React.Component{
    render(){
        function click(){
            <Navigate to = '/rock_paper_scissor' replace = 'true'></Navigate>
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
}
export default rock_paper_scissor