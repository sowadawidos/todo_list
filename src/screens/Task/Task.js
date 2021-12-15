import React, { useState } from 'react'

import { View, Text, Alert, Keyboard } from 'react-native'

import {
    DeleteButton,
    DoneButton,
    DoneButtonText,
    DoneButtonTrue,
    TaskBoxDone,
    ModalInput,
    ModalInputCounter,
    ModalInputContainer,
    SaveButton,
} from './styled'

import { fetchData } from 'src/api'
import { styles } from 'src/styles'

import { EvilIcons, AntDesign, Feather } from '@expo/vector-icons'
import { colors } from 'src/theme'
import { BottomSheets } from 'src/components/BottomSheets/BottomSheets'

export const Task = ({ task, index, fetchTodoList, setIsLoading }) => {
    const [isShowingBottomSheets, setIsShowingBottomSheets] = useState(false)
    const [input, setInput] = useState('')
    const [focus, setFocus] = useState(false)

    const isDone = task.done === 'true' || task.done === 'TRUE'

    const maxInputStyle = {
        borderColor: 'red',
        borderWidth: 1,
    }
    const focusStyle = {
        borderColor: 'grey',
        borderWidth: 1,
    }
    const getInputStyle = () => {
        if (input.length >= 30) return maxInputStyle
        if (focus) return focusStyle
    }

    const handleTaskChange = async () => {
        setIsLoading(true)

        const body = {
            id: task.id,
            task: task.task,
            done: 'true',
        }

        try {
            const response = await fetchData('put', body, `/${index}`)

            setIsLoading(true)

            if (!response.data) throw Error

            fetchTodoList(['Changing data'])
        } catch {
            Alert.alert('Something went wrong. Try again.', '', [
                {
                    text: 'Reload',
                    onPress: () => fetchTodoList(),
                    style: 'cancel',
                },
                { text: 'Cancel', onPress: () => setIsLoading(false) },
            ])
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
            id: task.id,
            task: input,
            done: task.done,
        }

        try {
            const response = await fetchData('put', body, `/${index}`)

            setIsLoading(true)

            if (!response.data) throw Error

            fetchTodoList(['Editing data'])
        } catch {
            Alert.alert('Something went wrong. Try again.', '', [
                {
                    text: 'Reload',
                    onPress: () => fetchTodoList(),
                    style: 'cancel',
                },
                { text: 'Cancel', onPress: () => setIsLoading(false) },
            ])
        }
    }

    const toggleBottomNavigationView = () => {
        setInput(task.task)
        setIsShowingBottomSheets(!isShowingBottomSheets)
    }

    const _loadingModal = () => (
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
                        style={getInputStyle()}
                        onFocus={() => setFocus(true)}
                        onBlur={() => setFocus(false)}
                    />
                    <View
                        style={{
                            display: 'flex',
                            justifyContent: 'flex-end',
                            alignItems: 'center',
                        }}
                    >
                        <SaveButton onPress={handleEditTask}>
                            <Text>Save</Text>
                        </SaveButton>
                    </View>
                </View>
                <View style={styles.bottomSheetButtonsView}>
                    <DeleteButton onPress={handleDeleteTask}>
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

            fetchTodoList(['Deleting data'])
        } catch {
            Alert.alert('Something went wrong. Try again.', '', [
                {
                    text: 'Reload',
                    onPress: () => fetchTodoList(),
                    style: 'cancel',
                },
                { text: 'Cancel', onPress: () => setIsLoading(false) },
            ])
        }
    }

    return (
        <>
            <TaskBoxDone>
                <View style={styles.taskTextBox}>
                    <Text style={styles.taskText}>{task.task}</Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    {isDone ? (
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
                        <Feather name="more-vertical" size={18} color="black" />
                    </DoneButton>
                </View>
            </TaskBoxDone>

            <BottomSheets
                text={'Edit task'}
                isShowingBottomSheets={isShowingBottomSheets}
                toggleBottomNavigationView={toggleBottomNavigationView}
                loadingModal={_loadingModal}
            />
        </>
    )
}
