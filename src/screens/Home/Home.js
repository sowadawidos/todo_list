import React from 'react'

import { View, StatusBar } from 'react-native'

//Instead, name the component file as index instead of HeaderText, that way you can import like
//import { HeaderText } from 'src/components/HeaderText'

import { HeaderText } from 'src/components/HeaderText/HeaderText'
import { MainButtons } from 'src/components/MainButtons/MainButtons'

import { styles } from 'src/styles'

//Notice how the component is a default export
// Prefer this type of syntax for components instead of const
// Also, notice the spaces to let other developers read in an easier way the code
export default function Home({ navigation }) {
    return (
        <>
            <StatusBar barStyle="dark-content" />

            <View style={styles.mainBox}>
                <View style={styles.headerBox}>
                    <HeaderText text1="Todo" text2="list" />
                </View>

                <View style={styles.mainButtonsBox}>
                    <MainButtons
                        action={() => navigation.navigate('MainPage')}
                        text="Move to tasks"
                    />
                </View>
            </View>
        </>
    )
}
