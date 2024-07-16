
//REFERENCE FROM SOURCE: 
// https://www.geeksforgeeks.org/create-rock-paper-scissor-game-using-reactjs/

import React, {Component} from 'react'

class RockPaperScissor extends Component{
    constructor(props) {
        super(props)
        this.state = {
            playerVal : null,
            computerVal : null,
            playerScore: 0,
        };
    }
    logic = (playerVal, computerVal) =>{
        if(playerVal === computerVal){
            return 0;
        } 
        else if ((playerVal === "ROCK" && computerVal === "SCISSORS") ||
            (playerVal === "SCISSORS" && computerVal === "PAPER") ||
            (playerVal === "PAPER" && computerVal === "ROCK")) 
        {
            return 1;
        } 
        else {
            return -1;
        }
    }
 
    decision = (playerChoice) => {
        const choices = ["ROCK", "PAPER", "SCISSORS"];
        const compChoice =  choices[Math.floor(Math.random() * choices.length)];
        const val = this.logic(playerChoice, compChoice)
        if(val === 1) {
            this.setState({
                playerVal: playerChoice,
                computerVal : compChoice, 
                playerScore : this.state.playerScore +1
            })
        } 
        else if(val === -1) {
            this.setState({
                playerVal: playerChoice,
                computerVal : compChoice,
                playerScore : this.state.playerScore -1,
            })
        } 
        else {
            this.setState({
                computerVal : compChoice,
                playerVal : playerChoice
            })
        }
    }
    render(){
        const {playerVal, computerVal, playerScore} = this.state;
        return(
            <div className="rpsContainer">
                <h1>Rock Paper Scissor</h1>
                <div className="rpsMain">
                    <button className="rpsBut" onClick={()=> this.decision("ROCK")}>
                        <i className={`fas fa-hand-rock`} /> Rock
                    </button>
                    <button className="rpsBut" onClick={()=> this.decision("PAPER")}>
                        <i className={`fas fa-hand-paper`} /> Paper
                    </button>
                    <button className="rpsBut" onClick={()=> this.decision("SCISSORS")}>
                        <i className={`fas fa-hand-scissors`} />  Scissor
                    </button>
                </div>
                <div className="rpsScore">
                    <p>Your choice: {playerVal}</p>
                    <p>Computer's choice: {computerVal}</p>
                    <h2>Your Score: {playerScore}</h2>
                </div>
            </div>
        )
    }
}
export default RockPaperScissor