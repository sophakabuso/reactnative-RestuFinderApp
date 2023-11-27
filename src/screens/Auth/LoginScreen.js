import React from 'react';
import { useForm } from 'react-hook-form';
import { Button, TextInput, View, StyleSheet, ImageBackground, TouchableOpacity, Text, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Header from '../../components/Header';
import { HeaderBackButton } from '@react-navigation/elements';
import Icon from 'react-native-vector-icons/FontAwesome';

const LoginScreen = () => {
    const { register, handleSubmit, setValue } = useForm();
    const navigation = useNavigation();

    React.useEffect(() => {
        register('username');
        register('cellNumber');
    }, [register]);

    const onSubmit = data => {
        // Send OTP here...
        // Then navigate to OTP verification screen
        navigation.navigate('OTPVerification');
    }
    const navigateToSignUp = () => {
        navigation.navigate('SignUp');
      };
    const SocialLinks = () => {
        const openLinkedin = () => {
            // Handle LinkedIn link
        };

        const openTwitter = () => {
            // Handle Twitter link
        };

        const openInstagram = () => {
            // Handle Instagram link
        };

        return (
            <View style={styles.socialLinksContainer}>
                <TouchableOpacity onPress={openLinkedin} style={styles.socialButton}>
                    <Icon name="linkedin" size={30} color="#0077b5" />
                </TouchableOpacity>
                <TouchableOpacity onPress={openTwitter} style={styles.socialButton}>
                    <Icon name="times" size={30} color="#1da1f2" />
                </TouchableOpacity>
                <TouchableOpacity onPress={openInstagram} style={styles.socialButton}>
                    <Icon name="instagram" size={30} color="#e4405f" />
                </TouchableOpacity>
            </View>
        );
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
                            <Text style={styles.welcomeback}>Welcome back </Text>
                            <Text style={styles.getstarted}>get started</Text>
                        </View>
                        <Image
                            source={require('../../assets/images/decobarsmall.jpg')}
                            style={styles.decobar}
                        />
                    </View>
                </ImageBackground>
            </View>

            <View style={styles.innerContainer}>
               
            <TouchableOpacity
          style={styles.loginButton}
          onPress={handleSubmit(onSubmit)}
        >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
                <Text style={styles.loginText}>With your cell number and password</Text>
                <TextInput
                    onChangeText={text => setValue('+27XX XXX XXXX', text)}
                    placeholder="+27XX XXX XXXX"
                    style={styles.input}
                />
                <TextInput
                    onChangeText={text => setValue('password', text)}
                    placeholder="Password"
                    keyboardType="phone-pad"
                    style={styles.input}
                    secureTextEntry={true}
                />
                
                <View style={styles.orContainer}>
                    <Image
                        source={require('../../assets/images/decobarsmall.jpg')}
                        style={styles.decobar}
                    />
                    <Text style={styles.orText}>OR LOGIN WITH</Text>
                    <Image
                        source={require('../../assets/images/decobarsmall.jpg')}
                        style={styles.decobar}
                    />
                </View>
                <SocialLinks />

               <TouchableOpacity
          style={styles.loginButton}
          onPress={handleSubmit(onSubmit)}
        >
          <Text style={styles.buttonText}>SignUp</Text>
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
        padding: 0,
    },
    sobrestuContainer: {
        width: '100%',
        height: 'auto',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom:100,
    },
    decobar: {
        width: 33.103,
        height: 7.207,
        marginBottom: 10,
    },
    loginButton: {
        backgroundColor: '#FFF',
        padding: 10,
        borderRadius: 4,
        marginTop: 10,
        alignItems: 'center', // Center text horizontally
        width: '100%',
      },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 4,
        padding: 10,
        marginBottom: 10,
        width: '100%',
        backgroundColor: '#D9D9D9',
    },
    socialLinksContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20,
    },
    socialButton: {
        padding: 10,
    },
    welcostart: {
        flexDirection: 'row',
        paddingtop:10 ,
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
    innerContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        width: '100%',
        backgroundColor:'#0F0101'    },
    loginText: {
        color: '#FFF',
        textAlign: 'center',
        fontFamily: 'Roboto',
        fontSize: 16,
        fontWeight: '900',
        lineHeight: 18,
        letterSpacing: -0.165,
        marginBottom: 10,
    },
    orContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10,
    },
    orText: {
        color: '#FFF',
        marginHorizontal: 10,
        fontFamily: 'Roboto',
        fontSize: 16,
        fontWeight: '900',
        lineHeight: 18,
        letterSpacing: -0.165,
    },
});

export default LoginScreen;
