// @flow
import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { styles } from 'src/styles'

type Props = {
    pressAction: () => Promise<void>,
}

export default function ErrorFetchModal({ pressAction }: Props): React$MixedElement {
    return (
        <View style={styles.errorFetchModalView}>
            <Text style={styles.errorFetchModalText}>There was an error</Text>

            <TouchableOpacity onPress={pressAction}>
                <Text>Try Again</Text>
            </TouchableOpacity>
        </View>
    )
}
