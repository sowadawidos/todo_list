import styled from '@emotion/native'

import { Platform } from 'react-native'

export const HeaderText1 = styled.Text({
    fontSize: 38,
    fontWeight: Platform.OS === 'android' ? 'bold' : '800',
    letterSpacing: 7,
})

export const HeaderText2 = styled.Text({
    fontSize: 25,
    fontWeight: '500',
    paddingLeft: 50,
})
