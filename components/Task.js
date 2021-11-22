import React, {useState, useEffect} from 'react'
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import styled from 'styled-components/native'

export const Task = ({task, tasks, index, setTasks}) => {

    const handleTaskChange = () => {
        const clonedTasks = [...tasks]
        clonedTasks[index].done = true
        setTasks(clonedTasks)
    }

    return (
        <>
            <TaskBox>
                <View style={styles.taskTextBox}>
                    <Text>{task.task}</Text>
                </View>
                <DoneButton onPress={handleTaskChange}>
                    <DoneButtonText>✓</DoneButtonText>
                </DoneButton>
            </TaskBox>
        </>
    )
}

const styles = StyleSheet.create({
    taskTextBox: {
        width: 300
    }
})

const DoneButton = styled.TouchableOpacity`
  width: 25px;
  height: 25px;
  border: 1px solid black;
  text-align: center;
  border-radius: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const DoneButtonText = styled.Text`
  font-size: 15px;
`;

const TaskBox = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #7c7c7c;
  padding: 10px;
  border-radius: 10px;
  margin-bottom: 10px;
`;