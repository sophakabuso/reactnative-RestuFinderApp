import React from 'react';
import { useForm } from 'react-hook-form';
import { Button, TextInput, View, StyleSheet, ImageBackground, TouchableOpacity, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Header from '../../components/Header';
import { HeaderBackButton } from '@react-navigation/elements';
import { Image } from 'react-native';
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

        // Navigate to the home page
        // Commenting this out as navigating twice might not be the intended behavior
        // navigation.navigate('Home');
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

    const navigateToHome = () => {
        navigation.navigate('Home');
    };

    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <ImageBackground
                    source={require('../../assets/images/background.jpg')}
                    style={styles.backgroundImage}
                >
                    <View style={styles.topnavContainer}>
                        <Header />
                        <HeaderBackButton onPress={() => navigation.goBack()} />
                    </View>
                    <View style={styles.logowelcomeContainer}>
                        <View>
                            <Text style={styles.sob}>SoB</Text>
                        </View>
                        <View>
                            <Text style={styles.restu}> Restaurant </Text>
                        </View>
                        <View>
                            <Text style={styles.welcomeback}>Welcome back </Text>
                        </View>
                        <View>
                            <Text style={styles.getstarted}>get started</Text>
                        </View>
                        <View>
                            <Image
                                source={require('../../assets/images/decobarsmall.jpg')}
                                style={styles.decobar}
                            />
                        </View>
                    </View>
                </ImageBackground>
            </View>

            <View style={styles.innerContainer}>
                <Text>With your cell number and password</Text>
                <Button title="Login" onPress={handleSubmit(onSubmit)} />
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
                <view>
                <Image
                                source={require('../../assets/images/decobarsmall.jpg')}
                                style={styles.decobar}
                            />
                     
               
                 <Text>OR LOGIN WITH</Text>
                 <Image
                                source={require('../../assets/images/decobarsmall.jpg')}
                                style={styles.decobar}
                            />
                  
                </view>
                <SocialLinks />
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
        padding: 20,
    },
    headerContainer: {
        width: '100%',
        position: 'absolute',
        top: 0,
        left: 0,
        height: 350,
        justifyContent: 'flex-start'
    },
    topnavContainer: {
        width: '100%',
        position: 'absolute',
        top: 0,
        left: 0,
        height: 350,
        justifyContent: 'flex-start'
    },
    innerContainer: {
        width: '100%',
        position: 'absolute',
        bottom: 0,
        left: 0,
        height: 150,
        justifyContent: 'flex-start'
    },
    decobar: {
        width: 33.103,
        height: 7.207,
        flex: 0,
        color:'red',
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
    button: {
        backgroundColor: '#007bff',
        padding: 10,
        borderRadius: 4,
        marginTop: 10,
    },
    buttonText: {
        color: '#fff',
        textAlign: 'center',
    },
    socialLinksContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20,
    },
    socialButton: {
        padding: 10,
    },
});

export default LoginScreen;
