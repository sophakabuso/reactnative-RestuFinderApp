import React, {useState} from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Header from '../../components/Header';
import { HeaderBackButton } from '@react-navigation/elements';
import Icon from 'react-native-vector-icons/FontAwesome';

const HomeScreen = () => {
  const navigation = useNavigation();
  const [isUserRegistered, setIsUserRegistered] = useState(false); // Placeholder state

  const navigateToSignUp = () => {
    navigation.navigate('SignUp');
  };
  const onSubmit = () => {
    // Check if the user is registered
    if (isUserRegistered) {
      // If registered, navigate to the list of featured restaurants
      navigation.navigate('FeaturedRestaurants');
    } else {
      // If not registered, navigate to the sign-up screen
      navigation.navigate('SignUp');
    }
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
              <Text style={styles.with}>with</Text>
              <Text style={styles.friends}>Friends and Family</Text>
              <Text style={styles.choice}>Your Choice </Text>
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
          style={styles.homedish1}
        />
      </View>

      <View style={styles.innerContainer}>
        <Image
          source={require('../../assets/images/homedish2.png')}
          style={styles.homedish2}
        />
      </View>
      <View>
      <TouchableOpacity
          style={styles.loginButton}
          onPress={handleSubmit(onSubmit)}
        >
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
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
    padding: 20, // Add padding for better spacing
  },
  sobrestuContainer: {
    width: '100%',
    height: 'auto',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 20, // Adjust as needed
  },
  decobar: {
    width: 33.103,
    height: 7.207,
    marginTop: 10, // Adjust for better spacing
    marginBottom: 20, // Adjust for better spacing
  },
  sob: {
    color: '#FFF',
    fontFamily: 'Roboto',
    fontSize: 16,
    fontWeight: '900',
    letterSpacing: -0.165,
    marginLeft: 5,
  },
  restu: {
    color: '#FFF',
    fontFamily: 'Roboto',
    fontSize: 16,
    fontWeight: '900',
    letterSpacing: -0.165,
    marginLeft: 5,
  },
  welcostart: {
    flexDirection: 'column',
    marginTop: 10, // Adjust for better spacing
  },
  welcomeback: {
    color: '#FFF',
    fontFamily: 'Roboto',
    fontSize: 16,
    fontWeight: '900',
    letterSpacing: -0.165,
    marginLeft: 5,
  },
  with: {
    color: '#FFF',
    fontFamily: 'Roboto',
    fontSize: 16,
    fontWeight: '900',
    letterSpacing: -0.165,
    marginLeft: 5,
  },
  friends: {
    color: '#FFF',
    fontFamily: 'Roboto',
    fontSize: 16,
    fontWeight: '900',
    letterSpacing: -0.165,
    marginLeft: 5,
  },
  choice: {
    color: '#FFF',
    fontFamily: 'Roboto',
    fontSize: 16,
    fontWeight: '900',
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
  homedish1: {
    width: 200, // Adjust the width as needed
    height: 200, // Adjust the height as needed
    resizeMode: 'cover',
    marginBottom: 20, // Adjust for better spacing
  },
  homedish2: {
    width: 100, // Adjust the width as needed
    height: 10, // Adjust the height as needed
    resizeMode: 'cover',
    marginBottom: 20, // Adjust for better spacing
  },
});


export default HomeScreen;
