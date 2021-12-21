// @flow
import React, { useState } from 'react'
import { View, Text, Alert, Keyboard } from 'react-native'
import { AntDesign, Feather } from '@expo/vector-icons'

import {
    ChangeToTrueButton,
    ChangeToFalseText,
    ChangeToFalseButton,
    BoxForTasks,
    BottomNavigationButton,
} from './styled'

import { styles } from 'src/styles'

import { fetchData } from 'src/api'

import BottomSheetModal from 'src/components/BottomSheet'
import BottomModal from 'src/screens/BottomModal'

import { maxInputStyle, focusStyle } from './helpers'

type Props = {
    task: Object,
    fetchTodoList: Function,
    setIsLoading: Function,
    setIsFetchError: Function,
}

type taskBody = {
    id: number,
    name: string,
    done: string,
    index: number,
}

export default function Task({
    task,
    fetchTodoList,
    setIsLoading,
    setIsFetchError,
}: Props) {
    const [isShowingBottomSheets, setIsShowingBottomSheets]: [
        boolean,
        Function
    ] = useState(false)
    const [inputText, setInputText]: [string, Function] = useState('')
    const [isFocused, setIsFocused]: [boolean, Function] = useState(false)

    const isDone: boolean = task.done === 'true' || task.done === 'TRUE'

    const getInputStyle = () => {
        if (inputText.length >= 30) return maxInputStyle
        if (isFocused) return focusStyle

        return {}
    }

    const handleTaskChange = async () => {
        setIsLoading(true)

        const body: taskBody = {
            id: task.id,
            name: task.name,
            //api don't accept boolean and I need to use string
            done: isDone ? 'false' : 'true',
            index: task.index,
        }

        try {
            const response = await fetchData(
                'put',
                body,
                `/${Number(task.index) - 1}`
            )

            setIsLoading(true)

            if (!response.data) throw Error

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

        const body: taskBody = {
            id: task.id,
            name: inputText,
            done: task.done,
            index: task.index,
        }

        try {
            const response = await fetchData(
                'put',
                body,
                `/${Number(task.index) - 1}`
            )

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
        setInputText(task.name)
        setIsShowingBottomSheets(!isShowingBottomSheets)
    }

    const handleDeleteTask = async () => {
        setIsShowingBottomSheets(false)
        setIsLoading(true)

        try {
            const response = await fetchData(
                'delete',
                null,
                `/${Number(task.index) - 1}`
            )

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
            <BoxForTasks>
                <View style={styles.taskTextBox}>
                    <Text style={styles.taskText}>{task.name}</Text>
                </View>

                <View style={{ flexDirection: 'row' }}>
                    {isDone ? (
                        <ChangeToFalseButton onPress={handleTaskChange}>
                            <ChangeToFalseText>
                                <AntDesign
                                    name="check"
                                    size={20}
                                    color="black"
                                />
                            </ChangeToFalseText>
                        </ChangeToFalseButton>
                    ) : (
                        <ChangeToTrueButton onPress={handleTaskChange} />
                    )}

                    <BottomNavigationButton
                        style={{ marginLeft: 10 }}
                        onPress={toggleBottomNavigationView}
                    >
                        <Feather name="more-vertical" size={18} color="black" />
                    </BottomNavigationButton>
                </View>
            </BoxForTasks>
            <BottomSheetModal
                text={'Edit task'}
                isShowingBottomSheets={isShowingBottomSheets}
                toggleBottomNavigationView={toggleBottomNavigationView}
            >
                <BottomModal
                    getInputStyle={getInputStyle}
                    handleDeleteTask={handleDeleteTask}
                    handleEditTask={handleEditTask}
                    inputText={inputText}
                    setInputText={setInputText}
                    setIsFocused={setIsFocused}
                />
            </BottomSheetModal>
        </>
    )
}
