import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons'; 

const BottomNav = ({navigation}) => {
  return (
    <View style = {styles.bottomNavOut}>
    <View style = {styles.bottomNavItems}>
        <TouchableOpacity  style = {styles.icon}>
       <Ionicons name="wallet" size={40} color="black" />
       <Text style = {styles.text}>Points</Text>
       </TouchableOpacity>
       <TouchableOpacity style = {styles.icon} onPress={()=>navigation.navigate('Productpage')}>
      <AntDesign name="tags" size={40} color="black" />
      <Text style = {styles.text}>Discount</Text>
      </TouchableOpacity >
      <TouchableOpacity style = {styles.icon}>
      <AntDesign name="customerservice" size={40} color="black" />
      <Text style = {styles.text}>Services</Text>
      </TouchableOpacity>
      <TouchableOpacity style = {styles.icon} >
      <Ionicons name="document-text" size={40} color="black" />
      <Text style = {styles.text}>History</Text>
      </TouchableOpacity>
    </View>
    </View>
  )
}

export default BottomNav

const styles = StyleSheet.create({
    bottomNavOut:{
        justifyContent:'center',
        alignItems:'center',

    },
    bottomNavItems:{
        display : 'flex',
        flexDirection:'row',
        width:'100%',
        backgroundColor : 'grey',
        alignItems : 'center',

    },
    track:{
        color:'black',
        top:0,
    },
    text : {
      fontSize : 12,
      fontWeight : 'bold'
    },

    icon : {
      height : '100%',
      width : '25%',
      alignItems : 'center'    }
})