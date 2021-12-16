import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

//This is the correct way to do it, you just have 1 component, so is clear if you use export default on those cases
import Home from 'src/screens/Home/Home'
import { MainPage } from 'src/screens/MainPage/MainPage'
import { colors } from 'src/theme'

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
                        title: '',
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
