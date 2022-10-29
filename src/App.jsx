import React from "react";
import Board from "./components/Board/Board";
import Game from "./components/Game/Game";
import './index.css';


const App=()=>{
    return(
    <div>
        <Board />
        <Game />
    </div>
    )
}

export default App;