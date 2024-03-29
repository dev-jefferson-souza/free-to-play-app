import { View, Text, ScrollView, FlatList } from "react-native"
import React from "react"
import { CardLarge } from "../../components/Home/CardLarge/CardLarge"
import { Logo } from "../../components/Logo/Logo"
import { Statusbar } from "../../components/Statusbar/Statusbar"
import { styles } from "./styles"
import ftpService from "../../api/service/FreeToPlayService"
import { CardMedium } from "../../components/Home/CardMedium/CardMedium"
import { GameContext } from "../../context/GameContext"
import { Loading } from "../../components/Loading/Loading"
import { ButtonFilter } from "../../components/Home/Button/ButtonFilter"
import { ModalFilter } from "../../components/Home/Modal/ModalFilter"
import { ButtonRandom } from "../../components/Home/Button/ButtonRandom"

interface dataResponseProps  {
    title: string,
    publisher: string
    genre: string,
    thumbnail: string,
    id: number
}

export const Home = ({navigation}) => {

    const { setGame } = React.useContext(GameContext)
    React.useEffect(() => {
        setGame(null)
        getGames(),
        getCategory()
    }, [])

    const [dataCardLarge, setDataCardLarge] = React.useState<any>(null)
    const [dataFPS, setDataFPS] = React.useState()
    const [isSelectedModal, setIsSelectedModal] = React.useState(false);

    
    const getGames = async () => {
      
        const response1 =  await ftpService.getGame(212)
        const response2 =  await ftpService.getGame(188)
        const response3 =  await ftpService.getGame(523)
        const response4 =  await ftpService.getGame(261)
        const response5 = await ftpService.getGame(540)

        const dataResponse : Array<dataResponseProps> = ([ response1.data, response2.data, response3.data, response4.data, response5.data ])
        setDataCardLarge(dataResponse)
    }

    const getCategory = async () => {
        const response =  await ftpService.getCategory('shooter')
        const dataResponse = (response.data)
        setDataFPS(dataResponse)
    }

    const goGameInfo = (id) => {
        setGame(id)
        navigation.navigate("GamePage")  
    }

    const randomGame = async () => {
        const randomId = Math.floor(Math.random() * (550 - 1 + 1) + 1)
        try{
            const response = await ftpService.getGame(randomId)
            if(response.status == 200){
                goGameInfo(randomId)
            }else if(response.status == 404){
                randomGame()
            }
        }catch (err){
            randomGame()
        }
    }


    if(dataCardLarge == null){
        return(
            <View>
                <Statusbar/>
                <Loading visible={true}/>
            </View>
        )
    } else{
        return(
        <View style={styles.container}>
            <Statusbar/>
            <ModalFilter
                isSelectedModal={isSelectedModal}
                setIsSelectedModal={setIsSelectedModal}
                onPress={() => navigation.navigate("FilteredSearch")}
            />
            <View style={{width: 75, height: 75, marginBottom: 20, alignSelf:"center"}}>
                <Logo/>
            </View>
            <Text style={styles.subtitle}>How about something new?</Text>
                <FlatList
                    initialNumToRender={3}
                    style={{height: 0}}
                    horizontal={true}
                    data={dataCardLarge}
                    renderItem={({item, index, separators}) => (
                        <ScrollView horizontal={true}>
                                <CardLarge
                                    onPressBtn={() => goGameInfo(item.id)}
                                    id={item.id}
                                    title={item.title}
                                    genre={item.genre}
                                    publisher={item.publisher}
                                    thumbnail={item.thumbnail}
                                />
                            <View style={{marginHorizontal: 7}}/>
                        </ScrollView>
                    )}
                />
                <Text style={styles.subtitle}>Do you like FPS?</Text>
                <FlatList
                    initialNumToRender={3}
                    horizontal={true}
                    data={dataFPS}
                    renderItem={({item, index, separators}) => (
                        <ScrollView horizontal={true}>
                            <CardMedium
                                onPressBtn={() => goGameInfo(item.id)}
                                id={item.id}
                                title={item.title}
                                genre={item.genre}
                                publisher={item.publisher}
                                thumbnail={item.thumbnail}
                            />
                            <View style={{marginHorizontal: 7}}/>
                        </ScrollView>
                    )}
                />
                <ButtonFilter onPress={() => setIsSelectedModal(true)}/>
                <ButtonRandom onPress={() => randomGame()}/>
        </View>
        )
    }
}