import React, {useState, useEffect} from 'react'
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    KeyboardAvoidingView,
    Platform,
    Keyboard
} from 'react-native'
import styled from 'styled-components/native'
import axios from "axios";

export const TaskInput = ({setTasks, data}) => {
    const [input, setInput] = useState("")

    const handleClick = () => {
        if (input) {
            Keyboard.dismiss();
            if (data.length > 0) {
                const taskToPost = {
                    Id: data.length,
                    task: input,
                    done: "false"
                }
                axios.post('https://sheet.best/api/sheets/a7a820d7-7507-445e-af71-b820116fcd38', taskToPost)
                setInput('')
            }
        } else {
            alert('Input cannot be empty')
        }
    }

    return (
        <>
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            >
                <InputHeader>Create New Task</InputHeader>
                <InputBox>
                    <Input
                        placeholder="Task name"
                        onChangeText={text => setInput(text)}
                        defaultValue={input}
                    />
                    <InputButton onPress={handleClick}>
                        <InputButtonText>+</InputButtonText>
                    </InputButton>

                </InputBox>
            </KeyboardAvoidingView>
        </>
    )
}
const InputHeader = styled.Text({
    fontSize: 16,
    fontWeight: 600,
    marginBottom: 5
})

const InputBox = styled.View({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
})

const Input = styled.TextInput({
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: 'black',
    height: 45,
    width: 300,
    borderRadius: 10,
    paddingLeft: 7
})

const InputButton = styled.TouchableOpacity({
    width: 40,
    height: 40,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: 'black',
    textAlign: 'center',
    borderRadius: 25,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10
})

const InputButtonText = styled.Text({
    fontSize: 25
})

