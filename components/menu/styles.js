import { StyleSheet } from 'react-native'
  const styles = StyleSheet.create({
    menuItems:{
      marginTop:20,
      marginLeft:20,
      marginRight:20,
    },
    menuRow:{
      flexDirection:'row',
      alignItems:'center',
      marginTop:15,
      marginBottom:15,
    },
    icon:{
      color:'white'
    },
    menuTextBox:{
      flexGrow:1,
    },
    menuText:{
      textTransform:'uppercase',
      color:'white',
      fontSize:16,
      fontWeight:'bold',
      marginLeft:15,
    },
    arrowIcon:{
      color:'#4d4d4e'
    },
    subTitle:{
      color:'grey',
      fontSize:14,
      marginLeft:15,
    }
  })

  export default styles;