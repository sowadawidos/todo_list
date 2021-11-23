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

export const TaskInput = ({setTasks}) => {
    const [input, setInput] = useState()

    const handleClick = () => {
        if (input) {
            Keyboard.dismiss();
            setTasks(prev => [
                ...prev,
                {
                    task: input,
                    done: false
                }
            ])
            setInput('')
        } else {
            alert('Input cannot be empty')
        }
    }

    return (
        <>
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            >
                <InputBox>
                    <Input
                        placeholder="Type your tasks for today"
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

const InputBox = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Input = styled.TextInput`
  border: 1px solid black;
  height: 45px;
  width: 300px;
  border-radius: 10px;
  padding-left: 7px;
`;

const InputButton = styled.TouchableOpacity`
  width: 40px;
  height: 40px;
  border: 1px solid black;
  text-align: center;
  border-radius: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
`;

const InputButtonText = styled.Text`
  font-size: 25px;
`;

