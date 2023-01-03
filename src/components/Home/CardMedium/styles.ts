import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        width: 160,
        height: 240,
        zIndex: 2,
    },
    shadow: {
        height: '100%',
        width:'100%',
        borderRadius:12,
        opacity: 0.5,
        position: "absolute",
        bottom: 0
    },
    image:{
        width: '100%',
        height: '100%',
        borderRadius: 12
    },
    title:{
        fontSize: 18,
        width:'100%',
        textAlign:"center",
        fontWeight: "800",
        color: '#fff',
        position: "absolute",
        top: 10,
    },
    boxPublisher:{
        position: "absolute",
        bottom: 50,
        paddingHorizontal:4,
        width: '100%',
        flexDirection:"row",
    },
    genreContent: {
        color: '#fff',
        fontSize: 13,
        fontWeight: '600',
        alignSelf: "center",
    },
    publisherContent: {
        color: '#fff',
        fontSize: 14,
        fontWeight: '600',
        textAlign: "center",
        width:'100%'
    },
    boxRow:{
        width: '100%',
        paddingHorizontal: 8,
        position: "absolute",
        bottom: 16,
        justifyContent:"center",
        flexDirection:"row",
    }
  })
  