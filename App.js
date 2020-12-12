// App.js

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './components/login';
import Signup from './components/signup';
import Dashboard from './components/dashboard';
import Calendar from './components/calendar';

const Stack = createStackNavigator();

function MyStack() {
    return (
        <Stack.Navigator
            initialRouteName="Signup"
            screenOptions={{
                headerTitleAlign: 'center',
                headerStyle: {
                    backgroundColor: '#000',
                },
                headerTintColor: '#FF69B4',
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
            }}>
            <Stack.Screen
                name="Signup"
                component={Signup}
                options={{ title: 'Sign up' }}
            />
            <Stack.Screen
                name="Login"
                component={Login}
                options={
                    {title: 'Login'},
                {headerLeft: null}
                }
            />
            <Stack.Screen
                name="Dashboard"
                component={Dashboard}
                options={
                    { title: 'Dashboard' },
                {headerLeft: null}
                }
            />
            <Stack.Screen
                name={"Calendar"}
                component={Calendar}
                options={
                    {title: 'Calendar'},
                {headerLeft: null}
                } />
        </Stack.Navigator>
    );
}

export default function App() {
    return (
        <NavigationContainer>
            <MyStack />
        </NavigationContainer>
    );
}
