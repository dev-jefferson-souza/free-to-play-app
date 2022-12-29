import { View, Text, Image, TouchableOpacity } from "react-native"
import { Logo } from "../../components/Logo/Logo"
import Games from "../../assets/Welcome/games.jpg"
import { Statusbar } from "../../components/Statusbar/Statusbar"
import { MaterialIcons } from '@expo/vector-icons';
import { styles } from "./styles"


export const Welcome = () => {

    return(
    <View style={styles.container}>
        <Statusbar/>
        <View style={{width: 150, height: 150}}>
            <Logo/>
        </View>
        <Text style={styles.title}>YOU DON'T KNOW WHAT TO PLAY?</Text>
        <Text style={styles.text}>Here you can find many free games to play with your friends</Text>
        <Image source={Games} style={styles.backgroundImage}/>
        <View style={styles.button}>
            <TouchableOpacity activeOpacity={0.7} style={{flexDirection:"row"}} onPress={() => console.log('Foi para a home')}>
                <Text style={styles.buttonFont}>START</Text>
                <MaterialIcons name="keyboard-arrow-right" size={24} color="#fff" />
            </TouchableOpacity>
        </View>
    </View>
    )
}