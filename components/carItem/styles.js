import { StyleSheet } from 'react-native'


  const styles = StyleSheet.create({
    carContainer:{
        width:'100%',
        height:'100%',

    },
    header:{
        marginTop:50,
        marginLeft:20,
        marginRight:20,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginBottom:10,
    },
    headerTitle:{
        color:'white',
        fontSize:16,
        fontWeight:'bold',
        alignItems:'center',
        justifyContent:'center',
    },
    icon:{
        color:'white',
    },
    backgroundImage:{
        width:'100%',
        height:'100%',
        resizeMode:'cover',
        position:'absolute'
    },
    batterySection:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
    },
    batteryImage:{
        width:70,
        height:26,
        marginRight:12,

    },
    batteryText:{
        color:'white',
        fontSize:35,
        fontWeight:'bold',

    },
    status:{
        alignItems:'center',
    },
    statusText:{
        color:'white',
        fontSize:20,
        fontWeight:'bold',
    },
    controls:{
        flexDirection:'row',
        justifyContent:'center',
        marginTop:170,
    },
    controlsButton:{
        borderWidth:1,
        borderColor:'white',
        borderRadius:50,
        padding:18,
        marginLeft:25,
        marginRight:20,
    }
})
export default styles;