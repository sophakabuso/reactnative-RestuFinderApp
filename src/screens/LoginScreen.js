import React from 'react';
import { useForm } from 'react-hook-form';
import { Button, TextInput, View, StyleSheet, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Header from '../components/Header'; // Make sure the path is correct

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
        <ImageBackground
            source={require('../assets/images/background.jpg')}
            style={styles.backgroundImage}
        >
            <Header /> {/* Include the Header component here */}
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
});

export default LoginScreen;

  /*import * as React from "react";
import { Text, StyleSheet, View, ImageBackground } from "react-native";
import { Image } from "expo-image";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const LoginScreen = () => {
  return (
    <View style={styles.loginScreen}>
      <ImageBackground
        style={styles.frameIcon}
        resizeMode="cover"
        source={require("../assets/frame.png")}
      >
        <View style={styles.iphoneXsBarsStatusDe}>
          <View style={[styles.iphoneXsBarsStatusDe1, styles.iphonePosition]}>
            <View style={[styles.iphoneXsBarsStatusDe2, styles.iphonePosition]}>
              <View style={styles.action}>
                <Text style={[styles.time, styles.timeTypo]}>9:41</Text>
              </View>
              <Image
                style={[styles.containerIcon, styles.frameLayout]}
                contentFit="cover"
                source={require("../assets/container.png")}
              />
            </View>
          </View>
        </View>
      </ImageBackground>
      <View style={styles.sobResturants}>
        <Text style={[styles.sobResturants1, styles.timeTypo]}>
          <Text style={styles.sobResturantsTxtContainer}>
            <Text style={styles.sob}>{`SoB
`}</Text>
            <Text style={styles.resturants}>Resturants</Text>
          </Text>
        </Text>
      </View>
      <Image
        style={[styles.vectorIcon, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector.png")}
      />
      <View style={styles.frameParent}>
        <View style={[styles.passwordParent, styles.loginWrapperBorder]}>
          <Text
            style={[styles.password, styles.forgotTypo]}
          >{`Password           `}</Text>
          <Text style={[styles.forgot, styles.forgotTypo]}>FORGOT</Text>
        </View>
        <View style={[styles.loginWrapper, styles.loginWrapperBorder]}>
          <Text style={[styles.login, styles.loginTypo]}>LOGIN</Text>
        </View>
        <View style={[styles.xxXxxXxxxWrapper, styles.loginWrapperBorder]}>
          <Text style={[styles.xxXxxXxxx, styles.loginTypo]}>
            +27 xx xxx xxxx
          </Text>
        </View>
        <Image
          style={[styles.frameChild, styles.frameLayout]}
          contentFit="cover"
          source={require("../assets/line-7.png")}
        />
        <Image
          style={[styles.vectorIcon1, styles.vectorIconLayout]}
          contentFit="cover"
          source={require("../assets/vector1.png")}
        />
        <View style={styles.frame}>
          <Text style={[styles.getStarted, styles.getStartedTypo]}>
            GET STARTED
          </Text>
          <Text style={[styles.welcomeBack, styles.getStartedTypo]}>
            Welcome back
          </Text>
        </View>
        <View style={[styles.frame1, styles.frame1Layout]}>
          <Text style={[styles.withYourCell, styles.frame1Layout]}>
            With your cell number and password
          </Text>
          <View style={[styles.loginContainer, styles.loginWrapperBorder]}>
            <Text style={styles.login1}>{`  LOGIN
`}</Text>
          </View>
        </View>
        <View style={[styles.frame2, styles.framePosition]}>
          <Image
            style={[styles.frameItem, styles.frameLayout]}
            contentFit="cover"
            source={require("../assets/line-6.png")}
          />
          <Text style={[styles.orLoginWith, styles.forgotTypo]}>
            OR LOGIN WITH
          </Text>
        </View>
        <View style={[styles.frame3, styles.framePosition]}>
          <View style={[styles.frameInner, styles.frameChildLayout]} />
          <View style={[styles.frameView, styles.frameChildLayout]} />
          <View style={[styles.frameChild1, styles.frameChildLayout]} />
          <View style={[styles.frameChild2, styles.frameChildLayout]} />
        </View>
        <View style={styles.lineView} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iphonePosition: {
    left: "0%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
  },
  timeTypo: {
    textAlign: "center",
    fontWeight: "900",
    color: Color.colorWhite,
    position: "absolute",
  },
  frameLayout: {
    height: 12,
    position: "absolute",
  },
  vectorIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    position: "absolute",
  },
  loginWrapperBorder: {
    borderWidth: 1,
    borderColor: Color.colorGainsboro,
    borderRadius: Border.br_5xs,
    borderStyle: "solid",
    overflow: "hidden",
    position: "absolute",
  },
  forgotTypo: {
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
    lineHeight: 19,
    fontSize: FontSize.size_xl,
    textAlign: "center",
    letterSpacing: 0,
    position: "absolute",
  },
  loginTypo: {
    top: 20,
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
    lineHeight: 19,
    fontSize: FontSize.size_xl,
    textAlign: "center",
    letterSpacing: 0,
    position: "absolute",

// FILEPATH: /home/sophakama/Documents/reactnative/restuFinderApp/src/screens/LoginScreen.js
    },
    getStartedTypo: {
        textAlign: "left",
        fontFamily: FontFamily.robotoBlack,
        fontWeight: "900",
    },
    frame1Layout: {
        width: 245,
        position: "absolute",
    },
    framePosition: {
        left: 30,
        overflow: "hidden",
        position: "absolute",
    },
    frameChildLayout: {
        width: 62,
        height: 37,
        borderWidth: 1,
        borderColor: Color.colorGainsboro,
        borderStyle: "solid",
        borderRadius: Border.br_5xs,
        overflow: "hidden",
        position: "absolute",
        backgroundColor: Color.colorGray_200,
    },
    time: {
        marginTop: -9,
        fontSize: 16,
        lineHeight: 18,
        fontFamily: FontFamily.robotoBlack,
        letterSpacing: 0,
        textAlign: "center",
        fontWeight: "900",
        width: 54,
        top: "50%",
        left: 0,
    },
    action: {
        marginTop: -7.5,
        left: 20,
        height: 18,
        width: 54,
        top: "50%",
        position: "absolute",
    },
    containerIcon: {
        marginTop: -4.34,
        right: 15,
        width: 67,
        top: "50%",
        height: 12,
    },
    iphoneXsBarsStatusDe2: {
        right: "0%",
        width: "100%",
    },
    iphoneXsBarsStatusDe1: {
        width: "110.51%",
        right: "-10.51%",
    },
    iphoneXsBarsStatusDe: {
        width: 447,
        height: 59,
    },
    frameIcon: {
        width: 666,
        height: 513,
        paddingHorizontal: 0,
        paddingVertical: 1,
        overflow: "hidden",
        left: 0,
        top: 0,
        position: "absolute",
    },
    sob: {
        fontSize: 37,
    },
    resturants: {
        fontSize: FontSize.size_xl,
    },
    sobResturantsTxtContainer: {
        lineBreak: "anywhere",
        width: "100%",
    },
    sobResturants1: {
        fontFamily: FontFamily.interBlack,
        display: "flex",
        alignItems: "center",
        textAlign: "center",
        fontWeight: "900",
        left: "0%",
        top: "0%",
        height: "100%",
        width: "100%",
    },
    sobResturants: {
        top: 112,
        left: 161,
        width: 153,
        height: 57,
        position: "absolute",
    },
    vectorIcon: {
        height: "1.72%",
        width: "1.97%",
        top: "6.45%",
        right: "10.33%",
        bottom: "91.83%",
        left: "87.7%",
    },
    password: {
        left: 14,
        width: 109,
        color: Color.colorGray_300,
        top: 17,
        fontWeight: "700",
        lineHeight: 19,
    },
    forgot: {
        left: 321,
        top: 17,
        fontWeight: "700",
        lineHeight: 19,
        color: Color.colorWhite,
    },
    passwordParent: {
        top: 327,
        width: 433,
        backgroundColor: Color.colorGray_100,
        left: 35,
        borderColor: Color.colorGainsboro,
        borderRadius: Border.br_5xs,
        height: 59,
    },
    login: {
        left: 188,
        color: Color.colorWhite,
    },
    loginWrapper: {
        top: 410,
        width: 433,
        backgroundColor: Color.colorGray_100,
        left: 35,
        borderColor: Color.colorGainsboro,
        borderRadius: Border.br_5xs,
        height: 59,
    },
    xxXxxXxxx: {
        left: 53,
        color: Color.colorGray_300,
    },
    xxXxxXxxxWrapper: {
        top: 244,
        opacity: 0.8,
        width: 433,
        backgroundColor: Color.colorGray_100,
        left: 35,
        borderColor: Color.colorGainsboro,
        borderRadius: Border.br_5xs,
        height: 59,
    },
    frameChild: {
        top: 494,
        left: 374,
        width: 76,
        opacity: 0.2,
    },
    vectorIcon1: {
        height: "1.39%",
        width: "6.9%",
        top: "23.18%",
        right: "46.02%",
        bottom: "75.44%",
        left: "47.08%",
        borderRadius: 4,
        opacity: 0.4,
    },
    getStarted: {
        left: 3,
        fontSize: FontSize.size_5xl,
        textAlign: "left",
        color: Color.colorWhite,
        position: "absolute",
        top: 28,
    },
    welcomeBack: {
        fontSize: FontSize.size_5xl,
        textAlign: "left",
        color: Color.colorWhite,
        position: "absolute",
        width: 162,
        left: 0,
        top: 0,
    },
    frame: {
        top: 66,
        left: 180,
        height: 56,
        width: 162,
        overflow: "hidden",
        position: "absolute",
    },
    withYourCell: {
        top: 44,
        fontSize: 14,
        color: Color.colorGainsboro,
        height: 19,
        textAlign: "left",
        fontFamily: FontFamily.robotoBlack,
        fontWeight: "900",
        left: 0,
    },
    login1: {
        top: 5,
        left: 11,
        fontSize: 32,
        width: 132,
        transform: [
            {
                rotate: "0.7deg",
            },
        ],
        height: 37,
        textAlign: "left",
        color: Color.colorWhite,
        fontFamily: FontFamily.robotoBlack,
        fontWeight: "900",
        position: "absolute",
    },
    loginContainer: {
        left: 54,
        width: 144,
        height: 44,
        borderColor: Color.colorGainsboro,
        borderRadius: Border.br_5xs,
        top: 0,
    },
    frame1: {
        top: 162,
        left: 129,
        height: 63,
        overflow: "hidden",
    },
    frameItem: {
        width: 82,
        top: 3,
        opacity: 0.2,
        left: 0,
    },
    orLoginWith: {
        left: 138,
        color: Color.colorWhite,
        top: 0,
    },
    frame2: {
        top: 480,
        width: 280,
        height: 19,
    },
    frameInner: {
        top: 3,
        opacity: 0.2,
        left: 0,
    },
    frameView: {
        left: 96,
        top: 3,
    },
    frameChild1: {
        left: 249,
        top: 3,
    },
    frameChild2: {
        left: 371,
        top: 0,
    },
    frame3: {
        top: 512,
        height: 40,
        width: 433,
    },
    lineView: {
        left: 78,
        borderColor: "#271f1f",
        borderRightWidth: 1,
        width: 1,
        height: 72,
        top: 28,
        borderStyle: "solid",
        position: "absolute",
    },
    frameParent: {
        top: 362,
        width: 494,
        height: 592,
        overflow: "hidden",
        left: 0,
        position: "absolute",
    },
    loginScreen: {
        flex: 1,
        height: 930,
        width: "100%",
        backgroundColor: Color.colorGray_200,
    },
});

export default LoginScreen;
*/
