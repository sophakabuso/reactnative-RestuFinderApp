import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Header from '../../components/Header';
import { HeaderBackButton } from '@react-navigation/elements';
import Icon from 'react-native-vector-icons/FontAwesome';



const HomeScreen = () => {
  const navigation = useNavigation();
  const [isUserRegistered, setIsUserRegistered] = useState(false); // Placeholder state
  const [hasEffectRun, setHasEffectRun] = useState(false);

  const navigateToSignUp = () => {
    navigation.navigate('SignUp');
  };

  const handleSubmit = () => {
    // Replace this with your actual logic for handling form submission
    // For example, you might make an API call to check user registration
    // and update the state accordingly
    // setIsUserRegistered(true);
  };

  useEffect(() => {
    if (!hasEffectRun) {
      // This will be executed after the component is rendered
      setHasEffectRun(true);
      onSubmit();
    }
  }, [isUserRegistered, hasEffectRun]);

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
          <Header>
            <HeaderBackButton onPress={navigateToSignUp} />
          </Header>
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
          onPress={() => handleSubmit(onSubmit)}
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
    padding: 20,
  },
  sobrestuContainer: {
    width: '100%',
    height: 'auto',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 20,
  },
  decobar: {
    width: 33.103,
    height: 7.207,
    marginTop: 10,
    marginBottom: 20,
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
    marginTop: 10,
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
    width: 200,
    height: 200,
    resizeMode: 'cover',
    marginBottom: 20,
  },
  homedish2: {
    width: 100,
    height: 10,
    resizeMode: 'cover',
    marginBottom: 20,
  },
  loginButton: {
    backgroundColor: '#4285F4',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 18,
  },
});

export default HomeScreen;
