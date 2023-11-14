import React from 'react';
import { useForm } from 'react-hook-form';
import { Button, TextInput, View, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {
    const { register, handleSubmit, setValue, errors } = useForm();
    const navigation = useNavigation();

    React.useEffect(() => {
        register('username', { required: true });
        register('cellNumber', { required: true, minLength: 10 });
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
            {errors.username && <Text style={styles.error}>Username is required.</Text>}
            <TextInput
                onChangeText={text => setValue('cellNumber', text)}
                placeholder="Cell Number"
                keyboardType="phone-pad"
                style={styles.input}
            />
            {errors.cellNumber && errors.cellNumber.type === 'required' && (
                <Text style={styles.error}>Cell Number is required.</Text>
            )}
            {errors.cellNumber && errors.cellNumber.type === 'minLength' && (
                <Text style={styles.error}>Cell Number must be at least 10 digits.</Text>
            )}
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
    error: {
        color: 'red',
        marginBottom: 10,
    },
});

export default LoginScreen;
