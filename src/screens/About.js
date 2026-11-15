import { View, Text, Button, StyleSheet} from 'react-native'
import React from 'react'

export default function About({navigation}) {
  return (
    <View style={styles.container}>
      
      <Text style={styles.title}>About</Text>

      <Button
        title='Go to Home Screen'
        onPress={() => navigation.navigate('HomeTab')}
      ></Button>
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
