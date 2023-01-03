import { StyleSheet, Platform } from "react-native";

export const styles = StyleSheet.create({
  container: {
    height: '100%',
    width:'100%',
    alignItems:"center",
    backgroundColor: '#0d0d0f',
    paddingTop: Platform.OS == 'ios' ? 64 : 50 ,
  },
  subtitle:{
    color: '#dedede',
    fontSize: 24,
    fontWeight: '500',
    marginBottom: 8
  },
})
