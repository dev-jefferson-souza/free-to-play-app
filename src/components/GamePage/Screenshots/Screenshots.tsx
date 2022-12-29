import { Image, View } from "react-native"


import { styles } from "./styles"

interface ImageLargeProps {
    screenshots: string
}

export const Screenshots = ({screenshots} : ImageLargeProps) => {

    return(
        <View style={styles.container}>
            <Image style={styles.image}  source={{uri: screenshots}}/>
        </View>
    )
}