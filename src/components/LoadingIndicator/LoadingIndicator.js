import React from 'react'
import { View, Text, ActivityIndicator } from 'react-native'
import { MessageText } from './styled'

export const LoadingIndicator = ({
    message = 'Loading',
    color = 'white',
    style = {},
    size = 'large',
}) => {
    return (
        //Use styled components
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
                //We are passing true here always because we want to show or not show the component based on the parent component condition
                //for example: if(isTrue) return <ActivityIndicator/>
                animating={true}
                color={color}
            />

            <MessageText>{message}</MessageText>
        </View>
    )
}
