import { View, Text } from "react-native"
import React from "react"
import { Statusbar } from "../../components/Statusbar/Statusbar"
import { styles } from "./styles"
import { ImageLarge } from "../../components/GamePage/CardLarge/ImageLarge"
import ftpService from "../../api/service/FreeToPlayService"
import { dataResponseProps } from "./GameProps"
import { GameContext } from "../../context/GameContext"
import { Loading } from "../../components/Loading/Loading"


export const GamePage = () => {

    const { game } = React.useContext(GameContext)
    
    const placeHolderObj : dataResponseProps = {
        title: '', genre: '', id: null, publisher: '', developer: '', release_date:'', short_description:'',
        game_url: 'https://www.freetogame.com',
        thumbnail: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/A_black_image.jpg/640px-A_black_image.jpg',  
    }

    React.useEffect(() => {
        getGameInfo(game)
    }, [])

    const getGameInfo = async (id) => {
        const response =  await ftpService.getGame(id)
        setGameInfo(response.data)
    }
  
    const [gameInfo, setGameInfo] = React.useState<dataResponseProps>(placeHolderObj)

    if(gameInfo.title == ''){
        return(
            <Loading visible={true}/>
        )
    }else{
        return(
        <View style={styles.container}>
            <Statusbar/>
            <ImageLarge thumbnail={gameInfo.thumbnail} title={gameInfo.title}/>
            <Text></Text>
        </View>
        )
    }
}