import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import logo from '../assets/LogoM.png';
import friends from '../assets/friends.jpg';
import couple from '../assets/couple.jpg';

export default function FrontScreen({navigation}: any) {
  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.logo} />
      <TouchableOpacity onPress={() => navigation.navigate('Friends')}>
        <Text style={styles.texts}>Kaverikortit</Text>
        <Image source={friends} style={styles.image} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Couples')}>
        <Text style={styles.texts}>Parisuhdekortit</Text>
        <Image source={couple} style={styles.image} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Add')}>
        <Text style={styles.texts2}>Lisää omia kysymyksiä</Text>

      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  texts: {
    fontSize: 30,
    textAlign: 'center',
    color: 'white',
  },
  texts2: {
    fontSize: 15,
    textAlign: 'center',
    color: 'white',
  },
  logo: {
    width: 200,
    height: 200,
    marginBottom: 20,
    resizeMode: 'contain',
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20,
    resizeMode: 'contain',
    borderRadius: 80,
  },
});
