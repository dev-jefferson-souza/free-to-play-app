import { View, Text, Image, TouchableOpacity, ScrollView, FlatList } from "react-native"
import React from "react"
import { CardLarge } from "../../components/Home/CardLarge/CardLarge"
import { Logo } from "../../components/Logo/Logo"
import { Statusbar } from "../../components/Statusbar/Statusbar"
import { styles } from "./styles"
import ftpService from "../../api/service/FreeToPlayService"

interface dataResponseProps {
    title: string,
    publisher: string
    genre: string,
    thumbnail: string,
    id: number

}

export const Home = () => {

    React.useEffect(() => {
        getGames()
    }, [])

    const [dataCardLarge, setDataCardLarge] = React.useState([{}])
    

    const getGames = async () => {
      
        const response1 =  await ftpService.getGame(212)
        const response2 =  await ftpService.getGame(521)
        const response3 =  await ftpService.getGame(523)
        const response4 =  await ftpService.getGame(261)
        const response5 = await ftpService.getGame(540)

        const dataResponse : Array<any> = ([
            response1.data,
            response2.data,
            response3.data,
            response4.data,
            response5.data
        ])
        setDataCardLarge(dataResponse)
    }


    
    return(
    <View style={styles.container}>
        <Statusbar/>
        <View style={{width: 75, height: 75, marginBottom: 20, alignSelf:"center"}}>
            <Logo/>
        </View>
        <Text style={styles.subtitle}>How about something new?</Text>
            <FlatList
                horizontal={true}
                data={dataCardLarge}
                renderItem={({item, index, separators}) => (
                    <ScrollView horizontal={true}>
                        <CardLarge
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
    </View>
    )
}