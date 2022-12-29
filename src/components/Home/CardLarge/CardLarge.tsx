import { View, Text, Image, TouchableOpacity } from "react-native"
import { LinearGradient } from 'expo-linear-gradient';

import { styles } from "./styles"

interface CardLargeProps {
    title: string,
    publisher: string
    genre: string,
    thumbnail: string,
    id: number
}

export const CardLarge = ({title, publisher, genre, id, thumbnail} : CardLargeProps) => {

    return(
    <View style={styles.container}>
        <Image style={styles.image}  source={{uri: thumbnail}}/>
        <LinearGradient 
            style={styles.shadow}
            locations={[0.1, 0.65]}
            colors={['rgba(255, 255, 255, 0)','#000']}
        />
        <LinearGradient 
            style={styles.shadow}
            locations={[0.1, 0.65]}
            colors={['rgba(255, 255, 255, 0)','#000']}
        />
         <LinearGradient 
            style={styles.shadow}
            locations={[1, 0]}
            colors={['#000', 'rgba(255, 255, 255, 0)']}
        />
        <Text style={styles.title}>{title}</Text>
        <View style={styles.boxPublisher}>
            <View style={{flexDirection: "row"}}>
                <Text style={styles.publisher}>Publisher:</Text>
                <Text style={styles.publisherContent}>{publisher}</Text>
            </View>
        </View>
        <View style={styles.boxRow}>
            <View style={{flexDirection: "row"}}>
                <Text style={styles.publisher}>Genre:</Text>
                <Text style={styles.publisherContent}>{genre}</Text>
            </View>
        </View>
    </View>
    
    )
}