import { StyleSheet } from "react-native";

export  const styles = StyleSheet.create({
  modalContentView: {
    borderRadius: 18,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    
   
    borderColor:'#fff',
    backgroundColor:'#0d0d0f',
    paddingHorizontal:40,
    paddingVertical:30,

    width: '100%',
    height: 450,
    marginTop:'auto',

    shadowColor: "#000",
    shadowOffset: {
	  width: 0,
	  height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,

    },
    modalOverlay: {
        position:'absolute',
        backgroundColor: 'rgba(0,0,0,0.75)',
        top:0,
        bottom:0,
        left:0, fontSize: 16,
        right:0
    },
    subtitle:{
        color: '#dedede',
        fontSize: 24,
        fontWeight: '500',
        marginBottom: 8,
    },
    boxCandP:{
        flexDirection:"row",
        justifyContent:"space-between",
        flexWrap:"wrap"
    },
    categoryBox:{
        flexDirection:"row",
        width:'100%',
        flexWrap:"wrap"
    },
    categoryText: {
        color: '#8a8a8a',
        paddingHorizontal: 6,
        paddingVertical: 8
    },
    lowSpecBox:{
        flexDirection: "row",
        alignItems:"center",
        justifyContent:"space-between",
        width:160,
        marginTop: 20
    },
    perspectiveBox:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
        maxWidth: 250
    },
    selectBox:{
        width: 90,
        flexDirection:"row",
        justifyContent:"space-between",
        marginLeft: 8
    },
    perspectiveText:{
        width:'100%',
        textAlign:"center",
        textAlignVertical:"center",
        fontSize:13,
        color:'#dedede',
        height: 20,
        borderColor: '#4611ad',
        borderRadius: 8,
        borderWidth:1
    }
});