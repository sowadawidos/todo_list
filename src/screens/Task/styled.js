import styled from '@emotion/native'

import { colors } from 'src/theme'

export const ChangeToFalseButton = styled.TouchableOpacity({
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

export const ChangeToTrueButton = styled.TouchableOpacity({
    width: 30,
    height: 30,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: colors.BUTTON_COLOR,
    backgroundColor: colors.BUTTON_DONE_COLOR,
    textAlign: 'center',
    borderRadius: 25,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
})

export const BottomNavigationButton = styled.TouchableOpacity({
    width: 30,
    height: 30,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: colors.BUTTON_COLOR,
    backgroundColor: colors.BUTTON_DONE_COLOR,
    textAlign: 'center',
    borderRadius: 25,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
})

export const ChangeToFalseText = styled.Text({
    fontSize: 15,
})

export const TaskBox = styled.View({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 2,
    borderStyle: 'solid',
    borderColor: colors.BUTTON_COLOR,
    backgroundColor: colors.BACKGROUND_INPUT_COLOR,
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
})

export const BoxForTasks = styled.View({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 2,
    borderStyle: 'solid',
    borderColor: colors.BUTTON_COLOR,
    backgroundColor: colors.BACKGROUND_INPUT_COLOR,
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
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
