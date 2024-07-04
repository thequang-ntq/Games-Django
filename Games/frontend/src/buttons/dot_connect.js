import React from 'react'
import { Navigate } from "react-router-dom"
class dot_connect extends React.Component{
    render(){
        function click(){
            <Navigate to = '/dot_connect' replace = 'true'></Navigate>
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
}
export default dot_connect