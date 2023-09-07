import { FlatList, StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
const CardSlider = (props) => {
    const {navigation,Products} = props;
const onPresslistner = (item) => {
    navigation.navigate('ProductDetailsPage',item)
}
    return (
        <View style={styles.container}>

            <FlatList
                vertical
                data={Products}
                renderItem={({ item }) => (
                    <TouchableOpacity key={item.index}>
                        <View style={styles.card}>
                            <View style={styles.s1}>
                                <Image style= {styles.image} source={require('../images/sample.png')}></Image>
                            </View>
                            <View style={styles.s2}>
                                <Text style={styles.txt1}>{item.name}</Text>
                                <Text style={styles.txt2}>{` ${item.price} ${item.discountType == 'percentage' ? '% discount' : 'off'}`}</Text>
                                <TouchableOpacity key={item.index} onPress={() => {onPresslistner(item)}}>
                                    <Text style={styles.buybtn}>
                                        <Text>View Offer</Text>
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </TouchableOpacity>
                )}
            />
        </View>
    )
}

export default CardSlider

const styles = StyleSheet.create({
    container : {
        width : '100%',
        height : 612,
    },
    card : {
        flex : 0,
        flexDirection : "row",
        width : "100%",
        marginBottom: 10,
        padding: 15,
    },

    image : {
        height : 150,
        width : 200,
        borderRadius: 15
    },

    s2 : {
        padding : 15,
        color : 'white',
        alignItems : 'center',
        justifyContent : 'center',
        width : '50%'
    },
    txt1 : {
        fontSize: 20,
        fontWeight : 'bold',
        marginBottom: 10
    },
    txt2 : {
        fontSize: 17,
        fontWeight : 'bold',
        marginBottom: 10
    },
    buybtn:{
        backgroundColor:'#f5b013',
        width:170,
        height:30,
        borderRadius:7,
        justifyContent:'center',
        textAlign:'center',
        fontSize:20,
        
    },

})