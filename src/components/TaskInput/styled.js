import styled from '@emotion/native'

import { colors } from 'src/theme'
import { Platform } from 'react-native'

export const InputHeaderText = styled.Text({
    fontSize: Platform.OS === 'android' ? 20 : 18,
    fontWeight: Platform.OS === 'android' ? '700' : '600',
    marginBottom: 5,
})

export const InputBox = styled.View({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
})

export const Input = styled.TextInput({
    borderWidth: 2,
    borderStyle: 'solid',
    borderColor: colors.BUTTON_COLOR,
    backgroundColor: colors.BACKGROUND_INPUT_COLOR,
    height: 45,
    width: 300,
    borderRadius: 10,
    paddingLeft: 7,
})

export const InputButton = styled.TouchableOpacity({
    width: 40,
    height: 40,
    borderWidth: 2,
    borderStyle: 'solid',
    borderColor: colors.BUTTON_COLOR,
    backgroundColor: colors.BACKGROUND_INPUT_COLOR,
    textAlign: 'center',
    borderRadius: 25,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
})

export const InputButtonText = styled.Text({
    fontSize: 25,
})

export const InputHeader = styled.View({
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
})

export const InputCounter = styled.Text({
    marginRight: 60,
    fontSize: 12,
    color: colors.PLACEHOLDER_COLOR,
})
