import { View, Text, Image, TouchableOpacity } from "react-native"
import { LinearGradient } from 'expo-linear-gradient';

import { styles } from "./styles"

interface CardLargeProps {
    title: string,
    publisher: string
    genre: string,
    thumbnail: string,
    id: number,
    onPressBtn: any
}

export const CardMedium = ({title, publisher, genre, id, thumbnail, onPressBtn} : CardLargeProps) => {

    return(
        <TouchableOpacity style={styles.container} activeOpacity={0.85} onPress={() => onPressBtn()}>
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
                <Text style={styles.publisherContent} numberOfLines={1}>{publisher}</Text> 
            </View>
            <View style={styles.boxRow}>
                <Text numberOfLines={1} style={styles.genreContent}>{genre}</Text>
            </View>
        </TouchableOpacity>
    )
}