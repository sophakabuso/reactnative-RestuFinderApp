import React from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Header from '../../components/Header';
import { HeaderBackButton } from '@react-navigation/elements';
import Icon from 'react-native-vector-icons/FontAwesome';

const HomeScreen = () => {
  const navigation = useNavigation();

  const navigateToSignUp = () => {
    navigation.navigate('SignUp');
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <ImageBackground
          source={require('../../assets/images/background.jpg')}
          style={styles.backgroundImage}
        >
          <Header />
          <HeaderBackButton onPress={navigateToSignUp} />
          <View style={styles.logowelcomeContainer}>
            <View style={styles.sobrestuContainer}>
              <Text style={styles.sob}>SoB</Text>
              <Text style={styles.restu}> Restaurant </Text>
            </View>

            <View style={styles.welcostart}>
              <Text style={styles.welcomeback}>Dine and wine</Text>
              <Text style={styles.getstarted}>with</Text>
              <Text style={styles.welcomeback}>Friends and Family</Text>
              <Text style={styles.getstarted}>Your Choice </Text>
            </View>
            <Image
              source={require('../../assets/images/decobarsmall.jpg')}
              style={styles.decobar}
            />
          </View>
        </ImageBackground>
      </View>

      <View style={styles.innerContainer}>
        <Image
          source={require('../../assets/images/homedish1.png')}
          style={styles.homedish}
        />
      </View>

      <View style={styles.innerContainer}>
        <Image
          source={require('../../assets/images/homedish2.png')}
          style={styles.homedish}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerContainer: {
    flex: 1,
    width: '100%',
  },
  logowelcomeContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 0,
  },
  sobrestuContainer: {
    width: '100%',
    height: 'auto',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 100,
  },
  decobar: {
    width: 33.103,
    height: 7.207,
    marginBottom: 10,
  },
  sob: {
    color: '#FFF',
    textAlign: 'center',
    fontFamily: 'Roboto',
    fontSize: 16,
    fontWeight: '900',
    lineHeight: 18,
    letterSpacing: -0.165,
    marginLeft: 5,
  },
  restu: {
    color: '#FFF',
    textAlign: 'center',
    fontFamily: 'Roboto',
    fontSize: 16,
    fontWeight: '900',
    lineHeight: 18,
    letterSpacing: -0.165,
    marginLeft: 5,
  },
  welcostart: {
    flexDirection: 'column',
  },
  welcomeback: {
    color: '#FFF',
    textAlign: 'center',
    fontFamily: 'Roboto',
    fontSize: 16,
    fontWeight: '900',
    lineHeight: 18,
    letterSpacing: -0.165,
    marginLeft: 5,
  },
  getstarted: {
    color: '#FFF',
    textAlign: 'center',
    fontFamily: 'Roboto',
    fontSize: 16,
    fontWeight: '900',
    lineHeight: 18,
    letterSpacing: -0.165,
    marginLeft: 5,
  },
  innerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    width: '100%',
    backgroundColor: '#0F0101',
  },
  homedish: {
    width: 200, // Adjust the width as needed
    height: 200, // Adjust the height as needed
    resizeMode: 'cover',
  },
});

export default HomeScreen;
