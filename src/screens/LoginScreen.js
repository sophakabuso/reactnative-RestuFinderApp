import React from 'react';
import { useForm } from 'react-hook-form';
import { Button, TextInput, View, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

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
    };

    return (
        <View style={styles.container}>
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
        </View>
    );
};

const styles = StyleSheet.create({
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
    },
});

export default LoginScreen;