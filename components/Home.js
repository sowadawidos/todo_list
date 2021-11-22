import React, {useState, useEffect} from 'react'
import {View, Text, StyleSheet, Button} from 'react-native'
import {HeaderText} from "./HeaderText";
import {MainButtons} from "./MainButtons";

export const Home = ({navigation}) => {
    return (
        <>
            <View style={styles.mainBox}>
                <View style={styles.headerBox}>
                    <HeaderText/>
                </View>
                <View style={styles.mainButtonsBox}>
                    <MainButtons navigation={navigation}/>
                </View>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    mainBox: {
        flex: 1,
        backgroundColor: '#ffffff'
    },
    headerBox: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    mainButtonsBox: {
        flex: 3,
        justifyContent: 'center',
        alignItems: 'center'
    }
});