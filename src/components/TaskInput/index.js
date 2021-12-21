// @flow
import React, { useState } from 'react'
import { Keyboard, Alert } from 'react-native'

import {
    InputHeader,
    InputHeaderText,
    InputBox,
    Input,
    InputButton,
    InputButtonText,
    InputCounter,
} from './styled'

import { colors } from 'src/theme'
import fetchData from 'src/api'
import { maxInputStyle, focusStyle } from './helpers'

type Props = {
    fetchTodoList: Function,
    setIsLoading: Function,
    taskCount: number,
    setIsFetchError: Function,
}

type TaskData = {
    id: number,
    name: string,
    index: number,
    done: string,
}

export default function TaskInput({
    fetchTodoList,
    setIsLoading,
    taskCount,
    setIsFetchError,
}: Props): React$MixedElement{
    const [inputText, setInputText]: [string, Function] = useState('')

    const [isFocused, setIsFocused]: [boolean, Function] = useState(false)

    const getInputStyle = () => {
        if (inputText.length >= 30) return maxInputStyle
        if (isFocused) return focusStyle

        return {}
    }

    const handleClick = async () => {
        setIsLoading(true)

        if (!inputText.length) {
            Alert.alert('Input cannot be empty')
            return fetchTodoList()
        }

        Keyboard.dismiss()

        const taskToPost: TaskData = {
            id: Date.now(),
            name: inputText,
            index: taskCount + 1,
            done: 'false',
        }

        try {
            const response = await fetchData('post', taskToPost)

            setIsLoading(true)

            if (!response.data) throw Error

            fetchTodoList('Adding new task')

            setInputText('')
        } catch {
            setTimeout(() => {
                setIsFetchError(true)
                setIsLoading(false)
            }, 3000)
        }
    }

    return (
        <>
            <InputHeader>
                <InputHeaderText>Create New Index</InputHeaderText>
                <InputCounter>{inputText.length}/30</InputCounter>
            </InputHeader>

            <InputBox>
                <Input
                    placeholder="Task name"
                    placeholderTextColor={colors.PLACEHOLDER_COLOR}
                    onChangeText={(text) => setInputText(text)}
                    defaultValue={inputText}
                    maxLength={30}
                    style={getInputStyle()}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                />

                <InputButton onPress={handleClick} type="submit">
                    <InputButtonText>+</InputButtonText>
                </InputButton>
            </InputBox>
        </>
    )
}
