import React, { useState } from 'react'
import { Keyboard, Alert } from 'react-native'

import {
    InputHeader,
    InputBox,
    Input,
    InputButton,
    InputButtonText,
} from './styled'

import { colors } from 'theme'
import { fetchData } from 'api'

export const TaskInput = ({ data, fetchTodoList, setIsLoading }) => {
    const [input, setInput] = useState('')

    const handleClick = async () => {
        setIsLoading(true)

        if (!input.length) {
            Alert.alert('Input cannot be empty')
            return fetchTodoList()
        }

        Keyboard.dismiss()

        const taskToPost = {
            //I see when I want to post 0 number in google sheets its "" so I put string and now that works
            id: data.length === 0 ? '0' : data.length,
            task: input,
            //QUESTION: Why false is string and not a boolean value?
            done: 'false',
        }

        try {
            const response = await fetchData('post', taskToPost)

            setIsLoading(true)

            if (!response.data) throw Error

            fetchTodoList()

            setInput('')
        } catch {
            Alert.alert(
                'Something went wrong with adding your task. Try again.'
            )
        }
    }

    return (
        <>
            <InputHeader>Create New Task</InputHeader>
            <InputBox>
                <Input
                    placeholder="Task name"
                    placeholderTextColor={colors.PLACEHOLDER_COLOR}
                    onChangeText={(text) => setInput(text)}
                    defaultValue={input}
                />
                <InputButton onPress={handleClick}>
                    <InputButtonText>+</InputButtonText>
                </InputButton>
            </InputBox>
        </>
    )
}
