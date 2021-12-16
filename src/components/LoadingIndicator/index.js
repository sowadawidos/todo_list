import React from 'react'
import { ActivityIndicator } from 'react-native'
import { MessageText, LoadingIndicatorBox } from './styled'

export default function LoadingIndicator({
    message = 'Loading',
    color = 'white',
    style = {},
    size = 'large',
}) {
    return (
        <LoadingIndicatorBox>
            <ActivityIndicator
                style={style}
                size={size}
                animating={true}
                color={color}
            />

            <MessageText>{message}</MessageText>
        </LoadingIndicatorBox>
    )
}
