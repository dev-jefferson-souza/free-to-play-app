import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        width: 300,
        height: 180,
        zIndex: 2,
    },
    shadow: {
        height: '100%',
        width:'100%',
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
        fontSize: 24,
        fontWeight: "800",
        color: '#fff',
        position: "absolute",
        top: 50,
        left: 16
    },
  })
  