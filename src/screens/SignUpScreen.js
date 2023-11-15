import React from 'react';
import { Text, View, ImageBackground, Image, StyleSheet } from 'react-native';
import { styles } from './styles'; // Assuming styles are exported from a separate file

const FrameBackground = ({children}) => (
    <ImageBackground
        style={styles.frameIcon}
        resizeMode="cover"
        source={require("../assets/frame.png")}
    >
        {children}
    </ImageBackground>
);

const StatusBar = ({children}) => (
    <View style={styles.iphoneXsBarsStatusDe}>
        <View style={[styles.iphoneXsBarsStatusDe1, styles.iphonePosition]}>
            <View style={[styles.iphoneXsBarsStatusDe2, styles.iphonePosition]}>
                {children}
            </View>
        </View>
    </View>
);

const TimeDisplay = () => (
    <View style={styles.action}>
        <Text style={[styles.time, styles.timeTypo]}>9:41</Text>
    </View>
);

const ContainerIcon = () => (
    <Image
        style={styles.containerIcon}
        source={require("../assets/container.svg")}
    />
);

const SobResturants = () => (
    <View style={styles.sobResturants}>
        <Text style={[styles.sobResturants1, styles.timeTypo]}>
            <Text style={styles.sobResturantsTxtContainer}>
                {/* Content goes here */}
            </Text>
        </Text>
    </View>
);

// Usage
const SignUp = () => (
    <FrameBackground>
        <StatusBar>
            <TimeDisplay />
            <ContainerIcon />
        </StatusBar>
        <SobResturants />
        {/* Other components */}
    </FrameBackground>
);

export default SignUp;