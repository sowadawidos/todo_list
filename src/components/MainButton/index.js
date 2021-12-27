// @flow
import React from 'react'

import { StyledTextButton, StyledButton } from './styled'

type Props = {
    action: () => void,
    text: string
}

export default function MainButton({ action, text }: Props): React$MixedElement {
    return (
        <>
            <StyledButton onPress={action}>
                <StyledTextButton>{text}</StyledTextButton>
            </StyledButton>
        </>
    )
}
