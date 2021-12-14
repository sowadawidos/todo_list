import React from 'react'
import { View, Text, ActivityIndicator } from 'react-native'

export const LoadingIndicator = ({
    loading,
    message,
    color,
    style,
    size
}) => {
    return (
        <>
            <ActivityIndicator
                style={style}
                size={size}
                animating={loading}
                color={color}
            />
            <Text style={{ color: 'black', textAlign: 'center' }}>
                {message}
            </Text>
        </>
    )
}
