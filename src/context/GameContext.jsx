import React from "react";

export const GameContext = React.createContext();

export const GameProvider = ({children}) => {

 
    const [game, setGame] = React.useState(null);

    return (
        <GameContext.Provider value={{game, setGame}}>
            {children}
        </GameContext.Provider>
    )
}