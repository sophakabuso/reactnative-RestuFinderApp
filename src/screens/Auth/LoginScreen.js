import React from 'react';
import { useForm } from 'react-hook-form';
import { Button, TextInput, View, StyleSheet, ImageBackground, TouchableOpacity, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Header from '../../components/Header';
import { HeaderBackButton } from '@react-navigation/elements';

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
        navigation.navigate('Home');
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
                        <Header /> {/* Include the Header component here */}
                        <HeaderBackButton onPress={() => navigation.goBack()} /> {/* Add this line */}
                        {/* Rest of your Header component */}
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
                            <Text> styl</Text>
                        </View>
                    </View>
                </ImageBackground>
            </View>

            <View style={styles.innerContainer}>
                <TextInput
                    onChangeText={text => setValue('username', text)}
                    placeholder="Username"
                    style={styles.input}
                />
                <TextInput
                    onChangeText={text => setValue('cellNumber', text)}
                    placeholder="Cell Number"
                    keyboardType="phone-pad"
                    style={styles.input}
                />
                <Button title="Submit" onPress={handleSubmit(onSubmit)} />
                <TouchableOpacity onPress={navigateToHome} style={styles.button}>
                    <Text style={styles.buttonText}>Go to Home</Text>
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
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 4,
        padding: 10,
        marginBottom: 10,
        width: '100%',
        backgroundColor: '#fff',
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
});

export default LoginScreen;