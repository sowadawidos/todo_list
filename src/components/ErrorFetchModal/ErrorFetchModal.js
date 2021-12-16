import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { styles } from 'src/styles'

export const ErrorFetchModal = ({ pressAction }) => {
    return (
        <View style={styles.errorFetchModalView}>
            <Text style={styles.errorFetchModalText}>There was an error</Text>

            <TouchableOpacity onPress={pressAction}>
                <Text>Try Again</Text>
            </TouchableOpacity>
        </View>
    )
}
