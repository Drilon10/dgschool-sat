import { View, Text, Button, StyleSheet, Image} from 'react-native'
import React from 'react'
import Swiper from 'react-native-swiper'

export default function Home({navigation}) {
  return (
    <View style={styles.container}>

        <View style={styles.sliderContainer}>
          <Swiper
            autoplay
            activeDotColor='#22d4ff'
            autoplayTimeout={5}
          >
            <View style={styles.item}>
              <Image
                source={require('../../assets/tetova.jpg')}
              ></Image>
            </View>

            <View style={styles.item}>
              <Image
                source={require('../../assets/kicevo.jpg')}
              ></Image>
            </View>

          </Swiper>
        </View>
      
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: 'center',
    alignItems: 'center',
    gap: 15
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold'
  }
})
