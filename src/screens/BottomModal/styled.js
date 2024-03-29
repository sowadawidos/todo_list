import styled from '@emotion/native'

import { colors } from 'src/theme'

export const SaveButton = styled.TouchableOpacity({
    width: 80,
    paddingLeft: 22,
    paddingTop: 5,
    paddingBottom: 5,
    marginTop: 5,
    borderWidth: 2,
    borderStyle: 'solid',
    borderColor: colors.BUTTON_COLOR,
    textAlign: 'center',
    borderRadius: 10,
})

export const DeleteButton = styled.TouchableOpacity({
    width: 30,
    height: 30,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: colors.DELETE_BUTTON,
    backgroundColor: colors.DELETE_BUTTON,
    textAlign: 'center',
    borderRadius: 25,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
})

export const ModalInput = styled.TextInput({
    borderWidth: 2,
    borderStyle: 'solid',
    borderColor: colors.BUTTON_COLOR,
    backgroundColor: colors.BACKGROUND_INPUT_COLOR,
    height: 45,
    width: 240,
    borderRadius: 10,
    paddingLeft: 7,
})

export const ModalInputContainer = styled.View({
    width: 250,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
})

export const ModalInputCounter = styled.Text({
    fontSize: 12,
    marginRight: 15,
    marginBottom: 2,
})

export const DoneButtonText = styled.Text({
    fontSize: 15,
})

export const BottomModalView = styled.View({
    height: 150,
    marginTop: 40,
    flexDirection: 'row',
    justifyContent: 'center',
})

export const SaveButtonBox = styled.View({
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
})
