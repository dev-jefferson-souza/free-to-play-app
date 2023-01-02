import React from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const GameContext = React.createContext();

export const GameProvider = ({children}) => {

 
    const [game, setGame] = React.useState(null);
    const [auth, setAuth] = React.useState(false)

    const getData = async () => {
        try {
          const value = await AsyncStorage.getItem('@Auth')
          if(value !== null) {
            setAuth(value)
          }
        } catch(err) {
          console.log(err)
        }
      }
      

    React.useEffect(() => {
        getData()
    }, [auth])

    return (
        <GameContext.Provider value={{game, setGame, auth, setAuth}}>
            {children}
        </GameContext.Provider>
    )
}