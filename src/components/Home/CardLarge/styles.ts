import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        width: 370,
        height: 200,
        zIndex: 2,
    },
    shadow: {
        height: '100%',
        width:'100%',
        borderRadius:22,
        opacity: 0.5,
        position: "absolute",
        bottom: 0
    },
    image:{
        width: '100%', height: '100%', borderRadius: 24
    },
    title:{
        fontSize: 24,
        fontWeight: "800",
        color: '#fff',
        position: "absolute",
        top: 10,
        left: 16
    },
    boxPublisher:{
        position: "absolute",
        bottom: 40,
        left: 16,
        flexDirection:"row",
    },
    publisher:{
        color: '#fff',
        fontSize: 16,
        fontWeight: '700',
        marginRight: 8
    },
    publisherContent: {
        color: '#fff',
        fontSize: 13,
        fontWeight: '600',
        alignSelf: "center"
    },
    subtitle2:{
        width: 70,
        color: '#fff',
        fontSize: 16,
        fontWeight: '700',

        position: "absolute",
        bottom: 20,
        left: 16
    },
    boxRow:{
        position: "absolute",
        bottom: 16,
        left: 16,
        flexDirection:"row",
    }
  })
  