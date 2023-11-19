// TopTabNavigator.js

import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Screen1 from '../screens/Screen1';
import Screen2 from '../screens/Screen2';
import Screen3 from '../screens/Screen3';

const Tab = createMaterialTopTabNavigator();

const TopTabNavigator = () => {
    return (
        <Tab.Navigator
            initialRouteName="Screen1"
            tabBarOptions={{
                activeTintColor: '#FFFFFF',
                inactiveTintColor: '#F8F8F8',
                style: {
                    backgroundColor: '#633689',
                },
                indicatorStyle: {
                    height: 0,
                },
                showIcon: true,
            }}>
            <Tab.Screen
                name="Screen1"
                component={Screen1}
                options={{
                    tabBarLabel: 'Screen 1',
                }}
            />
            <Tab.Screen
                name="Screen2"
                component={Screen2}
                options={{
                    tabBarLabel: 'Screen 2',
                }}
            />
            <Tab.Screen
                name="Screen3"
                component={Screen3}
                options={{
                    tabBarLabel: 'Screen 3',
                }}
            />
        </Tab.Navigator>
    );
};

export default TopTabNavigator;