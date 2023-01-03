import { View, FlatList, Text } from "react-native"
import React from "react"
import { Logo } from "../../components/Logo/Logo"
import { Statusbar } from "../../components/Statusbar/Statusbar"
import { styles } from "./styles"
import ftpService from "../../api/service/FreeToPlayService"
import { GameContext } from "../../context/GameContext"
import { Loading } from "../../components/Loading/Loading"
import { CardSmall } from "../../components/FilteredSearch/CardSmall/CardSmall"


export const FilteredSearch = ({navigation}) => {

    const { setGame } = React.useContext(GameContext)
    const { categoryURI } = React.useContext(GameContext)
    const [categoryData, setCategoryData] = React.useState()
    const [noResults, setNoResults] = React.useState(false)

    React.useEffect(() => {
        getCategory()
    }, [])

    const getCategory = async () => {
        const response =  await ftpService.getFiltered(categoryURI)
        const dataResponse = await (response.data)
        dataResponse.status == 0 ? setNoResults(true) : setNoResults(false)
        await setCategoryData(dataResponse)
    }

    const goGameInfo = (id) => {
        navigation.navigate("GamePage")  
        setGame(id)   
    }


    if(categoryURI == null){
        return(
            <View>
                <Statusbar/>
                <Loading visible={true}/>
            </View>
        )
    }else if(categoryURI !== null && noResults == true){
        return(
            <View style={{...styles.container, alignItems:"center", justifyContent:"center"}}>
                <Statusbar/>
                <Text style={{...styles.subtitle, fontSize: 90, opacity: 0.2 ,transform: [{ rotate: '90deg'}]}}>:(</Text>
                <Text style={{...styles.subtitle, opacity: 0.2}}>Sorry, no games were found</Text>
            </View>
        )
    } 
    else{
        return(
            <View style={styles.container}>
                <Statusbar/>
                <View style={{width: 75, height: 75, marginBottom: 20, alignSelf:"center"}}>
                    <Logo/>
                </View>
              
              <View style={{alignItems:"center", marginBottom:120}}>
                    <FlatList
                        numColumns={4}
                        initialNumToRender={10}
                        style={{width:'100%'}}
                        data={categoryData}
                        renderItem={({item, index, separators}) => (
                            <View style={{margin: 3}}>
                                <CardSmall
                                    onPressBtn={() => goGameInfo(item.id)}
                                    id={item.id}
                                    title={item.title}
                                    genre={item.genre}
                                    publisher={item.publisher}
                                    thumbnail={item.thumbnail}
                                />
                            </View>
                        )}
                    />
              </View>
            </View>
        )
    }
}