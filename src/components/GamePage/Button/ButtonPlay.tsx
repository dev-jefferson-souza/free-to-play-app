import { TouchableOpacity, View } from "react-native"
import { SimpleLineIcons } from '@expo/vector-icons'; 


export const ButtonPlay = ({onPress}) => {

    return(
        <TouchableOpacity style={{position: 'absolute', right: 32, bottom: 32}} activeOpacity={0.5} onPress={() => onPress()}>
            <View style={{
                alignItems: "center",
                justifyContent:"center",
                height:60,
                width:60,
                backgroundColor:'#4611ad',
                borderRadius: 100
    
                }}>
                
                <SimpleLineIcons name="game-controller" size={36} color="#fff" />
            </View>
        </TouchableOpacity>
    )
}