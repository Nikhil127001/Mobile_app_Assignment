import { StatusBar, StyleSheet, Text, View, TextInput,Image, ScrollView, FlatList } from 'react-native'
import axios from 'axios';
import { useEffect, useState } from "react";
import Homeheadnavbar from "../Components/Homeheadnavbar";
import Catagories from '../Components/catagories';
import { FontAwesome5 } from '@expo/vector-icons'
import BottomNav from '../Components/BottomNavbar';
import CardSlider from '../Components/CardSlider';
import { AntDesign } from '@expo/vector-icons';


const ProductPage = ({ navigation }) => {
  const [loading , setLoading] = useState(false);
  const [Products, setProducts] = useState([]);
  const [search, setSearch] = useState('');
  const url = 'https://blackcoffee-backend01.onrender.com/api/product/getproducts';

  const onPresslistner = (item) => {
    navigation.navigate('ProductDetailsPage', item)
  }
  useEffect(() => {
    const getAllProducts = async () => {
      try {
        setLoading(true)
        const response = await axios.get(url);
        if (response.status === 200) {
          setProducts(response.data.products);
          setLoading(false);
          return;
        } else {
          throw new Error("Failed to fetch users");
        }
      } catch (error) {

        console.log(error);
      }
    };
    getAllProducts();
  }, [])

  return (
    <View style={styles.container}>
      <StatusBar />
      <Homeheadnavbar />
      <Catagories />
      <TextInput style={styles.search1} placeholder='   search for Products' onChange={(event) => { setSearch(event.nativeEvent.text) }} />

      {
        search != '' && <View style={styles.searchresultouter}>
          <FlatList
            style={styles.searchresultinner}
            data={Products}
            renderItem={({ item }) => {
              if (item.name.toLowerCase().includes(search.toLowerCase())) {
                return (
                  <View style={styles.searchresult}>
                    <AntDesign name="arrowright" size={24} color="black" />
                    <Text style={styles.searchresulttext} key={item.index} onPress={() => {
                      onPresslistner(item)
                    }}>{item.name}</Text>
                  </View>
                )
              }
            }}
          />
        </View>
      }
      {loading == true ? <Image source = {require('../images/loading.gif')}/> : <View style={styles.CardSlider}><CardSlider navigation={navigation} Products={Products} />
        <BottomNav style={styles.BottomNav} />
      </View> }

    </View>

  )
}
const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    alignItems: 'center',


  },
  searchbar: {
    flexDirection: 'row',
    marginTop: 2,
    width: '100%',
    backgroundColor: 'grey',
    height: 40,
    elevation: 30,
    marginLeft: 4,
  },
  search1: {
    fontSize: 17,
    backgroundColor: "white",
    width: "97%",
    flexDirection: 'row',
    borderRadius: 10,
    marginTop: 5,
    height: 40,
    elevation: 30,
  },


  BottomNav: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    zIndex: 20,
    height: 80,
    justifyContent: 'center',
  },

  scroll: {
    width: '100%',
    height: 500,
    marginTop: 5,
  },
  searchresultouter: {
    width: '100%',
    marginHorizontal: 30,
    // height: '100%',

  },
  searchresultinner: {
    width: '100%',

  },

  searchresult: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,
  },
  searchresulttext: {
    marginLeft: 10,
    fontSize: 18,
    color: 'grey',
  },
})

export default ProductPage