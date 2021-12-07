import React from 'react'

import { StyledTextButton, StyledButton } from './styled'

export const MainButtons = ({ action, text }) => {
    return (
        <>
            <StyledButton onPress={action}>
                <StyledTextButton>{text}</StyledTextButton>
            </StyledButton>
        </>
    )
}
