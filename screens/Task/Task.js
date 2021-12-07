import React, { useState } from 'react'

import { View, Text, Alert, Keyboard } from 'react-native'

import {
    DeleteButton,
    DoneButton,
    DoneButtonText,
    DoneButtonTrue,
    TaskBox,
    TaskBoxDone,
    ModalInput,
    ModalInputCounter,
    ModalInputContainer,
} from './styled'

import { fetchData } from 'api'
import { styles } from 'styles'

import { EvilIcons, AntDesign, Feather } from '@expo/vector-icons'
import { colors } from 'theme'
import { BottomSheets } from 'components/BottomSheets/BottomSheets'

export const Task = ({ task, index, fetchTodoList, setIsLoading }) => {
    const [isShowingBottomSheets, setIsShowingBottomSheets] = useState(false)
    const [input, setInput] = useState(task.task)
    const [focus, setFocus] = useState(false)

    const maxInputStyle = {
        borderColor: 'red',
        borderWidth: 1,
    }
    const focusStyle = {
        borderColor: 'grey',
        borderWidth: 1,
    }
    const customStyle = () => {
        if (input.length >= 30) return maxInputStyle
        if (focus) return focusStyle
    }

    const handleTaskChange = async () => {
        setIsLoading(true)

        const body = {
            id: index,
            task: task.task,
            done: 'true',
        }

        try {
            const response = await fetchData('put', body, `/${index}`)

            setIsLoading(true)

            if (!response.data) throw Error

            fetchTodoList()
        } catch {
            Alert.alert('There is error updating your task.')
        }
    }

    const handleEditTask = async () => {
        setIsShowingBottomSheets(false)
        setTimeout(() => {
            setIsLoading(true)
        }, 500)

        if (!input.length) {
            setIsShowingBottomSheets(true)
            Alert.alert('Input cannot be empty')
        }

        Keyboard.dismiss()

        const body = {
            id: index,
            task: input,
            done: task.done,
        }

        try {
            const response = await fetchData('put', body, `/${index}`)

            setIsLoading(true)

            if (!response.data) throw Error

            fetchTodoList()
        } catch {
            Alert.alert('There is error updating your task')
        }
    }

    const toggleBottomNavigationView = () => {
        setIsShowingBottomSheets(!isShowingBottomSheets)
    }

    const loadingModal = () => (
        <>
            <View
                style={{
                    height: 150,
                    marginTop: 40,
                    flexDirection: 'row',
                    justifyContent: 'center',
                }}
            >
                <View>
                    <ModalInputContainer>
                        <ModalInputCounter>{input.length}/30</ModalInputCounter>
                    </ModalInputContainer>
                    <ModalInput
                        placeholder="Task name"
                        placeholderTextColor={colors.PLACEHOLDER_COLOR}
                        onChangeText={(text) => setInput(text)}
                        defaultValue={input}
                        maxLength={30}
                        style={customStyle()}
                        onFocus={() => setFocus(true)}
                        onBlur={() => setFocus(false)}
                    />
                </View>
                <View style={styles.bottomSheetButtonsView}>
                    <DoneButton
                        style={{ marginLeft: 10 }}
                        onPress={handleEditTask}
                    >
                        <Feather name="edit-2" size={15} color="black" />
                    </DoneButton>
                    <DeleteButton
                        style={{ marginLeft: 10 }}
                        onPress={handleDeleteTask}
                    >
                        <DoneButtonText>
                            <EvilIcons name="trash" size={25} color="black" />
                        </DoneButtonText>
                    </DeleteButton>
                </View>
            </View>
        </>
    )

    const handleDeleteTask = async () => {
        setIsShowingBottomSheets(false)
        setTimeout(() => {
            setIsLoading(true)
        }, 500)

        try {
            const response = await fetchData('delete', null, `/${index}`)

            setIsLoading(true)

            if (!response.data) throw Error

            fetchTodoList()
        } catch {
            Alert.alert('There is error deleting your task.')
        }
    }

    if (task.done)
        return (
            <>
                <TaskBoxDone>
                    <View style={styles.taskTextBox}>
                        <Text style={styles.taskText}>{task.task}</Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        {task.done === 'true' || task.done === 'TRUE' ? (
                            <DoneButtonTrue disabled>
                                <DoneButtonText>
                                    <AntDesign
                                        name="check"
                                        size={20}
                                        color="black"
                                    />
                                </DoneButtonText>
                            </DoneButtonTrue>
                        ) : (
                            <DoneButton onPress={handleTaskChange} />
                        )}
                        <DoneButton
                            style={{ marginLeft: 10 }}
                            onPress={toggleBottomNavigationView}
                        >
                            <Feather
                                name="more-vertical"
                                size={18}
                                color="black"
                            />
                        </DoneButton>
                    </View>
                </TaskBoxDone>

                <BottomSheets
                    text={'Edit task'}
                    isShowingBottomSheets={isShowingBottomSheets}
                    toggleBottomNavigationView={toggleBottomNavigationView}
                    loadingModal={loadingModal}
                />
            </>
        )
}
