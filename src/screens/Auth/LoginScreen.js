import React from 'react';
import { useForm } from 'react-hook-form';
import { Button, TextInput, View, StyleSheet, ImageBackground, TouchableOpacity, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Header from '../../components/Header';
import { HeaderBackButton } from '@react-navigation/elements';

const LoginScreen = ({naavigation}) => {
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
        <ImageBackground
            source={require('../../assets/images/background.jpg')}
            style={styles.backgroundImage}
        >
            <Header /> {/* Include the Header component here */}
            <View style={styles.container}>
                <HeaderBackButton onPress={() => navigation.goBack()} /> {/* Add this line */}
                {/* Rest of your Header component */}
            </View>
            <View style={styles.inputContainer}>
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
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
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
