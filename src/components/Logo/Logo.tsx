import { Image } from "react-native"
import logoImage from "../../assets/wa2play-logo.png"


export const Logo = () => {

    return(
        <Image source={logoImage} style={{width:'100%', height: '100%', tintColor:'#e8e8e8'}}/>
    )
}