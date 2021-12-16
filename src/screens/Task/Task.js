import React, { useState } from 'react'
import { View, Text, Alert, Keyboard } from 'react-native'
import { EvilIcons, AntDesign, Feather } from '@expo/vector-icons'

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

import { styles } from 'src/styles'

import { colors } from 'src/theme'

import { fetchData } from 'src/api'

import { BottomSheets } from 'src/components/BottomSheets/BottomSheets'

import { maxInputStyle, focusStyle } from './helpers'

export const Task = ({
    index,
    task,
    fetchTodoList,
    setIsLoading,
    setIsFetchError,
}) => {
    const [isShowingBottomSheets, setIsShowingBottomSheets] = useState(false)
    const [inputText, setInputText] = useState('')
    const [isFocused, setIsFocused] = useState(false)

    const isDone = task.done === 'true' || task.done === 'TRUE'

    const getInputStyle = () => {
        if (inputText.length >= 30) return maxInputStyle
        if (isFocused) return focusStyle

        return {}
    }

    const handleTaskChange = async () => {
        setIsLoading(true)

        const body = {
            id: task.id,
            //Change it to task.name or task.title or task.text
            task: task.task,
            //In these kind of things is recommended to leave a comment to indicate that the api don't accept boolean and you need to use strings
            done: 'true',
        }

        try {
            const response = await fetchData('put', body, `/${index}`)

            setIsLoading(true)

            if (!response.data) throw Error

            //Why this is an array?
            fetchTodoList('Changing data')
        } catch {
            setTimeout(() => {
                setIsFetchError(true)
                setIsLoading(false)
            }, 3000)
        }
    }

    const handleEditTask = async () => {
        setIsShowingBottomSheets(false)

        setTimeout(() => {
            setIsLoading(true)
        }, 500)

        if (!inputText.length) {
            setIsShowingBottomSheets(true)
            Alert.alert('Input cannot be empty')
        }

        Keyboard.dismiss()

        const body = {
            id: task.id,
            task: inputText,
            done: task.done,
        }

        try {
            const response = await fetchData('put', body, `/${index}`)

            setIsLoading(true)

            if (!response.data) throw Error

            fetchTodoList('Editing data')
        } catch {
            setTimeout(() => {
                setIsFetchError(true)
                setIsLoading(false)
            }, 3000)
        }
    }

    const toggleBottomNavigationView = () => {
        setInputText(task.task)
        setIsShowingBottomSheets(!isShowingBottomSheets)
    }

    //This loadingModal is not a good name, it does much more than that, also, it should be a separated component instead of living on this screen
    const _loadingModal = () => (
        <>
            {/* //Use styled components */}
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
                        <ModalInputCounter>
                            {inputText.length}/30
                        </ModalInputCounter>
                    </ModalInputContainer>

                    <ModalInput
                        placeholder="Task name"
                        placeholderTextColor={colors.PLACEHOLDER_COLOR}
                        onChangeText={(text) => setInputText(text)}
                        defaultValue={inputText}
                        maxLength={30}
                        style={getInputStyle()}
                        onFocus={() => setIsFocused(true)}
                        onBlur={() => setIsFocused(false)}
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

            fetchTodoList('Deleting data')
        } catch {
            setTimeout(() => {
                setIsFetchError(true)
                setIsLoading(false)
            }, 3000)
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
                        // Try to use a better name, we should have the option to mark as done and not done the tasks instead of disabling it
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
                        /* //This should not be called DoneButton, this doesn't look like a done button */
                        <DoneButton onPress={handleTaskChange} />
                    )}

                    {/* //This should not be called DoneButton, this doesn't look like a done button */}
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
