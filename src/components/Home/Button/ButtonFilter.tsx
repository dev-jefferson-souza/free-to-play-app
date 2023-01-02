import { TouchableOpacity, View } from "react-native"
import { FontAwesome } from '@expo/vector-icons'; 


export const ButtonFilter = ({onPress}) => {

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
                <FontAwesome name="filter" size={36} color="#fff"/>
            </View>
        </TouchableOpacity>
    )
}