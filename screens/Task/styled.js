import styled from '@emotion/native'

import { colors } from '../../theme'

export const DoneButton = styled.TouchableOpacity({
    width: 30,
    height: 30,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: colors.SECOND_BORDER_COLOR,
    backgroundColor: colors.BUTTON_DONE_COLOR,
    textAlign: 'center',
    borderRadius: 25,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
})

export const DoneButtonTrue = styled.TouchableOpacity({
    width: 30,
    height: 30,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: colors.TASK_DONE_COLOR,
    backgroundColor: colors.TASK_DONE_COLOR,
    textAlign: 'center',
    borderRadius: 25,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
})

export const DoneButtonText = styled.Text({
    fontSize: 15,
})

export const TaskBox = styled.View({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 2,
    borderStyle: 'solid',
    borderColor: colors.BORDER_COLOR,
    backgroundColor: colors.BACKGROUND_INPUT_COLOR,
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
})

export const TaskBoxDone = styled.View({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 2,
    borderStyle: 'solid',
    borderColor: colors.BORDER_COLOR,
    backgroundColor: colors.BACKGROUND_INPUT_COLOR,
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
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
    borderColor: colors.BORDER_COLOR,
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

export const EditButton = styled.TouchableOpacity({
    marginTop: 15,
    width: 60,
    height: 30,
    borderWidth: 1,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
})
