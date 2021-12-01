import React from 'react'

import { View, StatusBar } from 'react-native'

import { HeaderText } from 'components/HeaderText/HeaderText'
import { MainButtons } from 'components/MainButtons/MainButtons'

import { styles } from 'styles'

export const Home = ({ navigation }) => {
    return (
        <>
            <StatusBar barStyle="dark-content" />
            <View style={styles.mainBox}>
                <View style={styles.headerBox}>
                    <HeaderText />
                </View>
                <View style={styles.mainButtonsBox}>
                    <MainButtons navigation={navigation} />
                </View>
            </View>
        </>
    )
}
