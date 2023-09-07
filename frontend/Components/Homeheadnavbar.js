import { View, Text , StyleSheet,Image,TouchableOpacity, Button,} from 'react-native'
import React from 'react'
import { FontAwesome5 } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons'; 


const Homeheadnavbar = () => {
  
  return (
    <View style = {styles.container}>
      <FontAwesome5 name="list" size={30} color='black' />
      <View style = {styles.logobt}>
      <Text style={styles.text}>Discounts</Text>
      </View>
      <TouchableOpacity>
      <Ionicons name="notifications-sharp" size={30} color="black" />
      </TouchableOpacity>
    </View>
  )
}
const styles = StyleSheet.create({
  container:{
    height:80,
    flexDirection:'row',
    backgroundColor :  'grey',
    justifyContent:'space-between',
    alignItems:'center',
    width:'100%',
    paddingLeft : 7,
    paddingRight : 7,
  },
  logo:{
    height:50,
    width:55,
  },
  logobt:{
    flex:0,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    backgroundColor : "grey"
  },
  text:{
    fontSize:22,
    fontWeight:'bold',
    backgroundColor: "grey"
  },
})
export default Homeheadnavbar