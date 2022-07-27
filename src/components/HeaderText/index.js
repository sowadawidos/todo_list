// @flow
import React from 'react'

import { HeaderText1, HeaderText2 } from './styled'

type Props = {
    text1: string,
    text2: string
}

export default function HeaderText({ text1, text2 }: Props): React$MixedElement {
    return (
        <>
            <HeaderText1>{text1}</HeaderText1>
            <HeaderText2>{text2}</HeaderText2>
        </>
    )
}
