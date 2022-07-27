// @flow
import React from 'react'
import { ActivityIndicator } from 'react-native'
import { MessageText, LoadingIndicatorBox } from './styled'

type Props = {
    message: string,
    color: string,
    style: Object,
    size: "small" | "large",
}

export default function LoadingIndicator({
    message = 'Loading',
    color = 'white',
    style,
    size = "large",
}: Props): React$Node {
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
