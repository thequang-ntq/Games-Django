import React from 'react'
import DotConnect from '../buttons/dot_connect';
import EggCatcher from '../buttons/egg_catcher';
import RockPaperScissor from '../buttons/rock_paper_scissor';
function Home() {
    return(
        <div>
            <header className="App-header">
                <DotConnect></DotConnect>
                <EggCatcher></EggCatcher>
                <RockPaperScissor></RockPaperScissor>
            </header>
        </div>
    )
}
export default Home