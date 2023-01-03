import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        width: 100,
        height: 140,
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
        fontSize: 12,
        width:'100%',
        textAlign:"center",
        fontWeight: "900",
        color: '#fff',
        position: "absolute",
        top: 10,
    },
    boxPublisher:{
        position: "absolute",
        bottom: 4,
        paddingHorizontal:4,
        width: '100%',
        flexDirection:"row",
    },
    genreContent: {
        color: '#fff',
        fontSize: 10,
        fontWeight: '600',
        alignSelf: "center",
        backgroundColor:'#000',
        paddingHorizontal: 10,
        paddingVertical: 1,
        borderRadius: 20,
    },
    publisherContent: {
        color: '#fff',
        fontSize: 10,
        fontWeight: '600',
        textAlign: "center",
        width:'100%'
    },
  })
  