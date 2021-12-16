import React from 'react'

import { StyledTextButton, StyledButton } from './styled'

//Why this is a plural and is just one button?
export const MainButtons = ({ action, text }) => {
    return (
        <>
            <StyledButton onPress={action}>
                <StyledTextButton>{text}</StyledTextButton>
            </StyledButton>
        </>
    )
}
