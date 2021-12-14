import React from 'react'
import { View, Text, ActivityIndicator } from 'react-native'

export const LoadingIndicator = ({
    message = 'Loading',
    color = 'white',
    style = {},
    size = 'large',
}) => {
    return (
        <View
            style={{
                position: 'fixed',
                top: '40%',
                padding: 36,
                backgroundColor: 'gray',
                zIndex: 3,
            }}
        >
            <ActivityIndicator
                style={style}
                size={size}
                animating={true}
                color={color}
            />
            <Text style={{ color: 'white', textAlign: 'center' }}>
                {message}
            </Text>
        </View>
    )
}
