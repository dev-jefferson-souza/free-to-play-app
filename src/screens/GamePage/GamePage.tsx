import { View, Text, ScrollView, FlatList, TouchableHighlight, Linking  } from "react-native"
import React from "react"
import { Statusbar } from "../../components/Statusbar/Statusbar"
import { styles } from "./styles"
import { ImageLarge } from "../../components/GamePage/CardLarge/ImageLarge"
import ftpService from "../../api/service/FreeToPlayService"
import { dataResponseProps } from "./GameProps"
import { GameContext } from "../../context/GameContext"
import { Loading } from "../../components/Loading/Loading"
import { Screenshots } from "../../components/GamePage/Screenshots/Screenshots"
import { InfoLine } from "../../components/GamePage/InfoLine/InfoLine"
import { ButtonPlay } from "../../components/GamePage/Button/ButtonPlay"

export const GamePage = () => {

    const { game } = React.useContext(GameContext)
    
    const placeHolderObj : dataResponseProps = {
        title: '', genre: '', id: null, publisher: '', developer: '', release_date:'', description:'',
        screenshots: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/A_black_image.jpg/640px-A_black_image.jpg',
        game_url: 'https://www.freetogame.com',
        thumbnail: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/A_black_image.jpg/640px-A_black_image.jpg',  
    }

    React.useEffect(() => {
        getGameInfo(game)
    }, [])

    const getGameInfo = async (id) => {
        const response =  await ftpService.getGame(id)
        const screenshots = response.data.screenshots
        const requirement = response.data.minimum_system_requirements
        setGameInfo(response.data)
        setScreenshots(screenshots)
        requirement != null ? setSystemRequirement(requirement) : setSystemRequirement({os: '?', processor:"?", memory:'?', graphics:'?'})
    }
  
    const [numberLines, setNumberLines] = React.useState<number>(3)
    const handleNumberLines = () => {
        numberLines === 3 ? setNumberLines(100) : setNumberLines(3)
    }

    const [numberLinesProcessor, setNumberLinesProcessor] = React.useState<number>(1)
    const handleNumberLinesProcessor = () => {
        numberLinesProcessor === 1 ? setNumberLinesProcessor(10) : setNumberLinesProcessor(1)
    }

    const [numberLinesGraphics, setNumberLinesGraphics] = React.useState<number>(1)
    const handleNumberLinesGraphics = () => {
        numberLinesGraphics === 1 ? setNumberLinesGraphics(10) : setNumberLinesGraphics(1)
    }

    const [gameInfo, setGameInfo] = React.useState<any>(placeHolderObj)
    const [screenshots, setScreenshots] = React.useState<any>('')
    const [systemRequirement, setSystemRequirement] = React.useState<any>('')

    if(gameInfo.title == '' || screenshots == ''){
        return(
            <Loading visible={true}/>
        )
    }else{
        return(
            <View>
                <Statusbar/>
                <ScrollView style={styles.container}>
                    <ImageLarge thumbnail={gameInfo.thumbnail} title={gameInfo.title}/>
                    <View style={{marginVertical:8}}/>
                    <Text style={styles.subtitle}>Description</Text>
                    <Text onPress={() => handleNumberLines()} style={styles.descriptionText} numberOfLines={numberLines}>{gameInfo.description}</Text>
                    <View
                        style={{paddingHorizontal:24, marginBottom: 16}}
                    >
                        <FlatList
                            horizontal={true}
                            data={screenshots}
                            renderItem={({item, index, separators}) => (
                                <ScrollView horizontal={true}>
                                    <Screenshots screenshots={item.image}/>
                                    <View style={{marginRight: 12}}/>
                                </ScrollView>
                            )}
                        />
                    </View>
                    <View style={{width: '100%', paddingHorizontal: 32, marginBottom: 48}}>
                        <View style={{marginBottom: 24}}/>
                        <Text style={styles.minimumText}>Minimum System Requirements</Text>
                        <InfoLine subtitle={'OS:'} content={systemRequirement.os} numberOfLines={1}/>
                        <InfoLine subtitle={'Memory:'} content={systemRequirement.memory} numberOfLines={1}/>
                        <TouchableHighlight onPress={() => handleNumberLinesProcessor()}>
                            <InfoLine subtitle={'Processor:'} content={systemRequirement.processor} numberOfLines={numberLinesProcessor}/>
                        </TouchableHighlight>
                        <TouchableHighlight onPress={() => handleNumberLinesGraphics()}>
                            <InfoLine subtitle={'Graphics:'} content={systemRequirement.graphics} numberOfLines={numberLinesGraphics}/>
                        </TouchableHighlight>

                        <View style={{marginBottom: 24}}/>
                        <Text style={styles.minimumText}>About</Text>
                        <InfoLine subtitle={'Publisher:'} content={gameInfo.publisher} numberOfLines={1}/>
                        <InfoLine subtitle={'Developer:'} content={gameInfo.developer} numberOfLines={1}/>
                        <InfoLine subtitle={'Release Date:'} content={gameInfo.release_date} numberOfLines={1}/>
                    </View>
                </ScrollView>
                <ButtonPlay onPress={() => Linking.openURL(gameInfo.game_url)}/>
            </View>
        )
    }
}