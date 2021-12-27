// @flow
import React from 'react'

import { View, StatusBar } from 'react-native'

import HeaderText from 'src/components/HeaderText'
import MainButton from 'src/components/MainButton'

import { styles } from 'src/styles'

type Props = {
    navigation: Object,
}

export default function Home({ navigation }: Props): React$MixedElement {
    return (
        <>
            <StatusBar barStyle="dark-content" />

            <View style={styles.mainBox}>
                <View style={styles.headerBox}>
                    <HeaderText text1="Todo" text2="list" />
                </View>

                <View style={styles.mainButtonsBox}>
                    <MainButton
                        action={() => navigation.navigate('MainPage')}
                        text="Move to tasks"
                    />
                </View>
            </View>
        </>
    )
}
