import React from 'react'

import { HeaderText1, HeaderText2 } from './styled'

export default function HeaderText({ text1, text2 }) {
    return (
        <>
            <HeaderText1>{text1}</HeaderText1>
            <HeaderText2>{text2}</HeaderText2>
        </>
    )
}
