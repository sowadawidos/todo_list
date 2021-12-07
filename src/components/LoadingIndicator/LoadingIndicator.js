import React from 'react'
import { Text, ActivityIndicator } from 'react-native'

export const LoadingIndicator = ({ loading, message, color, style, size }) => {
    return (
        <>
            <ActivityIndicator
                style={style}
                size={size}
                animating={loading}
                color={color}
            />
            <Text>{message}</Text>
        </>
    )
}
