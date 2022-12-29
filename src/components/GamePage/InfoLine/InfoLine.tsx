import { Text, View } from "react-native"
import { styles } from "./styles"

interface InfoLineProps {
    subtitle: string,
    content: string,
    numberOfLines: number
}

export const InfoLine = ({subtitle, content, numberOfLines} : InfoLineProps) => {

    return(
        <View style={{flexDirection:"row", marginBottom: 8, width: '81%'}}>
            <Text style={styles.subtitle}>{subtitle}</Text>
            <Text style={styles.content} numberOfLines={numberOfLines}>{content}</Text>
        </View>
    )
}