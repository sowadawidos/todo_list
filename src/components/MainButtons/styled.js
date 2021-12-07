import styled from '@emotion/native'
import { colors } from '../../theme'
import { Platform } from 'react-native'

export const StyledButton = styled.TouchableOpacity({
    width: 250,
    height: 70,
    borderRadius: 20,
    borderWidth: 2,
    borderStyle: 'solid',
    borderColor: colors.BUTTON_COLOR,
    backgroundColor: colors.BACKGROUND_INPUT_COLOR,
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    marginBottom: 45,
})

export const StyledTextButton = styled.Text({
    fontSize: 20,
    fontWeight: Platform.OS === 'android' ? '700' : '500',
    textAlign: 'center',
    textTransform: 'uppercase',
})
