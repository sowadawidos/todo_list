import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { Home } from 'screens/Home/Home'
import { MainPage } from 'screens/MainPage/MainPage'
import { colors } from 'theme'

const Stack = createNativeStackNavigator()

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Home"
                    component={Home}
                    options={{
                        title: '',
                        headerStyle: {
                            backgroundColor: colors.HEADER_NAV_COLOR,
                        },
                        headerShadowVisible: false,
                    }}
                />
                <Stack.Screen
                    name="MainPage"
                    options={{
                        title: 'Tasks',
                        headerStyle: {
                            backgroundColor: colors.HEADER_NAV_COLOR,
                            borderWidth: 0,
                        },
                        headerShadowVisible: false,
                    }}
                    component={MainPage}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
