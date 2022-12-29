import { StyleSheet, Platform } from "react-native";

export const styles = StyleSheet.create({
  container: {
    height: '100%',
    width:'100%',
    //backgroundColor: '#0d0d0f',
    backgroundColor: '#000',
    alignItems:'center',

    paddingTop: Platform.OS == 'ios' ? 64 : 50 ,
  },
  title:{
    color: '#dedede',
    paddingHorizontal: 24,
    fontSize: 40,
    fontWeight: '800',
    textAlign:"center",
    marginTop: 80,
  },
  text:{
    color: '#dedede',
    paddingHorizontal: 24,
    fontSize: 18,
    fontWeight: '500',
    marginTop: 100,
    textAlign: "center"
  },
  backgroundImage:{
    width:'100%',
    height: 260,
    opacity: 0.50,
    borderTopLeftRadius: 28,
    borderTopRightRadius: 28,

    position: 'absolute',
    bottom: 0
  },
  button:{
    backgroundColor:'#000',
    position:"absolute",
    bottom: 40,

    paddingVertical: 16,
    width: 160,
    alignItems:'center',
    borderRadius: 80,
  },
  buttonFont:{
    fontWeight: '900',
    fontSize: 18,
    color: '#dedede',
    marginRight: 10
  }
})
