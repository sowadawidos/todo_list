import React from 'react'

import { View, StatusBar } from 'react-native'

import { HeaderText } from 'src/components/HeaderText/HeaderText'
import { MainButtons } from 'src/components/MainButtons/MainButtons'

import { styles } from 'src/styles'

export const Home = ({ navigation }) => {
    return (
        <>
            <StatusBar barStyle="dark-content" />
            <View style={styles.mainBox}>
                <View style={styles.headerBox}>
                    <HeaderText text1={"Todo"} text2={"list"}/>
                </View>
                <View style={styles.mainButtonsBox}>
                    <MainButtons action={() => navigation.navigate('MainPage')} text={"Move to tasks"}/>
                </View>
            </View>
        </>
    )
}
