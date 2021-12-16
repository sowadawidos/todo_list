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
import { fetchData } from 'src/api'
import { maxInputStyle, focusStyle } from 'src/screens/Task/helpers'

export default function TaskInput({
    fetchTodoList,
    setIsLoading,
    taskCount,
    setIsFetchError,
}) {
    const [inputText, setInputText] = useState('')

    const [isFocused, setIsFocused] = useState(false)

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

        const taskToPost = {
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
                    placeholder="Index name"
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
