import { GameContext } from '../context/GameContext';
import React from "react"
import { PrivateRoute } from './private.routes';
import { PublicRoute } from './public.routes';


export const Routes = () => {

  const { auth } = React.useContext(GameContext)
  
  return(
    auth ? <PrivateRoute/> : <PublicRoute/> 
  )
}