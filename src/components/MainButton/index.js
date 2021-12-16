import React from 'react'

import { StyledTextButton, StyledButton } from './styled'

export default function MainButton({ action, text }) {
    return (
        <>
            <StyledButton onPress={action}>
                <StyledTextButton>{text}</StyledTextButton>
            </StyledButton>
        </>
    )
}
