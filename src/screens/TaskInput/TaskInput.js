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

export const TaskInput = ({ fetchTodoList, setIsLoading, lastIdTask }) => {
    //name it inputText to be more specific
    const [input, setInput] = useState('')

    //name it isFocused to be more specific
    // You want to use the 'is' verb when is a boolean variable
    const [focus, setFocus] = useState(false)

    //Use the pattern of the helpers file
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

    const handleClick = async () => {
        setIsLoading(true)

        if (!input.length) {
            Alert.alert('Input cannot be empty')
            return fetchTodoList()
        }

        Keyboard.dismiss()

        const taskToPost = {
            id: lastIdTask + 1,
            task: input,
            done: 'false',
        }

        try {
            const response = await fetchData('post', taskToPost)

            setIsLoading(true)

            if (!response.data) throw Error

            fetchTodoList('Adding new task')

            setInput('')
        } catch {
            // I don't think makes sense here to call fetchTodoList, just show the alert that something failed, anyways the user can press the + button again, no need to re-fetch
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
            <InputHeader>
                <InputHeaderText>Create New Task</InputHeaderText>
                <InputCounter>{input.length}/30</InputCounter>
            </InputHeader>

            <InputBox>
                <Input
                    placeholder="Task name"
                    placeholderTextColor={colors.PLACEHOLDER_COLOR}
                    onChangeText={(text) => setInput(text)}
                    defaultValue={input}
                    maxLength={30}
                    style={getInputStyle()}
                    onFocus={() => setFocus(true)}
                    onBlur={() => setFocus(false)}
                />

                <InputButton onPress={handleClick} type="submit">
                    <InputButtonText>+</InputButtonText>
                </InputButton>
            </InputBox>
        </>
    )
}
