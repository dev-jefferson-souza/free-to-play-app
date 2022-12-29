import { View, Text, Image, TouchableOpacity } from "react-native"
import { LinearGradient } from 'expo-linear-gradient';

import { styles } from "./styles"

interface CardLargeProps {
    title: string,
    thumbnail: string,
}

export const ImageLarge = ({title, thumbnail} : CardLargeProps) => {

    return(
        <TouchableOpacity style={styles.container} activeOpacity={0.85}>
            <Image style={styles.image}  source={{uri: thumbnail}}/>
            <LinearGradient 
                style={styles.shadow}
                locations={[0.1, 1]}
                colors={['rgba(255, 255, 255, 0)','#000']}
            />
            <LinearGradient 
                style={styles.shadow}
                locations={[0.1, 0.65]}
                colors={['#000', 'rgba(255, 255, 255, 0)']}
            />
            <LinearGradient 
                style={styles.shadow}
                locations={[1, 0]}
                colors={['#000', 'rgba(255, 255, 255, 0)']}
            />
            <Text style={styles.title}>{title}</Text>   
        </TouchableOpacity>
    )
}