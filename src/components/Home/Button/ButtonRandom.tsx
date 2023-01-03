import { TouchableOpacity, View } from "react-native"
import { FontAwesome } from '@expo/vector-icons'; 

export const ButtonRandom = ({onPress}) => {

    return(
        <TouchableOpacity style={{position: 'absolute', right: 110, bottom: 32}} activeOpacity={0.5} onPress={() => onPress()}>
            <View style={{
                alignItems: "center",
                justifyContent:"center",
                height:60,
                width:60,
                backgroundColor:'#4611ad',
                borderRadius: 100
    
                }}>
                <FontAwesome name="random" size={36} color="#fff"/>
            </View>
        </TouchableOpacity>
    )
}