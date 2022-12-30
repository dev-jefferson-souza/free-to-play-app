import { View, Text, Image, TouchableOpacity } from "react-native"
import { LinearGradient } from 'expo-linear-gradient';
import { Logo } from "../../components/Logo/Logo"
import Games from "../../assets/Welcome/games.jpg"
import { Statusbar } from "../../components/Statusbar/Statusbar"
import { MaterialIcons } from '@expo/vector-icons';
import { styles } from "./styles"
import { useContext } from "react";
import { GameContext } from "../../context/GameContext";
import AsyncStorage from "@react-native-async-storage/async-storage";



export const Welcome = ({navigation}) => {

    const storeData = async () => {
        try {
          await AsyncStorage.setItem('@Auth', 'true')
        } catch (err) {
          console.log(err)
        }
      }

    const { setAuth } = useContext(GameContext)
    
    const start = () => {
        setAuth('true')
        storeData()
    }

    return(
    <View style={styles.container}>
        <Statusbar/>
        <View style={{width: 150, height: 150}}>
            <Logo/>
        </View>
        <Text style={styles.title}>YOU DON'T KNOW WHAT TO PLAY?</Text>
        <Text style={styles.text}>Here you can find many free games to play with your friends</Text>
        <View style={styles.backgroundImage}>
            <LinearGradient 
                    style={styles.shadow}
                    locations={[0.1, 1]}
                    colors={['rgba(255, 255, 255, 0)','#000']}
            >
                  <LinearGradient 
                    style={styles.shadow}
                    locations={[0.1, 1]}
                    colors={['rgba(255, 255, 255, 0)','#000']}
                >
                    <Image source={Games} style={styles.backgroundImage}/>
                </LinearGradient>
            </LinearGradient>
        </View>
        <View style={styles.button}>
            <TouchableOpacity activeOpacity={0.7} style={{flexDirection:"row"}} onPress={() => start()}>
                <Text style={styles.buttonFont}>START</Text>
                <MaterialIcons name="keyboard-arrow-right" size={24} color="#fff" />
            </TouchableOpacity>
        </View>
    </View>
    )
}