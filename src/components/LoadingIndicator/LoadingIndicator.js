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
            <Text style={{ color: 'black', textAlign: 'center' }}>
                {message}
            </Text>
        </>
    )
}
