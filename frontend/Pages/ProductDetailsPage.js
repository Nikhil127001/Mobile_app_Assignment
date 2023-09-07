import { Button, View, Text, StyleSheet, Image, TouchableOpacity } from "react-native"
import React from "react"
const ProductDetailsPage = ({ navigation, route }) => {
    const item = route.params;
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={require('../images/sample.png')} />



            <View style={styles.stick}><Image style={styles.profile} source={require('../images/sample.png')} />
                <View>
                    <Text style={styles.text2}>{item.name}</Text>
                    <Text style={styles.text3}>{'['} {item.category} {']'}</Text>
                </View>
            </View>
            <View style={styles.bar}>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.text}>Description</Text>
                </TouchableOpacity >
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.text}>Terms</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.text}>Branches</Text>
                </TouchableOpacity>
            </View>
            <Text style={styles.text1}>{item.discountType == 'percentage' ? '% Discount Type' : 'Rs Off Discount Type'}</Text>
            <Text style={styles.text2}>{item.offerName}</Text>
            <Text style={styles.text3}>{item.description}</Text>
            <View style={styles.bar2}>
                <TouchableOpacity style={styles.button2}>
                    <Text style={styles.text}>Subscribe</Text>
                </TouchableOpacity>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: "100%",
    },
    image: {
        height: 300,
        width: '100%'
    },
    bar: {
        display: 'flex',
        flexDirection: 'row',
        width: "100%",
        height: 70,
        backgroundColor: 'grey'
    },
    bar2: {
        position: 'absolute',
        bottom: 5,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: "100%",
        height: 70,

    },
    button: {
        height: "100%",
        width: "33%",
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 17,
        fontWeight: 'bold',
        color: 'white'
    },
    text1: {
        fontSize: 25,
        color: 'grey',
        padding: 10,
    },
    text2: {
        fontSize: 20,
        fontWeight: 'bold',
        padding: 10,
    },
    text3: {
        fontSize: 15,
        fontWeight: 'bold',
        color: 'grey',
        padding: 10,
    },
    button2: {
        height: 50,
        width: '97%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'grey',
        borderRadius: 7
    },

    stick: {
        position: 'absolute',
        flex: 0,
        flexDirection: 'row',
        top: 200,
        height: 80,
        width: '100%',
        zIndex: 1,
        backgroundColor :'rgba(128, 128, 128, 0.5)',
    },
    profile: {
        height: 77,
        width: 77,
        borderRadius: 100
    }

})

export default ProductDetailsPage;