import { View, Text ,StyleSheet, ScrollView, TouchableOpacity} from 'react-native'
import React from 'react'
const Catagories = () => {
  return (
    <View style ={styles.container}>
      <ScrollView horizontal>
      <TouchableOpacity style = {styles.dimensions}>
          <Text  style = {styles.text}>Category 1</Text>
        </TouchableOpacity>
        <TouchableOpacity style = {styles.dimensions}>
          <Text  style = {styles.text}>Category 2</Text>
        </TouchableOpacity>
        <TouchableOpacity style = {styles.dimensions}>
          <Text style = {styles.text}>Category 3</Text>
        </TouchableOpacity>
        <TouchableOpacity style = {styles.dimensions}>
          <Text style = {styles.text}>Category 4</Text>
        </TouchableOpacity>
        <TouchableOpacity style = {styles.dimensions}>
          <Text style = {styles.text}>Category 5</Text>
        </TouchableOpacity>
      </ScrollView>


      
    </View>
  )
}
const styles = StyleSheet.create({

    container:{
      width:'100%',
      height:60,
      backgroundColor:'#212120',
      alignItems:'center',
      justifyContent:'center',
    },
    heading:{
        fontSize:22,
        color:'#f5b013',
        marginTop:5,
    },

    dimensions:{
        alignItems:'center',
        color : "white",
        justifyContent:'center',
        width:150,
        height:60,
        marginTop:5,
        borderRadius:10,
        marginLeft:10,

    },

    text : {
      color : 'white',
    }
  })

export default Catagories